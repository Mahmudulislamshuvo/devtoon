import { NextResponse } from "next/server";
import { requireAuth } from "@/lib/apiGuard";
import User from "@/models/userSchema";
import { decryptToken } from "@/utils/encryption";

export async function GET(request) {
  try {
    const auth = await requireAuth(request);

    if (!auth.ok) {
      return auth.response;
    }

    const userId = auth.user.id || auth.user._id;

    const dbUser = await User.findById(userId);

    if (!dbUser || !dbUser.githubAccessToken) {
      return NextResponse.json(
        { error: "GitHub token not found. Please login with GitHub." },
        { status: 404 },
      );
    }

    const githubToken = decryptToken(dbUser.githubAccessToken);

    if (!githubToken) {
      return NextResponse.json(
        { error: "Failed to decrypt GitHub token" },
        { status: 500 },
      );
    }

    const response = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${githubToken}`,
        Accept: "application/vnd.github.v3+json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`GitHub API responded with status ${response.status}`);
    }

    const userData = await response.json();
    return NextResponse.json(userData);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch user info" },
      { status: 500 },
    );
  }
}
