export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  let jd: string;

  // 1️⃣ SAFE body parsing (CRITICAL)
  try {
    const body = await req.json();
    jd = body?.jd;
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }

  if (!jd || typeof jd !== "string") {
    return NextResponse.json(
      { error: "JD missing or invalid" },
      { status: 400 }
    );
  }

  // Short JD fallback
  if (jd.trim().length < 40) {
    return NextResponse.json({
      summary:
        "This role involves general responsibilities, but the description is too brief to show clear priorities.",
      intent:
        "They likely want someone flexible who can support multiple tasks as needed.",
      experience:
        "The seniority level isn’t explicitly stated, but some independence is expected.",
      skills: [],
      reality:
        "You’ll need to ask direct questions to understand expectations more clearly.",
    });
  }

  try {
    // 2️⃣ OPENAI CALL
    const completion = await client.chat.completions.create({
      model: "gpt-3.5-turbo",
      temperature: 0.35,
      messages: [
        {
          role: "system",
          content: `
You are an experienced hiring manager.

Decode job descriptions into honest, plain-English explanations.

Rules:
- Never hedge or say information is unclear.
- Infer intent even when vague.
- Be concrete and practical.
- Avoid buzzwords.
- Output valid JSON only.
`,
        },
        {
          role: "user",
          content: `
Return JSON only in this format:

{
  "summary": "1–2 sentence description of the role",
  "intent": "What the company actually wants this hire to deliver",
  "experience": "Inferred seniority level in simple language",
  "skills": ["Only clearly implied skills"],
  "reality": "One honest expectation or tradeoff"
}

Job Description:
${jd}
`,
        },
      ],
    });

    const raw = completion.choices[0]?.message?.content;

    if (!raw) {
      throw new Error("Empty response from OpenAI");
    }

    // 3️⃣ SAFE JSON CLEANING (CRITICAL)
    const cleaned = raw
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const parsed = JSON.parse(cleaned);

    return NextResponse.json(parsed);
  } catch (err: any) {
    console.error("JD SIMPLIFIER PROD ERROR:", err);

    return NextResponse.json(
      {
        error: "OpenAI failed in production",
        message: err?.message,
      },
      { status: 500 }
    );
  }
}
