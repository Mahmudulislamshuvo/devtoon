import { requireAuth } from "@/lib/apiGuard";
import { dbConnect } from "@/lib/dbConnect";
import User from "@/models/userSchema";
import { decryptToken } from "@/utils/encryption";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const auth = await requireAuth(request);
    if (!auth.ok) return auth.response;

    const { searchParams } = new URL(request.url);
    const page = searchParams.get("page") || 1;
    const perPage = 6;

    await dbConnect();
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

    const username = user.githubUsername;

    const reposRes = await fetch(
      `https://api.github.com/user/repos?sort=updated&per_page=${perPage}&page=${page}`,
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

    const hasNextPage = finalGithubData.length === perPage;
    const nextPage = hasNextPage ? parseInt(page) + 1 : null;

    return NextResponse.json(
      {
        success: true,
        data: finalGithubData,
        nextPage: nextPage,
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
