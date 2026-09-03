import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const Input = z.object({
  messages: z
    .array(
      z.object({
        role: z.enum(["user", "assistant"]),
        content: z.string().min(1).max(4000),
      }),
    )
    .min(1)
    .max(30),
});

const SYSTEM_PROMPT = `You are the AI Doubt Solver for Badddie Education Center, a free education center on Tonk Road, Jaipur (open 9 AM - 8 PM, 24/7 student helpline 1800-123-4567).
You help students (Class 6-12, JEE, NEET, boards), teachers and working professionals.
Rules:
- Answer clearly, step by step, in simple language. Use markdown with short headings, bullet points and bold key terms.
- Show full working for maths/science problems. Write formulas in plain text/unicode (e.g. x² , √, ÷) — never use LaTeX or $ math delimiters.
- If a question needs a human, suggest calling the 24/7 helpline 1800-123-4567 or visiting the Tonk Road center.
- Keep answers friendly and encouraging. Reply in the language the student used (English or Hindi/Hinglish).`;

export const askDoubt = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => Input.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env["LOVABLE_API_KEY"];
    if (!apiKey) throw new Error("AI is not configured. Missing LOVABLE_API_KEY.");

    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3.6-flash",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...data.messages],
      }),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      if (res.status === 429) {
        throw new Error("Too many requests right now. Please wait a moment and try again.");
      }
      if (res.status === 402) {
        throw new Error("AI credits are exhausted. Please contact the center to top up.");
      }
      throw new Error(`AI request failed (${res.status}). ${text.slice(0, 200)}`);
    }

    const json = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const answer = json.choices?.[0]?.message?.content?.trim();
    if (!answer) throw new Error("The AI did not return an answer. Please try again.");
    return { answer };
  });
