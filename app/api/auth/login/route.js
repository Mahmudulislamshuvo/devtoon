import User from "@/models/userSchema";
import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";
import crypto from "crypto";
import { z } from "zod";
import { comparePepperedPassword } from "@/utils/pepperPassword";
import {
  generateAccessToken,
  generateRefreshToken,
  getAccessTokenExpiry,
  getRefreshTokenExpiry,
} from "@/lib/tokens";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Validate input
    const validatedData = loginSchema.safeParse({ email, password });

    if (!validatedData.success) {
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 400 },
      );
    }

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 },
      );
    }

    // Check if the password matches
    const isMatch = await comparePepperedPassword(password, user.password);

    if (!isMatch) {
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 },
      );
    }

    const hashToken = (token) => {
      return crypto.createHash("sha256").update(token).digest("hex");
    };

    // If login is successful, you can generate a token or set a session here
    const accessToken = generateAccessToken(user._id);
    const refreshToken = generateRefreshToken(user._id);
    const refreshTokenExpires = new Date(getRefreshTokenExpiry());
    const accessTokenExpires = getAccessTokenExpiry();
    const refreshTokenHash = hashToken(refreshToken);

    // refresh token saved in db
    user.refreshToken = refreshTokenHash;
    user.refreshTokenExpires = refreshTokenExpires;
    await user.save();

    // Set the refresh token in an HTTP-only cookie
    const response = NextResponse.json(
      {
        success: true,
        message: "Login successful",
        user: {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
        },
        accessToken,
        refreshToken,
        accessTokenExpires,
        refreshTokenExpires: refreshTokenExpires.getTime(),
      },
      { status: 200 },
    );

    // Set the refresh token in an HTTP-only cookie
    response.cookies.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 1 * 24 * 60 * 60,
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred while processing the login request." },
      { status: 500 },
    );
  }
}
