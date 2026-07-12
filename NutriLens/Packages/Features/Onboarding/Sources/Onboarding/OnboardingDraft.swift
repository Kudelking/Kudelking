import Foundation
import CoreModels

/// Mutable working state of the onboarding wizard plus the pure validation and profile-building
/// logic. Kept free of SwiftUI so every rule is unit-tested without a view.
public struct OnboardingDraft: Sendable, Equatable {
    public var displayName = ""
    public var age: Int?
    public var sex: BiologicalSex?
    public var heightCm: Double?
    public var weightKg: Double?
    public var goalWeightKg: Double?
    public var activityLevel: ActivityLevel?
    public var goal: Goal?
    public var dietaryPreferences: Set<DietaryTag> = []
    public var allergies: Set<Allergen> = []
    public var medicalRestrictions: [String] = []
    public var waterGoalMl: Int?
    public var unitSystem: UnitSystem = .metric

    public init() {}

    // Sane physiological bounds — reject clearly invalid input before it reaches calculations.
    public static let ageRange = 13...120
    public static let heightRange: ClosedRange<Double> = 50...260   // cm
    public static let weightRange: ClosedRange<Double> = 20...400   // kg

    /// Whether the given step has enough valid input to advance.
    public func isValid(_ step: OnboardingStep) -> Bool {
        switch step {
        case .basics:
            guard let age, let _ = sex else { return false }
            return Self.ageRange.contains(age)
        case .body:
            return isValidHeight && isValidWeight
        case .goalWeight:
            guard let goalWeightKg else { return false }
            return Self.weightRange.contains(goalWeightKg)
        case .activity:
            return activityLevel != nil
        case .goal:
            return goal != nil
        case .preferences, .allergies, .medical:
            return true                              // optional, no input required
        case .water:
            return waterGoalMl.map { $0 > 0 } ?? true
        case .review:
            return isComplete
        }
    }

    public var isValidHeight: Bool { heightCm.map(Self.heightRange.contains) ?? false }
    public var isValidWeight: Bool { weightKg.map(Self.weightRange.contains) ?? false }

    /// All required steps satisfied.
    public var isComplete: Bool {
        [OnboardingStep.basics, .body, .goalWeight, .activity, .goal].allSatisfy(isValid)
    }

    /// Water goal suggested from current weight, for prefilling the water step.
    public var recommendedWaterMl: Int? {
        weightKg.map(NutritionMath.recommendedWaterMl)
    }

    /// Build the final profile, or nil if required data is missing.
    public func makeProfile(id: String, email: String?, now: Date = .now) -> UserProfileEntity? {
        guard isComplete,
              let age, let sex, let heightCm, let weightKg,
              let goalWeightKg, let activityLevel, let goal
        else { return nil }

        return UserProfileEntity.make(
            id: id,
            displayName: displayName.trimmingCharacters(in: .whitespaces).isEmpty ? nil
                : displayName.trimmingCharacters(in: .whitespaces),
            email: email,
            age: age, biologicalSex: sex, heightCm: heightCm, weightKg: weightKg,
            goalWeightKg: goalWeightKg, activityLevel: activityLevel, goal: goal,
            dietaryPreferences: Array(dietaryPreferences),
            allergies: Array(allergies),
            medicalRestrictions: medicalRestrictions,
            waterGoalMl: waterGoalMl,
            unitSystem: unitSystem,
            now: now
        )
    }
}
