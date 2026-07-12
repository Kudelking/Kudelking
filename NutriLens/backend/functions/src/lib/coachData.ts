import { getFirestore } from "firebase-admin/firestore";
import { CoachContext, DayNutrition } from "./coach";

/**
 * Assemble the coach context from the user's daily aggregates + profile. Reads the pre-rolled
 * `dailyAggregates` documents (point reads by date) rather than scanning raw meals.
 */
export async function loadCoachContext(uid: string, days: number): Promise<CoachContext> {
  const db = getFirestore();
  const profileSnap = await db.doc(`users/${uid}`).get();
  const profile = profileSnap.data() ?? {};

  const dates = recentDateKeys(days);
  const aggRefs = dates.map((d) => db.doc(`users/${uid}/dailyAggregates/${d}`));
  const aggSnaps = await db.getAll(...aggRefs);

  const recent: DayNutrition[] = aggSnaps
    .filter((s) => s.exists)
    .map((s) => {
      const d = s.data()!;
      return {
        date: s.id,
        calories: d.consumedKcal ?? 0,
        protein: d.protein ?? 0,
        carbs: d.carbs ?? 0,
        fat: d.fat ?? 0,
      };
    });

  return {
    goal: profile.goal ?? "maintain",
    targetCalories: profile.targetCalories ?? 2000,
    recent,
    weightTrendKg: profile.weightTrendKg ?? null,
  };
}

/** yyyy-MM-dd keys for the last `days` days, most recent first. */
export function recentDateKeys(days: number): string[] {
  const keys: string[] = [];
  const now = new Date();
  for (let i = 0; i < days; i += 1) {
    const d = new Date(now);
    d.setUTCDate(now.getUTCDate() - i);
    keys.push(d.toISOString().slice(0, 10));
  }
  return keys;
}
