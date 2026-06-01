import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import { z } from "zod";
import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/userSchema";

import {
  generateAccessToken,
  generateRefreshToken,
  getAccessTokenExpiry,
  getRefreshTokenExpiry,
  verifyRefreshToken,
} from "@/lib/tokenUtils";

const credentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

function hashToken(token) {
  return crypto.createHash("sha256").update(token).digest("hex");
}

async function rotateTokenSetForUser(user) {
  const accessToken = generateAccessToken(user._id);
  const refreshToken = generateRefreshToken(user._id);
  const refreshTokenHash = hashToken(refreshToken);
  const refreshTokenExpires = new Date(getRefreshTokenExpiry());
  const accessTokenExpires = getAccessTokenExpiry();

  user.refreshToken = refreshTokenHash;
  user.refreshTokenExpires = refreshTokenExpires;
  await user.save();

  return {
    accessToken,
    refreshToken,
    accessTokenExpires,
    refreshTokenExpires: refreshTokenExpires.getTime(),
  };
}

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await dbConnect();

        const parsed = credentialsSchema.safeParse(credentials);
        if (!parsed.success) {
          return null;
        }

        const { email, password } = parsed.data;
        const user = await User.findOne({ email: email.toLowerCase() });
        if (!user || !user.password) {
          return null;
        }

        const matched = await bcrypt.compare(password, user.password);
        if (!matched) {
          return null;
        }

        return {
          id: user._id.toString(),
          email: user.email,
          name: user.name,
          image: user.image || null,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      await dbConnect();

      if (account?.provider !== "google") {
        return true;
      }

      const existing = await User.findOne({ email: user.email?.toLowerCase() });
      if (existing) {
        user.id = existing._id.toString();
        return true;
      }

      // নতুন ইউজার ক্রিয়েট (userType/shopId বা কুকি চেকিং বাদ)
      const created = await User.create({
        name: user.name || "Google User",
        email: (user.email || "").toLowerCase(),
        password: null, // গুগল লগইনে পাসওয়ার্ড থাকে না
        image: user.image || null,
      });

      user.id = created._id.toString();
      return true;
    },

    async jwt({ token, user }) {
      // trigger ও session প্যারামিটার বাদ দেওয়া হয়েছে
      // ─── Case 1: Initial sign-in ───
      if (user?.id) {
        await dbConnect();
        const dbUser = await User.findById(user.id);
        if (!dbUser) {
          return { ...token, error: "UserNotFound" };
        }

        const rotated = await rotateTokenSetForUser(dbUser);

        token.sub = dbUser._id.toString();
        token.picture = dbUser.image || null;
        token.accessToken = rotated.accessToken;
        token.refreshToken = rotated.refreshToken;
        token.accessTokenExpires = rotated.accessTokenExpires;
        token.error = undefined;

        return token;
      }

      // ─── Case 2: Access token still valid ───
      if (Date.now() < Number(token.accessTokenExpires || 0)) {
        return token;
      }

      // ─── Case 3: Access token expired — verify & rotate ───
      const refreshPayload = verifyRefreshToken(token.refreshToken);
      if (!refreshPayload?.sub) {
        return { ...token, error: "RefreshAccessTokenError" };
      }

      await dbConnect();
      const dbUser = await User.findById(refreshPayload.sub);
      if (!dbUser || !dbUser.refreshToken || !dbUser.refreshTokenExpires) {
        return { ...token, error: "RefreshAccessTokenError" };
      }

      const storedHash = dbUser.refreshToken;
      const incomingHash = hashToken(token.refreshToken || "");
      const isExpired = dbUser.refreshTokenExpires.getTime() < Date.now();

      if (storedHash !== incomingHash || isExpired) {
        return { ...token, error: "RefreshAccessTokenError" };
      }

      const rotated = await rotateTokenSetForUser(dbUser);

      return {
        ...token,
        sub: dbUser._id.toString(),
        picture: dbUser.image || null,
        accessToken: rotated.accessToken,
        refreshToken: rotated.refreshToken,
        accessTokenExpires: rotated.accessTokenExpires,
        error: undefined,
      };
    },

    async session({ session, token }) {
      session.user = {
        ...session.user,
        id: token.sub,
        image: token.picture || null,
      };

      session.accessToken = token.accessToken;
      session.accessTokenExpires = token.accessTokenExpires;
      session.error = token.error;

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const { handlers, auth, signIn, signOut } = NextAuth(authOptions);
