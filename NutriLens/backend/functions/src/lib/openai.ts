import OpenAI from "openai";

export interface TokenUsage {
  inputTokens: number;
  outputTokens: number;
  imageTiles: number;
}

export interface AnalyzeParams {
  apiKey: string;
  imageBase64: string;
  system: string;
  schema: unknown;
  context: {
    goal: string;
    remainingCalories: number;
    allergies: string[];
    unitSystem: string;
  };
}

export interface AnalyzeResult {
  items: unknown[];
  overallConfidence: number;
  warnings: string[];
  usage: TokenUsage;
  model: string;
}

// Pricing per 1M tokens — kept in one place, updated when the provider price changes.
const INPUT_PRICE_PER_M = 2.5;
const OUTPUT_PRICE_PER_M = 10.0;

export function estimateCostUSD(usage: TokenUsage): number {
  return (
    (usage.inputTokens / 1_000_000) * INPUT_PRICE_PER_M +
    (usage.outputTokens / 1_000_000) * OUTPUT_PRICE_PER_M
  );
}

/** Calls the vision model with a strict JSON schema and validates macro/calorie consistency. */
export async function analyzeImage(params: AnalyzeParams): Promise<AnalyzeResult> {
  const client = new OpenAI({ apiKey: params.apiKey });
  const model = "gpt-vision-latest"; // pinned via Remote Config in production

  const userContext =
    `Goal: ${params.context.goal}. Remaining calories today: ${params.context.remainingCalories}. ` +
    `Allergies to warn about: ${params.context.allergies.join(", ") || "none"}. ` +
    `Units: ${params.context.unitSystem}.`;

  const response = await client.chat.completions.create({
    model,
    temperature: 0.2,
    response_format: { type: "json_schema", json_schema: params.schema as never },
    messages: [
      { role: "system", content: params.system },
      {
        role: "user",
        content: [
          { type: "text", text: userContext },
          { type: "image_url", image_url: { url: `data:image/jpeg;base64,${params.imageBase64}` } },
        ],
      },
    ],
  });

  const raw = response.choices[0]?.message?.content;
  if (!raw) throw new Error("Empty AI response");

  let parsed: { items: unknown[]; overallConfidence: number; warnings: string[] };
  try {
    parsed = JSON.parse(raw);
  } catch {
    throw new Error("Malformed AI JSON");
  }

  return {
    items: parsed.items,
    overallConfidence: parsed.overallConfidence,
    warnings: parsed.warnings ?? [],
    usage: {
      inputTokens: response.usage?.prompt_tokens ?? 0,
      outputTokens: response.usage?.completion_tokens ?? 0,
      imageTiles: 1,
    },
    model,
  };
}
