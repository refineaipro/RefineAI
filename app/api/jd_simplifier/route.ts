import { NextResponse } from "next/server";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { jd } = await req.json();

    // Basic guard
    if (!jd || jd.trim().length < 40) {
      return NextResponse.json({
        summary:
          "This role appears to involve general responsibilities, but the description is too brief to show clear priorities.",
        intent:
          "They likely want someone flexible who can handle multiple tasks as needed.",
        experience:
          "The seniority level is not obvious, but some independent work is expected.",
        skills: [],
        reality:
          "You’ll need to ask detailed questions to understand what the job really looks like day to day.",
      });
    }

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.35,
      messages: [
        {
          role: "system",
          content: `
You are an experienced hiring manager and career mentor.

Your job is to decode job descriptions into honest, plain-English explanations.

STRICT RULES:
- NEVER say: "unclear", "hard to summarize", "not specified", or similar hedging phrases.
- Infer intent even if details are vague.
- Be concrete and practical, as if explaining to a friend.
- Avoid corporate buzzwords and marketing language.
- Vary wording across different job descriptions.
- Do NOT give advice or encouragement.
- Keep language simple and human.
- Output ONLY valid JSON. No markdown. No extra text.
`,
        },
        {
          role: "user",
          content: `
Break down the job description below.

Think carefully about:
- What this person will actually do most days
- Why the company is hiring this role
- The level of responsibility implied
- Any expectations hidden between the lines

Return EXACT JSON in this format:

{
  "summary": "1–2 sentences explaining what this job mainly involves",
  "intent": "What the company really expects this person to own or deliver",
  "experience": "Inferred seniority level explained in simple language",
  "skills": ["Only skills that are clearly implied or required"],
  "reality": "One honest thing a candidate should be prepared for"
}

Job Description:
${jd}
`,
        },
      ],
    });

    const rawText = completion.choices[0].message.content;
    const parsed = JSON.parse(rawText || "{}");

    return NextResponse.json(parsed);
  } catch (error: any) {
    console.error("JD SIMPLIFIER API ERROR:", error.message);
    return NextResponse.json(
      { error: "Failed to analyze job description." },
      { status: 500 }
    );
  }
}
