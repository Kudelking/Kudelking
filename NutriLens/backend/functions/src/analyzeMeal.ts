import { onCall, HttpsError } from "firebase-functions/v2/https";
import { defineSecret } from "firebase-functions/params";
import * as logger from "firebase-functions/logger";
import { MEAL_ANALYSIS_SYSTEM_PROMPT, MEAL_ANALYSIS_SCHEMA } from "./lib/prompts";
import { getCachedAnalysis, putCachedAnalysis } from "./lib/cache";
import { enforceRateLimit } from "./lib/ratelimit";
import { enrichWithUsda } from "./lib/usda";
import { analyzeImage, estimateCostUSD } from "./lib/openai";

const OPENAI_API_KEY = defineSecret("OPENAI_API_KEY");

interface AnalyzeRequest {
  imageBase64: string;
  perceptualHash: string;
  goal: string;
  remainingCalories: number;
  allergies: string[];
  unitSystem: string;
}

/**
 * /analyzeMeal — the ONLY place the OpenAI key is used.
 * Enforces App Check + auth, rate-limits per user, serves from the pHash cache when possible,
 * calls OpenAI with a strict JSON schema, then enriches numbers from USDA.
 */
export const analyzeMeal = onCall(
  { secrets: [OPENAI_API_KEY], enforceAppCheck: true, timeoutSeconds: 60, memory: "512MiB" },
  async (request) => {
    const uid = request.auth?.uid;
    if (!uid) throw new HttpsError("unauthenticated", "Sign in required.");

    const data = request.data as AnalyzeRequest;
    if (!data?.imageBase64 || !data?.perceptualHash) {
      throw new HttpsError("invalid-argument", "Missing image or hash.");
    }

    // 1. Rate-limit (limits sourced from Remote Config; throws resource-exhausted when over).
    await enforceRateLimit(uid, "photoAnalyses");

    // 2. Cache lookup by perceptual hash — a hit costs $0.
    const cached = await getCachedAnalysis(data.perceptualHash);
    if (cached) {
      logger.info("analyzeMeal cache hit", { uid, cacheHit: true });
      return { ...cached, servedFromCache: true };
    }

    // 3. OpenAI vision with structured output.
    let result;
    try {
      result = await analyzeImage({
        apiKey: OPENAI_API_KEY.value(),
        imageBase64: data.imageBase64,
        system: MEAL_ANALYSIS_SYSTEM_PROMPT,
        schema: MEAL_ANALYSIS_SCHEMA,
        context: {
          goal: data.goal,
          remainingCalories: data.remainingCalories,
          allergies: data.allergies,
          unitSystem: data.unitSystem,
        },
      });
    } catch (err) {
      logger.error("OpenAI analyze failed", { uid, err: String(err) });
      throw new HttpsError("unavailable", "AI temporarily unavailable.");
    }

    // 4. Replace model-estimated numbers with authoritative USDA data where available.
    const enriched = await enrichWithUsda(result);

    // 5. Persist to shared cache + emit cost telemetry.
    await putCachedAnalysis(data.perceptualHash, enriched);
    logger.info("analyzeMeal", {
      uid,
      cacheHit: false,
      inputTokens: result.usage.inputTokens,
      outputTokens: result.usage.outputTokens,
      imageTiles: result.usage.imageTiles,
      estCostUSD: estimateCostUSD(result.usage),
      model: result.model,
    });

    return { ...enriched, servedFromCache: false };
  }
);
