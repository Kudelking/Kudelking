import Foundation

/// The ordered steps of the onboarding wizard. `allCases` order defines the flow.
public enum OnboardingStep: Int, CaseIterable, Sendable {
    case basics        // name, age, sex
    case body          // height, weight
    case goalWeight
    case activity
    case goal
    case preferences   // dietary tags
    case allergies
    case medical
    case water
    case review        // derived targets summary

    public var title: String {
        switch self {
        case .basics: "About you"
        case .body: "Your measurements"
        case .goalWeight: "Goal weight"
        case .activity: "Activity level"
        case .goal: "Your goal"
        case .preferences: "Food preferences"
        case .allergies: "Allergies"
        case .medical: "Medical notes"
        case .water: "Daily water"
        case .review: "Your plan"
        }
    }

    public var subtitle: String {
        switch self {
        case .basics: "This helps us tailor your energy needs."
        case .body: "Used to estimate your metabolism."
        case .goalWeight: "Where would you like to be?"
        case .activity: "How active are you day to day?"
        case .goal: "What are you working toward?"
        case .preferences: "We'll respect these in recommendations."
        case .allergies: "We'll warn you about these in meals."
        case .medical: "Optional — anything we should keep in mind?"
        case .water: "We suggest a goal based on your weight."
        case .review: "Here's your personalized daily target."
        }
    }

    /// Steps the user may skip without entering data.
    public var isOptional: Bool {
        switch self {
        case .preferences, .allergies, .medical, .water: true
        default: false
        }
    }
}
