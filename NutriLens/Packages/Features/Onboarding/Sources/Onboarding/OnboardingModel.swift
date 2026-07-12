import Foundation
import Observation
import CoreModels

/// Drives the wizard navigation over an `OnboardingDraft`. Holds no business rules itself —
/// validation and profile-building live in the draft — so this stays a thin, UI-facing layer.
@MainActor
@Observable
public final class OnboardingModel {
    public var draft = OnboardingDraft()
    public private(set) var stepIndex = 0

    private let steps = OnboardingStep.allCases
    private let userID: String
    private let email: String?
    private let onComplete: (UserProfileEntity) -> Void

    public init(userID: String,
                email: String?,
                onComplete: @escaping (UserProfileEntity) -> Void) {
        self.userID = userID
        self.email = email
        self.onComplete = onComplete
    }

    public var currentStep: OnboardingStep { steps[stepIndex] }
    public var isFirstStep: Bool { stepIndex == 0 }
    public var isLastStep: Bool { stepIndex == steps.count - 1 }

    /// 0…1 completion for the progress bar.
    public var progress: Double { Double(stepIndex + 1) / Double(steps.count) }

    public var canProceed: Bool { draft.isValid(currentStep) }

    /// Live preview of the derived plan, shown on the review step.
    public var previewProfile: UserProfileEntity? {
        draft.makeProfile(id: userID, email: email)
    }

    /// Advance to the next step, or finish on the last step. No-op if the step is invalid.
    public func advance() {
        guard canProceed else { return }
        if isLastStep {
            if let profile = draft.makeProfile(id: userID, email: email) {
                onComplete(profile)
            }
        } else {
            // Prefill the water suggestion when arriving at the water step.
            stepIndex += 1
            if currentStep == .water, draft.waterGoalMl == nil {
                draft.waterGoalMl = draft.recommendedWaterMl
            }
        }
    }

    public func goBack() {
        guard !isFirstStep else { return }
        stepIndex -= 1
    }
}
