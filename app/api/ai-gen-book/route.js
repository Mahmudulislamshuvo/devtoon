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
    const promptText = `You are an imaginative storyteller and anime/manga writer. 
Your task is to analyze a developer's real GitHub commit logs for a project named "${repoName}" and transform them into an exciting fictional story divided into 3 to 5 chapters.

CRITICAL INSTRUCTIONS FOR GENRE & CREATIVITY:
1. Do NOT write a dry technical summary. Turn the code into a living universe!
2. Pick an exciting genre (e.g., Cyberpunk/Sci-Fi, High Fantasy/Adventure, Horror, or Drama).
3. Translate the developer's real-world actions into thrilling narrative events.

LANGUAGE & TONE REQUIREMENT (EASY & NATURAL):
- ENGLISH ("contentEng"): Use simple, natural, and engaging English. Avoid overly complex, archaic, or obscure vocabulary so it is easy and fun for anyone to read.
- BENGALI ("contentBang"): Use simple, natural, and standard colloquial Bengali (সহজ ও সাবলীল চলিত বাংলা). Avoid heavy, archaic, or overly formal Sadhu words (সাধু ভাষা পরিহার করুন). It should read like a modern, exciting storybook in plain Bengali.

🚨 STRICT LENGTH LIMIT (PREVENT PAGE OVERFLOW):
To prevent the text from overflowing the physical book page layout, each chapter MUST be concise and compact:
- The "contentEng" for EACH chapter MUST be strictly between 120 to 150 words (Maximum 900 characters).
- The "contentBang" translation MUST also match this length and be between 120 to 150 words.
- Do NOT generate long walls of text. Keep sentences clean, punchy, and easy to follow.

Developer's Commit Logs:
${commitMessages}

Output Requirements:
- "storyType": The chosen genre.
- "story": Generate 3 to 5 chapters. Each chapter must have "chapterTitle", "contentEng" (simple English), and "contentBang" (simple Bengali), strictly adhering to the length limit.`;
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

    // ── Gemini API রিট্রাই হেল্পার (মাক্স ৩ বার) ──
    const fetchGeminiWithRetry = async (url, options, maxRetries = 3) => {
      let lastError;
      for (let attempt = 1; attempt <= maxRetries; attempt++) {
        try {
          const res = await fetch(url, options);
          if (!res.ok) {
            const aiErr = await res.json().catch(() => ({}));
            console.error(
              `[ai-gen-book] Gemini error (attempt ${attempt}/${maxRetries}):`,
              aiErr,
            );
            throw new Error(
              aiErr?.error?.message || "Failed to communicate with Gemini API",
            );
          }
          return res;
        } catch (err) {
          lastError = err;
          if (attempt < maxRetries) {
            const delayMs = attempt * 1500; // 1.5s → 3s → ...
            console.warn(
              `[ai-gen-book] Retry ${attempt}/${maxRetries} after ${delayMs}ms — ${err.message}`,
            );
            await new Promise((resolve) => setTimeout(resolve, delayMs));
          }
        }
      }
      throw lastError;
    };

    const aiResponse = await fetchGeminiWithRetry(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      },
    );

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
