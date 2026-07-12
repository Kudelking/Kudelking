import { describe, it, expect } from "vitest";
import { buildCoachSummary, remainingCalories } from "../src/lib/coach";
import { recentDateKeys } from "../src/lib/coachData";

describe("coach helpers", () => {
  it("summarizes recent nutrition compactly", () => {
    const summary = buildCoachSummary({
      goal: "loseWeight",
      targetCalories: 2000,
      weightTrendKg: -1.2,
      recent: [
        { date: "2026-01-01", calories: 1800, protein: 120, carbs: 150, fat: 60 },
        { date: "2026-01-02", calories: 2200, protein: 140, carbs: 180, fat: 70 },
      ],
    });
    expect(summary).toContain("Goal: loseWeight");
    expect(summary).toContain("avg 2000 kcal/day");
    expect(summary).toContain("avg 130 g protein/day");
    expect(summary).toContain("-1.2 kg");
  });

  it("handles no data gracefully", () => {
    const summary = buildCoachSummary({
      goal: "maintain",
      targetCalories: 2500,
      weightTrendKg: null,
      recent: [],
    });
    expect(summary).toContain("Last 0 days");
    expect(summary).toContain("no weight data");
  });

  it("floors remaining calories at zero", () => {
    expect(remainingCalories(2000, 1500)).toBe(500);
    expect(remainingCalories(2000, 2600)).toBe(0);
  });

  it("produces the right number of descending date keys", () => {
    const keys = recentDateKeys(7);
    expect(keys).toHaveLength(7);
    expect(keys[0] > keys[6]).toBe(true); // most recent first
  });
});
