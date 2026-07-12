import Testing
import Foundation
@testable import CoreModels

@Suite("UserProfileEntity.make")
struct ProfileEntityTests {

    @Test("Derives calorie and macro targets consistent with NutritionMath")
    func derivesTargets() {
        let profile = UserProfileEntity.make(
            id: "u1", displayName: "Alex", email: "a@x.io",
            age: 30, biologicalSex: .male, heightCm: 180, weightKg: 80,
            goalWeightKg: 75, activityLevel: .moderate, goal: .loseWeight
        )
        // BMR 1780 → TDEE ×1.55 = 2759 → −500 = 2259
        #expect(profile.targetCalories == 2259)
        #expect(profile.macroTargets.protein == 160)   // 2.0 g/kg × 80
        #expect(profile.macroTargets.protein == NutritionMath.macroTargets(
            targetCalories: profile.targetCalories, weightKg: 80, goal: .loseWeight).protein)
    }

    @Test("Defaults water goal to ~35 ml/kg rounded to 50 ml")
    func defaultWater() {
        let profile = UserProfileEntity.make(
            id: "u1", displayName: nil, email: nil,
            age: 25, biologicalSex: .female, heightCm: 165, weightKg: 60,
            goalWeightKg: 58, activityLevel: .light, goal: .maintain
        )
        // 60 × 35 = 2100 → rounds to 2100
        #expect(profile.waterGoalMl == 2100)
    }

    @Test("Respects an explicit water goal override")
    func explicitWater() {
        let profile = UserProfileEntity.make(
            id: "u1", displayName: nil, email: nil,
            age: 25, biologicalSex: .female, heightCm: 165, weightKg: 60,
            goalWeightKg: 58, activityLevel: .light, goal: .maintain,
            waterGoalMl: 3000
        )
        #expect(profile.waterGoalMl == 3000)
    }

    @Test("Round-trips through Codable")
    func codable() throws {
        let profile = UserProfileEntity.make(
            id: "u1", displayName: "Sam", email: "s@x.io",
            age: 40, biologicalSex: .other, heightCm: 175, weightKg: 90,
            goalWeightKg: 82, activityLevel: .active, goal: .gainMuscle,
            dietaryPreferences: [.vegetarian], allergies: [.peanuts]
        )
        let data = try JSONEncoder().encode(profile)
        let decoded = try JSONDecoder().decode(UserProfileEntity.self, from: data)
        #expect(decoded == profile)
    }
}
