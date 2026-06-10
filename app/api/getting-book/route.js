import { requireAuth } from "@/lib/apiGuard";
import { dbConnect } from "@/lib/dbConnect";
import CommitCache from "@/models/commitCacheSchema";
import Story from "@/models/storySchema";
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

    // ── Step 1: DB তে আগে চেক করো ──
    const cached = await CommitCache.findOne({
      userId: auth.user.id,
      repoName,
    });

    if (cached) {
      console.log(`[getting-book] Cache hit for repo: ${repoName}`);
      return NextResponse.json(
        { cleanCommits: cached.cleanCommits, source: "cache" },
        { status: 200 },
      );
    }

    const alreadyExisting = await Story.findOne({
      userId: auth.user.id,
      repoName,
    });

    if (alreadyExisting) {
      console.log(`[getting-book] Story already exists for repo: ${repoName}`);
      return NextResponse.json(
        {
          success: true,
          data: alreadyExisting,
          message: "Story already exists for this repository",
        },
        { status: 200 },
      );
    }

    const user = await User.findById(auth.user.id);

    if (!user?.githubAccessToken || !user?.githubUsername) {
      return NextResponse.json(
        { error: "GitHub account not connected" },
        { status: 400 },
      );
    }

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
      const ghErr = await commitsRes.json().catch(() => ({}));
      console.error("[getting-book] GitHub error:", ghErr);
      return NextResponse.json(
        { error: "Failed to fetch commits from GitHub" },
        { status: 500 },
      );
    }

    const commits = await commitsRes.json();

    const cleanCommits = Array.isArray(commits)
      ? commits.map((item) => ({
          message: item.commit?.message || "No message",
          date: item.commit?.author?.date || "",
        }))
      : [];

    // ── Step 3: DB তে save করো ──
    await CommitCache.create({
      userId: auth.user.id,
      repoName,
      cleanCommits,
    });

    console.log(`[getting-book] Saved ${cleanCommits.length} commits to cache`);

    return NextResponse.json(
      { cleanCommits, source: "github" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error in /api/getting-book:", error);
    return NextResponse.json(
      { error: "Failed to fetch book data" },
      { status: 500 },
    );
  }
}
