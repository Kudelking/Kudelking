import Testing
import Foundation
@testable import Onboarding
import CoreModels

@Suite("OnboardingDraft validation")
struct OnboardingDraftTests {

    private func completeDraft() -> OnboardingDraft {
        var d = OnboardingDraft()
        d.age = 30; d.sex = .male
        d.heightCm = 180; d.weightKg = 80
        d.goalWeightKg = 75
        d.activityLevel = .moderate
        d.goal = .loseWeight
        return d
    }

    @Test("Basics requires an in-range age and a sex")
    func basics() {
        var d = OnboardingDraft()
        #expect(!d.isValid(.basics))
        d.age = 30
        #expect(!d.isValid(.basics))          // still no sex
        d.sex = .female
        #expect(d.isValid(.basics))
        d.age = 5
        #expect(!d.isValid(.basics))          // below range
    }

    @Test("Body requires height and weight within physiological bounds")
    func body() {
        var d = OnboardingDraft()
        d.heightCm = 180; d.weightKg = 80
        #expect(d.isValid(.body))
        d.weightKg = 5
        #expect(!d.isValid(.body))
        d.weightKg = 80; d.heightCm = 500
        #expect(!d.isValid(.body))
    }

    @Test("Optional steps are always valid")
    func optionalSteps() {
        let d = OnboardingDraft()
        #expect(d.isValid(.preferences))
        #expect(d.isValid(.allergies))
        #expect(d.isValid(.medical))
        #expect(d.isValid(.water))            // nil water is allowed (default applied)
    }

    @Test("Water step rejects a non-positive explicit value")
    func water() {
        var d = OnboardingDraft()
        d.waterGoalMl = 0
        #expect(!d.isValid(.water))
        d.waterGoalMl = 2500
        #expect(d.isValid(.water))
    }

    @Test("isComplete only when all required steps are satisfied")
    func complete() {
        var d = OnboardingDraft()
        #expect(!d.isComplete)
        d = completeDraft()
        #expect(d.isComplete)
        #expect(d.isValid(.review))
    }

    @Test("makeProfile returns nil until complete, then a derived profile")
    func makeProfile() {
        var d = OnboardingDraft()
        #expect(d.makeProfile(id: "u1", email: nil) == nil)

        d = completeDraft()
        let profile = d.makeProfile(id: "u1", email: "a@x.io")
        #expect(profile != nil)
        #expect(profile?.targetCalories == 2259)      // matches NutritionMath derivation
        #expect(profile?.goalWeightKg == 75)
    }

    @Test("recommendedWaterMl follows weight")
    func recommendedWater() {
        var d = OnboardingDraft()
        #expect(d.recommendedWaterMl == nil)
        d.weightKg = 80
        #expect(d.recommendedWaterMl == 2800)         // 80 × 35 = 2800
    }
}
