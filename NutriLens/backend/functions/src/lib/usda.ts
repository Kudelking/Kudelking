import { defineSecret } from "firebase-functions/params";

const USDA_API_KEY = defineSecret("USDA_API_KEY");

interface AnalyzeResultLike {
  items: Array<Record<string, unknown> & { canonicalQuery?: string }>;
  overallConfidence: number;
  warnings: string[];
}

/**
 * Replace AI-estimated nutrition numbers with authoritative USDA FoodData Central values
 * when a confident match exists. The model is trusted for *recognition*, USDA for *numbers*.
 * Falls back to the model estimate (marked as such) when USDA has no match.
 */
export async function enrichWithUsda(result: AnalyzeResultLike): Promise<AnalyzeResultLike> {
  const enrichedItems = await Promise.all(
    result.items.map(async (item) => {
      const query = item.canonicalQuery;
      if (!query) return { ...item, nutritionSource: "ai_estimate" };
      try {
        const match = await searchUsda(query);
        if (match) return { ...item, nutritionPer100g: match, nutritionSource: "usda" };
      } catch {
        // network/quota failure → keep the model estimate
      }
      return { ...item, nutritionSource: "ai_estimate" };
    })
  );
  return { ...result, items: enrichedItems };
}

async function searchUsda(query: string): Promise<Record<string, number> | null> {
  const url =
    `https://api.nal.usda.gov/fdc/v1/foods/search?query=${encodeURIComponent(query)}` +
    `&pageSize=1&api_key=${USDA_API_KEY.value()}`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const json = (await res.json()) as { foods?: Array<{ foodNutrients?: unknown[] }> };
  const food = json.foods?.[0];
  if (!food) return null;
  return mapNutrients(food.foodNutrients ?? []);
}

// Maps USDA nutrient ids to our normalized per-100g shape.
function mapNutrients(nutrients: unknown[]): Record<string, number> {
  const byId: Record<number, number> = {};
  for (const n of nutrients as Array<{ nutrientId?: number; value?: number }>) {
    if (n.nutrientId != null && n.value != null) byId[n.nutrientId] = n.value;
  }
  return {
    kcal: byId[1008] ?? 0,
    protein: byId[1003] ?? 0,
    carbs: byId[1005] ?? 0,
    fat: byId[1004] ?? 0,
    fiber: byId[1079] ?? 0,
    sugar: byId[2000] ?? 0,
    sodium: byId[1093] ?? 0,
  };
}
