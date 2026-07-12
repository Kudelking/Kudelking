import Foundation

/// Framework-free user profile. Produced by onboarding and persisted (SwiftData mirror in
/// CorePersistence). Derived targets (calories, macros) are computed once here via `NutritionMath`
/// so the whole app shares one definition of "how goals are calculated".
public struct UserProfileEntity: Codable, Sendable, Equatable, Identifiable {
    public let id: String                 // = auth uid
    public var displayName: String?
    public var email: String?

    public var age: Int
    public var biologicalSex: BiologicalSex
    public var heightCm: Double
    public var weightKg: Double
    public var goalWeightKg: Double
    public var activityLevel: ActivityLevel
    public var goal: Goal

    public var dietaryPreferences: [DietaryTag]
    public var allergies: [Allergen]
    public var medicalRestrictions: [String]

    public var waterGoalMl: Int
    public var targetCalories: Int
    public var macroTargets: MacroTargets
    public var unitSystem: UnitSystem

    public var createdAt: Date
    public var updatedAt: Date

    public init(id: String, displayName: String?, email: String?, age: Int,
                biologicalSex: BiologicalSex, heightCm: Double, weightKg: Double,
                goalWeightKg: Double, activityLevel: ActivityLevel, goal: Goal,
                dietaryPreferences: [DietaryTag], allergies: [Allergen],
                medicalRestrictions: [String], waterGoalMl: Int, targetCalories: Int,
                macroTargets: MacroTargets, unitSystem: UnitSystem,
                createdAt: Date, updatedAt: Date) {
        self.id = id
        self.displayName = displayName
        self.email = email
        self.age = age
        self.biologicalSex = biologicalSex
        self.heightCm = heightCm
        self.weightKg = weightKg
        self.goalWeightKg = goalWeightKg
        self.activityLevel = activityLevel
        self.goal = goal
        self.dietaryPreferences = dietaryPreferences
        self.allergies = allergies
        self.medicalRestrictions = medicalRestrictions
        self.waterGoalMl = waterGoalMl
        self.targetCalories = targetCalories
        self.macroTargets = macroTargets
        self.unitSystem = unitSystem
        self.createdAt = createdAt
        self.updatedAt = updatedAt
    }

    /// Build a profile from raw onboarding inputs, deriving calorie and macro targets.
    /// `waterGoalMl == nil` uses the recommended default for the user's weight.
    public static func make(
        id: String,
        displayName: String?,
        email: String?,
        age: Int,
        biologicalSex: BiologicalSex,
        heightCm: Double,
        weightKg: Double,
        goalWeightKg: Double,
        activityLevel: ActivityLevel,
        goal: Goal,
        dietaryPreferences: [DietaryTag] = [],
        allergies: [Allergen] = [],
        medicalRestrictions: [String] = [],
        waterGoalMl: Int? = nil,
        unitSystem: UnitSystem = .metric,
        now: Date = .now
    ) -> UserProfileEntity {
        let bmr = NutritionMath.basalMetabolicRate(weightKg: weightKg, heightCm: heightCm,
                                                   age: age, sex: biologicalSex)
        let tdee = NutritionMath.totalDailyEnergyExpenditure(bmr: bmr, activity: activityLevel)
        let calories = NutritionMath.targetCalories(tdee: tdee, goal: goal, sex: biologicalSex)
        let macros = NutritionMath.macroTargets(targetCalories: calories,
                                                weightKg: weightKg, goal: goal)
        return UserProfileEntity(
            id: id, displayName: displayName, email: email, age: age,
            biologicalSex: biologicalSex, heightCm: heightCm, weightKg: weightKg,
            goalWeightKg: goalWeightKg, activityLevel: activityLevel, goal: goal,
            dietaryPreferences: dietaryPreferences, allergies: allergies,
            medicalRestrictions: medicalRestrictions,
            waterGoalMl: waterGoalMl ?? NutritionMath.recommendedWaterMl(weightKg: weightKg),
            targetCalories: calories, macroTargets: macros, unitSystem: unitSystem,
            createdAt: now, updatedAt: now
        )
    }
}
