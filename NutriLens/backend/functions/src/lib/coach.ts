// Pure helpers for the coach context. Kept free of Firebase imports so they unit-test cleanly.

export interface DayNutrition {
  date: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface CoachContext {
  goal: string;
  targetCalories: number;
  recent: DayNutrition[];
  weightTrendKg: number | null;
}

/**
 * Compress the user's recent data into a compact summary string for the LLM prompt. Sending a
 * summary (not raw logs) keeps token cost — and therefore $/message — under control (§11).
 */
export function buildCoachSummary(ctx: CoachContext): string {
  const days = ctx.recent.length;
  const avg = days
    ? Math.round(ctx.recent.reduce((s, d) => s + d.calories, 0) / days)
    : 0;
  const avgProtein = days
    ? Math.round(ctx.recent.reduce((s, d) => s + d.protein, 0) / days)
    : 0;
  const trend =
    ctx.weightTrendKg == null
      ? 'no weight data'
      : `${ctx.weightTrendKg > 0 ? '+' : ''}${ctx.weightTrendKg.toFixed(1)} kg over the period`;

  return [
    `Goal: ${ctx.goal}.`,
    `Daily calorie target: ${ctx.targetCalories} kcal.`,
    `Last ${days} days: avg ${avg} kcal/day, avg ${avgProtein} g protein/day.`,
    `Weight trend: ${trend}.`,
  ].join(' ');
}

/** Today's remaining calories, floored at zero. */
export function remainingCalories(target: number, consumed: number): number {
  return Math.max(0, Math.round(target - consumed));
}
