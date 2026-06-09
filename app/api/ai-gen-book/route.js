import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { repoName } = await request.json();
    if (!repoName) {
      return NextResponse.json(
        { error: "repoName is required" },
        { status: 400 },
      );
    }

    const existingStory = await Story.findOne({ repoName: repoName });

    if (existingStory) {
      return NextResponse.json(
        {
          data: existingStory,
          message: "Story already exists for this repository",
        },
        { status: 200 },
      );
    }

    //
  } catch (error) {
    console.error("Error in /api/ai-gen-book:", error);
    return NextResponse.json(
      { error: "Failed to generate book data" },
      { status: 500 },
    );
  }
}
