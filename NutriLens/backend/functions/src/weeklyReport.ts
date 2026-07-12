import { onCall, HttpsError } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import OpenAI from "openai";
import { loadCoachContext } from "./lib/coachData";
import { buildCoachSummary } from "./lib/coach";

const OPENAI_API_KEY = defineSecret("OPENAI_API_KEY");

/**
 * /weeklyReport — a short, encouraging narrative of the last 7 days built from the user's own
 * aggregates. Called on demand (and by a scheduled trigger in production).
 */
export const weeklyReport = onCall(
  { secrets: [OPENAI_API_KEY], enforceAppCheck: true, timeoutSeconds: 30 },
  async (request) => {
    const uid = request.auth?.uid;
    if (!uid) throw new HttpsError("unauthenticated", "Sign in required.");

    const context = await loadCoachContext(uid, 7);
    const summary = buildCoachSummary(context);

    const client = new OpenAI({ apiKey: OPENAI_API_KEY.value() });
    const completion = await client.chat.completions.create({
      model: "gpt-text-latest",
      temperature: 0.5,
      messages: [
        {
          role: "system",
          content:
            "Write a concise, encouraging weekly nutrition report (max 120 words) with one " +
            "concrete, actionable suggestion. Base it only on the provided summary.",
        },
        { role: "user", content: summary },
      ],
    });

    return { report: completion.choices[0]?.message?.content ?? "" };
  }
);
