import SwiftUI
import CoreUI

/// The wizard shell: progress bar, per-step content, and Back/Continue navigation.
public struct OnboardingFlowView: View {
    @State private var model: OnboardingModel
    @Environment(\.accessibilityReduceMotion) private var reduceMotion

    public init(model: OnboardingModel) {
        _model = State(initialValue: model)
    }

    public var body: some View {
        VStack(spacing: Theme.Spacing.lg) {
            ProgressView(value: model.progress)
                .tint(Theme.Colors.accent)
                .padding(.horizontal, Theme.Spacing.lg)
                .padding(.top, Theme.Spacing.md)
                .accessibilityLabel("Step \(model.stepIndex + 1) of 10")

            VStack(alignment: .leading, spacing: Theme.Spacing.xs) {
                Text(model.currentStep.title).font(Theme.Typography.title)
                Text(model.currentStep.subtitle)
                    .font(Theme.Typography.body)
                    .foregroundStyle(Theme.Colors.secondaryText)
            }
            .frame(maxWidth: .infinity, alignment: .leading)
            .padding(.horizontal, Theme.Spacing.lg)

            ScrollView {
                OnboardingStepContent(model: model)
                    .padding(.horizontal, Theme.Spacing.lg)
            }

            navigation
        }
        .animation(Theme.motion(reduceMotion: reduceMotion), value: model.stepIndex)
    }

    private var navigation: some View {
        HStack(spacing: Theme.Spacing.md) {
            if !model.isFirstStep {
                Button("Back") { model.goBack() }
                    .buttonStyle(.bordered)
            }
            Button(model.isLastStep ? "Start" : "Continue") { model.advance() }
                .buttonStyle(.borderedProminent)
                .disabled(!model.canProceed)
                .frame(maxWidth: .infinity)
        }
        .padding(Theme.Spacing.lg)
    }
}

private extension Theme {
    static func motion(reduceMotion: Bool) -> Animation? {
        reduceMotion ? nil : .snappy
    }
}
