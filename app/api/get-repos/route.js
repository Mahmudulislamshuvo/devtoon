import { requireAuth } from "@/lib/apiGuard";
import User from "@/models/userSchema";
import { decryptToken } from "@/utils/encryption";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const auth = await requireAuth(request);
    if (!auth.ok) return auth.response;

    const user = await User.findOne({ email: auth.user.email });
    if (!user || !user.githubAccessToken) {
      return NextResponse.json(
        { error: "GitHub not connected" },
        { status: 400 },
      );
    }

    const githubToken = decryptToken(user.githubAccessToken);
    const headers = {
      Authorization: `Bearer ${githubToken}`,
      Accept: "application/vnd.github.v3+json",
    };

    // ⚡ ডাটাবেস থেকে সরাসরি ইউজারনেম নেওয়া হচ্ছে (সুপার ফাস্ট)
    const username = user.githubUsername;

    // getting latest 6 repos sorted by last updated
    const reposRes = await fetch(
      `https://api.github.com/user/repos?sort=updated&per_page=6`,
      { headers },
    );
    if (!reposRes.ok) {
      return NextResponse.json(
        { error: "Failed to fetch repositories" },
        { status: 500 },
      );
    }

    const repositories = await reposRes.json();

    const finalGithubData = await Promise.all(
      repositories.map(async (repo) => {
        const commitsRes = await fetch(
          `https://api.github.com/repos/${username}/${repo.name}/commits?author=${username}&per_page=1`,
          { headers },
        );

        let totalCommits = 0;

        if (commitsRes.ok) {
          const commitsData = await commitsRes.json();

          if (Array.isArray(commitsData) && commitsData.length > 0) {
            totalCommits = 1;

            const linkHeader = commitsRes.headers.get("link");
            if (linkHeader) {
              const match = linkHeader.match(/page=(\d+)>;\s*rel="last"/);
              if (match) {
                totalCommits = parseInt(match[1], 10);
              }
            }
          }
        }

        // প্রতিটা ম্যাপের অবজেক্ট রিটার্ন হচ্ছে যা Promise.all একসাথে অ্যারে বানিয়ে দেবে
        return {
          id: repo.id,
          repoName: repo.name,
          description: repo.description,
          language: repo.language || "Unknown",
          stargazers_count: repo.stargazers_count || 0,
          totalCommitsFetched: totalCommits,
        };
      }),
    );

    return NextResponse.json(
      {
        success: true,
        message: "Data retrieved successfully",
        data: finalGithubData,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  }
}
