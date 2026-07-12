import Foundation

// MARK: - Profile enums

public enum BiologicalSex: String, Codable, Sendable, CaseIterable {
    case male, female, other
}

/// Physical Activity Level multipliers applied to BMR (Mifflin–St Jeor).
public enum ActivityLevel: String, Codable, Sendable, CaseIterable {
    case sedentary          // little/no exercise
    case light              // 1–3 days/week
    case moderate           // 3–5 days/week
    case active             // 6–7 days/week
    case veryActive         // hard exercise / physical job

    public var multiplier: Double {
        switch self {
        case .sedentary: 1.2
        case .light: 1.375
        case .moderate: 1.55
        case .active: 1.725
        case .veryActive: 1.9
        }
    }
}

public enum Goal: String, Codable, Sendable, CaseIterable {
    case loseWeight
    case gainMuscle
    case maintain

    /// Daily kcal delta applied to TDEE. Kept conservative & safe.
    public var calorieDelta: Int {
        switch self {
        case .loseWeight: -500   // ~0.45 kg/week deficit
        case .gainMuscle: +300   // lean surplus
        case .maintain: 0
        }
    }

    /// Protein target as grams per kg of bodyweight for this goal.
    public var proteinPerKg: Double {
        switch self {
        case .loseWeight: 2.0   // preserve lean mass in a deficit
        case .gainMuscle: 1.8
        case .maintain: 1.6
        }
    }
}

public enum UnitSystem: String, Codable, Sendable, CaseIterable {
    case metric, imperial
}

public enum MealType: String, Codable, Sendable, CaseIterable {
    case breakfast, lunch, dinner, snack
}

public enum MealSource: String, Codable, Sendable {
    case photoAI, barcode, manual, template
}

public enum ServingUnit: String, Codable, Sendable, CaseIterable {
    case gram, milliliter, piece, cup, tablespoon, ounce
}

public enum DietaryTag: String, Codable, Sendable, CaseIterable {
    case vegetarian, vegan, pescatarian, keto, paleo, halal, kosher, glutenFree, dairyFree
}

public enum Allergen: String, Codable, Sendable, CaseIterable {
    case milk, eggs, peanuts, treeNuts, soy, wheat, fish, shellfish, sesame
}

public enum MeasurementKind: String, Codable, Sendable, CaseIterable {
    case waist, chest, hips, thigh, arm, neck
}

public enum ChatRole: String, Codable, Sendable {
    case user, assistant, system
}

// MARK: - Sync

public enum SyncState: String, Codable, Sendable {
    case pendingCreate, pendingUpdate, synced
}

public enum SyncOp: String, Codable, Sendable {
    case create, update, delete
}
