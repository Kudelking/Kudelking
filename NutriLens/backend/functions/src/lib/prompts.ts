// Versioned prompts for the AI pipeline. Changing these is a reviewable, testable event.
// The OpenAI API key is read from Secret Manager at runtime and never appears in the client.

export const MEAL_ANALYSIS_SYSTEM_PROMPT = `
You are a precise nutrition vision analyst. Identify every distinct food item in the photo.
For each item, estimate the portion in grams using visible reference objects (a dinner plate is
~26cm, a fork ~20cm, a standard spoon ~15cm). Prefer canonical, searchable food names in
"canonicalQuery" (e.g. "grilled chicken breast", not "some chicken").

Rules:
- Do NOT invent brand names. Leave brand null unless clearly legible on packaging.
- Provide nutrition PER 100g. Downstream code scales to the estimated portion.
- If unsure, lower the confidence score rather than guessing.
- Respond ONLY with JSON conforming to the provided schema. No prose.
`.trim();

// JSON schema passed as response_format = { type: "json_schema", json_schema: MEAL_ANALYSIS_SCHEMA }.
export const MEAL_ANALYSIS_SCHEMA = {
  name: "meal_analysis",
  strict: true,
  schema: {
    type: "object",
    additionalProperties: false,
    required: ["items", "overallConfidence", "warnings"],
    properties: {
      items: {
        type: "array",
        items: {
          type: "object",
          additionalProperties: false,
          required: ["name", "canonicalQuery", "estimatedPortionGrams",
                     "portionConfidence", "nutritionPer100g", "confidence"],
          properties: {
            name: { type: "string" },
            canonicalQuery: { type: "string" },
            brand: { type: ["string", "null"] },
            estimatedPortionGrams: { type: "number" },
            portionConfidence: { type: "number" },
            referenceObjects: { type: "array", items: { type: "string" } },
            nutritionPer100g: {
              type: "object",
              additionalProperties: false,
              required: ["kcal", "protein", "carbs", "fat", "fiber", "sugar", "sodium"],
              properties: {
                kcal: { type: "number" },
                protein: { type: "number" },
                carbs: { type: "number" },
                fat: { type: "number" },
                fiber: { type: "number" },
                sugar: { type: "number" },
                sodium: { type: "number" },
                vitamins: {
                  type: "array",
                  items: {
                    type: "object", additionalProperties: false,
                    required: ["name", "amount", "unit"],
                    properties: { name: { type: "string" }, amount: { type: "number" }, unit: { type: "string" } },
                  },
                },
                minerals: {
                  type: "array",
                  items: {
                    type: "object", additionalProperties: false,
                    required: ["name", "amount", "unit"],
                    properties: { name: { type: "string" }, amount: { type: "number" }, unit: { type: "string" } },
                  },
                },
              },
            },
            confidence: { type: "number" },
          },
        },
      },
      overallConfidence: { type: "number" },
      warnings: { type: "array", items: { type: "string" } },
    },
  },
} as const;

export const COACH_SYSTEM_PROMPT = `
You are NutriLens Coach — a supportive, evidence-based nutrition assistant. You are given a
COMPACT SUMMARY of the user's own recent data (calories, macros, weight trend, goal). Answer
using that data. When a precise number is needed, call the provided tools instead of guessing.
Be concise, practical, and encouraging. Never give medical diagnoses; suggest consulting a
professional for medical concerns.
`.trim();
