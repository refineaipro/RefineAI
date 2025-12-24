import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

const prompt = `
You are a Job Description Decoder.

Your task is to translate job descriptions into SIMPLE, CLEAR, HUMAN language.

Rules:
- NEVER say "hard to summarize" or "not clearly specified".
- If something is vague, make a reasonable assumption based on the text.
- Be direct and practical.
- Write like you're explaining the role to a friend.
- Do NOT hedge excessively.

Return JSON ONLY in this exact format:

{
  "summary": "1–2 simple sentences explaining what this job is really about",
  "intent": "What the company actually wants from the hire",
  "experience": "What level of experience they likely expect",
  "skills": ["3–5 practical skills"],
  "reality": "One honest sentence about what candidates should expect"
}
`;

export async function simplifyJD(rawJD: string) {
  const response = await client.chat.completions.create({
    model: "gpt-4o",
    temperature: 0.3,
    messages: [
      { role: "system", content: prompt },
      { role: "user", content: rawJD },
    ],
  });

  return response.choices[0].message.content;
}
