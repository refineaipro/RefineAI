import { NextResponse } from "next/server";

/**
 * Robust field extractor
 * - Works even if Gemini JSON is imperfect
 * - Prevents fallback-only behavior
 */
function extractFields(text: string) {
  const cleaned = text.replace(/```json|```/gi, "").trim();

  try {
    return JSON.parse(cleaned);
  } catch {
    const get = (key: string) => {
      const match = cleaned.match(
        new RegExp(`"${key}"\\s*:\\s*"(.*?)"`, "s")
      );
      return match ? match[1].trim() : "";
    };

    const skillsMatch = cleaned.match(/"skills"\\s*:\\s*\\[(.*?)\\]/s);
    const skills =
      skillsMatch?.[1]
        ?.split(",")
        .map((s) => s.replace(/["\n]/g, "").trim())
        .filter(Boolean) || [];

    return {
      summary: get("summary"),
      intent: get("intent"),
      experience: get("experience"),
      skills,
      reality: get("reality"),
    };
  }
}

export async function POST(req: Request) {
  try {
    const { jd } = await req.json();
    if (!jd) {
      return NextResponse.json({ error: "JD missing" }, { status: 400 });
    }

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `
Return ONLY valid JSON.

Rules:
- Summary must start with "You will mostly..."
- Summary must describe day-to-day work in simple language
- Avoid buzzwords and company fluff
- Be concrete and human

{
  "summary": "string",
  "intent": "string",
  "experience": "string",
  "skills": ["string"],
  "reality": "string"
}

Job Description:
${jd}
`,
                },
              ],
            },
          ],
        }),
      }
    );

    const data = await res.json();
    const rawText =
      data?.candidates?.[0]?.content?.parts?.map((p: any) => p.text).join("\n") ||
      "";

    const parsed = extractFields(rawText);

    return NextResponse.json({
      summary:
        parsed.summary ||
        "You will mostly work on the core responsibilities described in the job post.",
      intent:
        parsed.intent ||
        "They want someone dependable who can deliver work without constant supervision.",
      experience:
        parsed.experience ||
        "Experience expectations are implied rather than explicitly stated.",
      skills:
        parsed.skills?.length > 0
          ? parsed.skills.slice(0, 6)
          : ["General professional skills"],
      reality:
        parsed.reality ||
        "Some expectations may only become clear during interviews.",
    });
  } catch (err) {
    console.error("JD Simplifier API error:", err);
    return NextResponse.json(
      { error: "Failed to analyze JD" },
      { status: 500 }
    );
  }
}
