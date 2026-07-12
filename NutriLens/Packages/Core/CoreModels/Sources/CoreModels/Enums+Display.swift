import Foundation

// Human-readable labels for enums shown in the UI. Kept in the domain layer so every feature
// renders the same wording. (Localization catalog wiring happens in M15.)

public extension BiologicalSex {
    var label: String {
        switch self {
        case .male: "Male"
        case .female: "Female"
        case .other: "Other"
        }
    }
}

public extension ActivityLevel {
    var label: String {
        switch self {
        case .sedentary: "Sedentary — little or no exercise"
        case .light: "Light — 1–3 days/week"
        case .moderate: "Moderate — 3–5 days/week"
        case .active: "Active — 6–7 days/week"
        case .veryActive: "Very active — hard exercise or physical job"
        }
    }
}

public extension Goal {
    var label: String {
        switch self {
        case .loseWeight: "Lose weight"
        case .gainMuscle: "Gain muscle"
        case .maintain: "Maintain weight"
        }
    }
}

public extension MealType {
    var label: String {
        switch self {
        case .breakfast: "Breakfast"
        case .lunch: "Lunch"
        case .dinner: "Dinner"
        case .snack: "Snack"
        }
    }
}

public extension DietaryTag {
    var label: String {
        switch self {
        case .vegetarian: "Vegetarian"
        case .vegan: "Vegan"
        case .pescatarian: "Pescatarian"
        case .keto: "Keto"
        case .paleo: "Paleo"
        case .halal: "Halal"
        case .kosher: "Kosher"
        case .glutenFree: "Gluten-free"
        case .dairyFree: "Dairy-free"
        }
    }
}

public extension Allergen {
    var label: String {
        switch self {
        case .milk: "Milk"
        case .eggs: "Eggs"
        case .peanuts: "Peanuts"
        case .treeNuts: "Tree nuts"
        case .soy: "Soy"
        case .wheat: "Wheat"
        case .fish: "Fish"
        case .shellfish: "Shellfish"
        case .sesame: "Sesame"
        }
    }
}
