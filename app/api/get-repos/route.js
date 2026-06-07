import { requireAuth } from "@/lib/apiGuard";
import User from "@/models/userSchema";
import { decryptToken } from "@/utils/encryption";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const auth = await requireAuth(request);

    if (!auth) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = await User.findOne({ email: auth?.user?.email });

    console.log("Authenticated user:", await auth?.user);

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 400 });
    }

    if (!user.githubAccessToken) {
      return NextResponse.json(
        { error: "Github not connected, please connect with Github" },
        { status: 400 },
      );
    }

    const decryptedGithubToken = decryptToken(user.githubAccessToken);

    if (!decryptedGithubToken) {
      return NextResponse.json(
        { error: "Failed to decrypt Github token" },
        { status: 500 },
      );
    }

    const response = await fetch(
      `https://api.github.com/user/repos?sort=updated&per_page=10`,
      {
        headers: {
          Authorization: `Bearer ${decryptedGithubToken}`,
          Accept: "application/vnd.github.v3+json",
        },
      },
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch repositories from Github" },
        { status: response.status },
      );
    }

    const repositories = await response.json();

    return NextResponse.json({ repositories });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch repositories" },
      { status: 500 },
    );
  }
}
