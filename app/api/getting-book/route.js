import { requireAuth } from "@/lib/apiGuard";
import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/userSchema";
import { decryptToken } from "@/utils/encryption";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const auth = await requireAuth(request);
    if (!auth.ok) return auth.response;

    const { repoName } = await request.json();

    if (!repoName) {
      return NextResponse.json(
        { error: "repoName is required" },
        { status: 400 },
      );
    }

    await dbConnect();
    const user = await User.findOne({ email: auth.user.email });
    const githubToken = decryptToken(user.githubAccessToken);
    const username = user.githubUsername;

    const headers = {
      Authorization: `Bearer ${githubToken}`,
      Accept: "application/vnd.github.v3+json",
    };

    const commitsRes = await fetch(
      `https://api.github.com/repos/${username}/${repoName}/commits?author=${username}&per_page=100`,
      { headers },
    );

    if (!commitsRes.ok) {
      return NextResponse.json(
        { error: "Failed to fetch commits for this repo" },
        { status: 500 },
      );
    }

    const commits = await commitsRes.json();

    const cleanCommits = Array.isArray(commits)
      ? commits.map((item) => ({
          message: item.commit?.message || "No message",
          date: item.commit?.author?.date || "", // কাজের সঠিক সময়টি বের করে আনা হলো
        }))
      : [];

    return NextResponse.json({ cleanCommits });
  } catch (error) {
    console.error("Error in /api/getting-book:", error);
    return NextResponse.json(
      { error: "Failed to fetch book data 500" },
      { status: 500 },
    );
  }
}
