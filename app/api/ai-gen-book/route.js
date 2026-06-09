import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import Story from "@/models/storySchema";
import { requireAuth } from "@/lib/apiGuard";

export async function POST(request) {
  try {
    await dbConnect();
    const auth = await requireAuth(request);
    if (!auth.ok) return auth.response;

    const { repoName, cleanCommits } = await request.json();

    if (!repoName || !cleanCommits || cleanCommits.length === 0) {
      return NextResponse.json(
        { error: "repoName and commits are required" },
        { status: 400 },
      );
    }

    const existingStory = await Story.findOne({
      repoName: repoName,
      userId: auth.user.id,
    });

    if (existingStory) {
      console.log("ডাটাবেস থেকেই গল্প পাঠানো হচ্ছে...");
      return NextResponse.json(
        {
          success: true,
          data: existingStory,
          message: "Story already exists for this repository",
        },
        { status: 200 },
      );
    }

    const commitMessages = cleanCommits
      .map((c, index) => `${index + 1}. ${c.message}`)
      .join("\n");
    const promptText = `You are an elite, highly imaginative novelist and anime/manga story writer. 
Your task is to analyze a developer's real GitHub commit logs for a project named "${repoName}" and transform them into an epic, highly engaging fictional story divided into 3 to 5 chapters.

CRITICAL INSTRUCTIONS FOR GENRE & CREATIVITY:
1. Do NOT write a dry technical summary. Turn the code into a living universe!
2. Be wildly creative with the genre. Based on the commit messages, dynamically pick an exciting genre. It could be Psychological Horror (e.g., fighting a cursed, invisible glitch), Cyberpunk/Sci-Fi (e.g., a netrunner breaching a megacorp), High Fantasy/Adventure (e.g., a mage forging a magical artifact), or even an unexpected Romantic/Drama twist where lines of code represent threads of destiny.
3. Match the tone perfectly with the chosen genre. If it's Horror, make it creepy and intense. If it's Adventure, make it an epic quest.
4. Translate the developer's real-world actions (e.g., fixing bugs, adding text normalization, implementing Pusher for real-time updates, refactoring) into thrilling narrative events (e.g., purifying poisoned wells, stabilizing reality rifts, setting up telepathic links, upgrading ancient armor).

Developer's Commit Logs (Chronological sequence):
${commitMessages}

Output Requirements:
- Identify the chosen genre in the "storyType" field (e.g., "Horror", "Cyberpunk", "Fantasy", "Adventure").
- Generate between 3 to 5 chapters. Ensure each chapter has a compelling "chapterTitle" and deep, narrative-rich "content".`;

    const requestBody = {
      contents: [{ parts: [{ text: promptText }] }],
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "OBJECT",
          properties: {
            storyType: { type: "STRING" },
            coverPhoto: { type: "STRING", nullable: true },
            story: {
              type: "ARRAY",
              items: {
                type: "OBJECT",
                properties: {
                  chapterTitle: { type: "STRING" },
                  content: { type: "STRING" },
                  chapterCover: { type: "STRING", nullable: true },
                },
                required: ["chapterTitle", "content"],
              },
            },
          },
          required: ["storyType", "story"],
        },
      },
    };

    const aiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      },
    );

    if (!aiResponse.ok) {
      throw new Error("Failed to communicate with Gemini API");
    }

    const aiData = await aiResponse.json();
    const generatedText = aiData.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!generatedText) {
      throw new Error("AI returned an empty response");
    }

    const storyJson = JSON.parse(generatedText);

    const newStory = await Story.create({
      userId: auth.user.id,
      repoName: repoName,
      storyType: storyJson.storyType,
      coverPhoto: null,
      story: storyJson.story,
    });

    return NextResponse.json(
      {
        success: true,
        data: newStory,
        message: "New story generated and saved successfully!",
      },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to generate book data" },
      { status: 500 },
    );
  }
}
