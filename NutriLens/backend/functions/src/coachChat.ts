import { onCall, HttpsError } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import * as logger from "firebase-functions/logger";
import OpenAI from "openai";
import { COACH_SYSTEM_PROMPT } from "./lib/prompts";
import { enforceRateLimit } from "./lib/ratelimit";
import { buildCoachSummary, CoachContext } from "./lib/coach";
import { loadCoachContext } from "./lib/coachData";

const OPENAI_API_KEY = defineSecret("OPENAI_API_KEY");

interface CoachRequest {
  message: string;
  recentDays: number;
}

/**
 * /coachChat — RAG over the user's OWN aggregates (not external sources). We assemble a compact
 * summary from Firestore, not raw logs, to keep token cost low, then answer with the text model.
 */
export const coachChat = onCall(
  { secrets: [OPENAI_API_KEY], enforceAppCheck: true, timeoutSeconds: 30 },
  async (request) => {
    const uid = request.auth?.uid;
    if (!uid) throw new HttpsError("unauthenticated", "Sign in required.");

    const data = request.data as CoachRequest;
    if (!data?.message?.trim()) {
      throw new HttpsError("invalid-argument", "Empty message.");
    }

    await enforceRateLimit(uid, "coachMessages");

    const context: CoachContext = await loadCoachContext(uid, data.recentDays ?? 7);
    const summary = buildCoachSummary(context);

    const client = new OpenAI({ apiKey: OPENAI_API_KEY.value() });
    try {
      const completion = await client.chat.completions.create({
        model: "gpt-text-latest",
        temperature: 0.4,
        messages: [
          { role: "system", content: COACH_SYSTEM_PROMPT },
          { role: "system", content: `User data summary: ${summary}` },
          { role: "user", content: data.message },
        ],
      });
      const text = completion.choices[0]?.message?.content ?? "";
      logger.info("coachChat", {
        uid,
        inputTokens: completion.usage?.prompt_tokens,
        outputTokens: completion.usage?.completion_tokens,
      });
      return { text };
    } catch (err) {
      logger.error("coachChat failed", { uid, err: String(err) });
      throw new HttpsError("unavailable", "Coach temporarily unavailable.");
    }
  }
);
