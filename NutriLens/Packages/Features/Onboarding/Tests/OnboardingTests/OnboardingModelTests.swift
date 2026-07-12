import Testing
import Foundation
@testable import Onboarding
import CoreModels

@MainActor
@Suite("OnboardingModel navigation")
struct OnboardingModelTests {

    private func makeModel(onComplete: @escaping (UserProfileEntity) -> Void = { _ in })
        -> OnboardingModel {
        OnboardingModel(userID: "u1", email: "a@x.io", onComplete: onComplete)
    }

    private func fill(_ model: OnboardingModel) {
        model.draft.age = 30; model.draft.sex = .male
        model.draft.heightCm = 180; model.draft.weightKg = 80
        model.draft.goalWeightKg = 75
        model.draft.activityLevel = .moderate
        model.draft.goal = .loseWeight
    }

    @Test("Cannot advance past an invalid step")
    func gatedAdvance() {
        let model = makeModel()
        #expect(model.currentStep == .basics)
        #expect(!model.canProceed)
        model.advance()
        #expect(model.stepIndex == 0)          // blocked
        model.draft.age = 30; model.draft.sex = .male
        #expect(model.canProceed)
        model.advance()
        #expect(model.currentStep == .body)
    }

    @Test("Back navigation is bounded at the first step")
    func backBounded() {
        let model = makeModel()
        model.goBack()
        #expect(model.stepIndex == 0)
    }

    @Test("Water step is prefilled with the recommendation on arrival")
    func waterPrefill() {
        let model = makeModel()
        fill(model)
        // Walk to the water step.
        while model.currentStep != .water { model.advance() }
        #expect(model.draft.waterGoalMl == 2800)   // 80kg × 35
    }

    @Test("Finishing on the last step emits the derived profile")
    func finishEmitsProfile() {
        var delivered: UserProfileEntity?
        let model = makeModel { delivered = $0 }
        fill(model)
        while !model.isLastStep { model.advance() }
        #expect(model.currentStep == .review)
        model.advance()                            // finish
        #expect(delivered?.id == "u1")
        #expect(delivered?.targetCalories == 2259)
    }

    @Test("Progress increases monotonically to 1.0")
    func progress() {
        let model = makeModel()
        fill(model)
        var last = 0.0
        while !model.isLastStep {
            #expect(model.progress > last)
            last = model.progress
            model.advance()
        }
        #expect(abs(model.progress - 1.0) < 0.0001)
    }
}
