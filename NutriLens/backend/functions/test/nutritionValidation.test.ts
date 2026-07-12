import { describe, it, expect } from "vitest";
import {
  atwaterCalories,
  caloriesConsistent,
  sanitizePortion,
} from "../src/lib/nutritionValidation";

describe("nutritionValidation", () => {
  it("computes Atwater calories", () => {
    expect(atwaterCalories({ protein: 30, carbs: 0, fat: 3.6 })).toBeCloseTo(152.4, 1);
  });

  it("accepts calories within tolerance and rejects wild mismatches", () => {
    const macros = { protein: 30, carbs: 0, fat: 3.6 };
    expect(caloriesConsistent(165, macros)).toBe(true);
    expect(caloriesConsistent(500, macros)).toBe(false);
  });

  it("treats zero calories with zero macros as consistent", () => {
    expect(caloriesConsistent(0, { protein: 0, carbs: 0, fat: 0 })).toBe(true);
  });

  it("clamps portions to a sane range", () => {
    expect(sanitizePortion(-5)).toBe(1);
    expect(sanitizePortion(5000)).toBe(2000);
    expect(sanitizePortion(150)).toBe(150);
    expect(sanitizePortion(Number.NaN)).toBe(1);
  });
});
