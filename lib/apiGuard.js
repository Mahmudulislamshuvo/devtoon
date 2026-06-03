import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { dbConnect } from "@/lib/dbConnect";
import { verifyAccessToken } from "@/lib/tokens";
import User from "@/models/userSchema";

function getBearerToken(request) {
  const header = request?.headers?.get("authorization") || "";

  if (!header.startsWith("Bearer ")) {
    return "";
  }

  return header.slice(7).trim();
}

export async function requireAuth(request) {
  const bearerToken = getBearerToken(request);

  if (bearerToken) {
    const payload = verifyAccessToken(bearerToken);

    if (!payload?.sub) {
      return {
        ok: false,
        response: NextResponse.json(
          { message: "Unauthorized" },
          { status: 401 },
        ),
      };
    }

    await dbConnect();

    const user = await User.findById(payload.sub);
    if (!user) {
      return {
        ok: false,
        response: NextResponse.json(
          { message: "Unauthorized" },
          { status: 401 },
        ),
      };
    }

    return {
      ok: true,
      user: {
        id: user._id.toString(),
        email: user.email,
        name: user.name,
        userType: user.userType,
        shopId: user.shopId ? user.shopId.toString() : null,
      },
      token: payload,
    };
  }

  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    return {
      ok: false,
      response: NextResponse.json({ message: "Unauthorized" }, { status: 401 }),
    };
  }

  return {
    ok: true,
    user: session.user,
    session,
  };
}

// export async function requireRole(role, request) {
//   const authResult = await requireAuth(request);
//   if (!authResult.ok) {
//     return authResult;
//   }

//   if (authResult.user.userType !== role) {
//     return {
//       ok: false,
//       response: NextResponse.json({ message: "Forbidden" }, { status: 403 }),
//     };
//   }

//   return authResult;
// }

//=====================Example usage in an API route:===================for checking auth
// import { NextResponse } from "next/server";
// import { requireAuth } from "@/lib/serverAuth";

// export async function GET(request) {
//   const auth = await requireAuth(request);
//   if (!auth.ok) {
//     return auth.response;
//   }

//   return NextResponse.json({ user: auth.user });
// }

//=====================Example usage in an API route:===================for checking auth + role
// import { NextResponse } from "next/server";
// import { requireRole } from "@/lib/serverAuth";

// export async function GET(request) {
//   const auth = await requireRole("shopOwner", request);
//   if (!auth.ok) {
//     return auth.response;
//   }

//   return NextResponse.json({ message: "Owner only data", user: auth.user });
// }
