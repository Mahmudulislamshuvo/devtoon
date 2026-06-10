import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/dbConnect";
import CommitCache from "@/models/commitCacheSchema";
import Story from "@/models/storySchema";
import { requireAuth } from "@/lib/apiGuard";

export async function POST(request) {
  try {
    await dbConnect();
    const auth = await requireAuth(request);
    if (!auth.ok) return auth.response;

    const { repoName, cleanCommits: bodyCommits } = await request.json();

    if (!repoName) {
      return NextResponse.json(
        { error: "repoName is required" },
        { status: 400 },
      );
    }

    // ── Step 1: Story DB তে আগে আছে কিনা চেক ──
    const existingStory = await Story.findOne({
      repoName,
      userId: auth.user.id,
    });

    if (existingStory) {
      console.log("[ai-gen-book] Existing story found in DB");
      return NextResponse.json(
        {
          success: true,
          data: existingStory,
          message: "Story already exists for this repository",
        },
        { status: 200 },
      );
    }

    // ── Step 2: cleanCommits — body থেকে নাও, না থাকলে commit cache থেকে ──
    let cleanCommits = bodyCommits;

    if (!cleanCommits || cleanCommits.length === 0) {
      const cached = await CommitCache.findOne({
        userId: auth.user.id,
        repoName,
      });

      if (!cached || cached.cleanCommits.length === 0) {
        return NextResponse.json(
          { error: "No commits found. Please fetch commits first." },
          { status: 400 },
        );
      }

      cleanCommits = cached.cleanCommits;
      console.log("[ai-gen-book] Using commits from cache");
    }

    const commitMessages = cleanCommits
      .map((c, index) => `${index + 1}. ${c.message}`)
      .join("\n");
    const promptText = `You are an elite, highly imaginative novelist and anime/manga story writer. 
Your task is to analyze a developer's real GitHub commit logs for a project named "${repoName}" and transform them into an epic, highly engaging fictional story divided into 3 to 5 chapters.

CRITICAL INSTRUCTIONS FOR GENRE & CREATIVITY:
1. Do NOT write a dry technical summary. Turn the code into a living universe!
2. Be wildly creative with the genre. Pick an exciting genre (e.g., Psychological Horror, Cyberpunk/Sci-Fi, High Fantasy/Adventure, or Romantic/Drama).
3. Translate the developer's real-world actions into thrilling narrative events.
4. BILINGUAL REQUIREMENT: For each chapter, you MUST provide the story in English ("contentEng") and a highly expressive, natural Bengali translation of that exact chapter ("contentBang"). Ensure the Bengali translation captures the emotional tone and cinematic feel of the story perfectly.

🚨 5. STRICT LENGTH LIMIT (PREVENT PAGE OVERFLOW):
To prevent the text from overflowing the physical book page layout, each chapter MUST be concise and compact. 
- The "contentEng" for EACH chapter MUST be strictly between 120 to 150 words (Maximum 900 characters).
- The "contentBang" translation MUST also match this length and be between 120 to 150 words.
- Do NOT generate long walls of text. Ensure the story is punchy and fits entirely on one page without scrolling.

Developer's Commit Logs:
${commitMessages}

Output Requirements:
- "storyType": The chosen genre.
- "story": Generate 3 to 5 chapters. Each chapter must have "chapterTitle", "contentEng" (English), and "contentBang" (Bengali), strictly adhering to the length limit.`;

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
                  contentEng: {
                    type: "STRING",
                    description: "The English content of the chapter.",
                  },
                  contentBang: {
                    type: "STRING",
                    description:
                      "The highly expressive Bengali translation of the English content.",
                  },
                  chapterCover: { type: "STRING", nullable: true },
                },
                required: ["chapterTitle", "contentEng", "contentBang"],
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
      const aiErr = await aiResponse.json().catch(() => ({}));
      console.error("[ai-gen-book] Gemini error:", aiErr);
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

    // Story সফলভাবে তৈরি হয়েছে — commit cache আর দরকার নেই, delete করো
    await CommitCache.deleteOne({ userId: auth.user.id, repoName });
    console.log(`[ai-gen-book] Commit cache deleted for repo: ${repoName}`);

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
