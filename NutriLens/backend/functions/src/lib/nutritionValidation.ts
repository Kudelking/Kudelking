// Pure nutrition validation shared by the analyze pipeline. No Firebase/OpenAI imports so it is
// trivially unit-testable and safe to run in CI without any SDK.

export interface Macros {
  protein: number;
  carbs: number;
  fat: number;
}

/** Atwater energy from macros (kcal). */
export function atwaterCalories(m: Macros): number {
  return m.protein * 4 + m.carbs * 4 + m.fat * 9;
}

/**
 * Whether stated calories agree with macro-derived energy within `tolerance` (fraction).
 * Used to sanity-check AI output before trusting its numbers.
 */
export function caloriesConsistent(calories: number, m: Macros, tolerance = 0.2): boolean {
  if (calories <= 0) return atwaterCalories(m) === 0;
  return Math.abs(calories - atwaterCalories(m)) <= tolerance * calories;
}

/** Clamp an estimated portion to a sane range (grams). */
export function sanitizePortion(grams: number, min = 1, max = 2000): number {
  if (!Number.isFinite(grams)) return min;
  return Math.min(max, Math.max(min, grams));
}
