import SwiftUI
import CoreModels
import CoreUI

/// Renders the input controls for the current step. Numeric fields use String proxy bindings so
/// optional model values map cleanly to text inputs.
struct OnboardingStepContent: View {
    @Bindable var model: OnboardingModel

    var body: some View {
        switch model.currentStep {
        case .basics: basics
        case .body: body_
        case .goalWeight: goalWeight
        case .activity: activity
        case .goal: goal
        case .preferences: preferences
        case .allergies: allergies
        case .medical: medical
        case .water: water
        case .review: review
        }
    }

    // MARK: - Steps

    private var basics: some View {
        VStack(spacing: Theme.Spacing.md) {
            TextField("Name (optional)", text: $model.draft.displayName)
                .textContentType(.givenName)
                .textFieldStyle(.roundedBorder)
            numberField("Age", value: intProxy(\.age), unit: "years")
            Picker("Sex", selection: sexProxy) {
                ForEach(BiologicalSex.allCases, id: \.self) { Text($0.label).tag($0) }
            }
            .pickerStyle(.segmented)
        }
    }

    private var body_: some View {
        VStack(spacing: Theme.Spacing.md) {
            numberField("Height", value: doubleProxy(\.heightCm), unit: "cm")
            numberField("Weight", value: doubleProxy(\.weightKg), unit: "kg")
        }
    }

    private var goalWeight: some View {
        numberField("Goal weight", value: doubleProxy(\.goalWeightKg), unit: "kg")
    }

    private var activity: some View {
        optionList(ActivityLevel.allCases, selection: $model.draft.activityLevel) { $0.label }
    }

    private var goal: some View {
        optionList(Goal.allCases, selection: $model.draft.goal) { $0.label }
    }

    private var preferences: some View {
        chipGrid(DietaryTag.allCases, selected: model.draft.dietaryPreferences) { tag in
            toggle(tag, in: \.dietaryPreferences)
        } label: { $0.label }
    }

    private var allergies: some View {
        chipGrid(Allergen.allCases, selected: model.draft.allergies) { allergen in
            toggle(allergen, in: \.allergies)
        } label: { $0.label }
    }

    private var medical: some View {
        VStack(alignment: .leading, spacing: Theme.Spacing.sm) {
            Text("List any conditions or restrictions, one per line.")
                .font(Theme.Typography.caption)
                .foregroundStyle(Theme.Colors.secondaryText)
            TextField("e.g. Lactose intolerant", text: medicalProxy, axis: .vertical)
                .lineLimit(3...6)
                .textFieldStyle(.roundedBorder)
        }
    }

    private var water: some View {
        VStack(spacing: Theme.Spacing.md) {
            Text("\(model.draft.waterGoalMl ?? model.draft.recommendedWaterMl ?? 2000) ml")
                .font(Theme.Typography.metric)
            Stepper("Daily water goal",
                    value: waterProxy, in: 500...5000, step: 100)
        }
    }

    private var review: some View {
        Group {
            if let profile = model.previewProfile {
                VStack(spacing: Theme.Spacing.md) {
                    metric("Daily calories", "\(profile.targetCalories) kcal", Theme.Colors.calories)
                    HStack(spacing: Theme.Spacing.md) {
                        metric("Protein", "\(Int(profile.macroTargets.protein)) g", Theme.Colors.protein)
                        metric("Carbs", "\(Int(profile.macroTargets.carbs)) g", Theme.Colors.carbs)
                        metric("Fat", "\(Int(profile.macroTargets.fat)) g", Theme.Colors.fat)
                    }
                    metric("Water", "\(profile.waterGoalMl) ml", Theme.Colors.accent)
                }
            } else {
                EmptyStateView(systemImage: "questionmark",
                               title: "Almost there",
                               message: "Please complete the earlier steps.")
            }
        }
    }

    // MARK: - Reusable pieces

    private func metric(_ title: String, _ value: String, _ color: Color) -> some View {
        VStack(spacing: Theme.Spacing.xs) {
            Text(value).font(Theme.Typography.headline).foregroundStyle(color)
            Text(title).font(Theme.Typography.caption).foregroundStyle(Theme.Colors.secondaryText)
        }
        .frame(maxWidth: .infinity)
        .padding(Theme.Spacing.md)
        .background(Theme.Colors.card, in: RoundedRectangle(cornerRadius: Theme.Radius.md))
    }

    private func numberField(_ title: String, value: Binding<String>, unit: String) -> some View {
        HStack {
            TextField(title, text: value)
                .keyboardType(.decimalPad)
                .textFieldStyle(.roundedBorder)
            Text(unit).foregroundStyle(Theme.Colors.secondaryText)
        }
    }

    private func optionList<T: Hashable>(_ options: [T],
                                         selection: Binding<T?>,
                                         label: @escaping (T) -> String) -> some View {
        VStack(spacing: Theme.Spacing.sm) {
            ForEach(options, id: \.self) { option in
                Button {
                    selection.wrappedValue = option
                } label: {
                    HStack {
                        Text(label(option)).foregroundStyle(Theme.Colors.primaryText)
                        Spacer()
                        if selection.wrappedValue == option {
                            Image(systemName: "checkmark.circle.fill")
                                .foregroundStyle(Theme.Colors.accent)
                        }
                    }
                    .padding(Theme.Spacing.md)
                    .background(Theme.Colors.card, in: RoundedRectangle(cornerRadius: Theme.Radius.md))
                }
            }
        }
    }

    private func chipGrid<T: Hashable>(_ options: [T],
                                       selected: Set<T>,
                                       toggle: @escaping (T) -> Void,
                                       label: @escaping (T) -> String) -> some View {
        LazyVGrid(columns: [GridItem(.adaptive(minimum: 110), spacing: Theme.Spacing.sm)],
                  spacing: Theme.Spacing.sm) {
            ForEach(options, id: \.self) { option in
                let isOn = selected.contains(option)
                Button { toggle(option) } label: {
                    Text(label(option))
                        .font(Theme.Typography.caption)
                        .padding(.vertical, Theme.Spacing.sm)
                        .frame(maxWidth: .infinity)
                        .background(isOn ? Theme.Colors.accent.opacity(0.2) : Theme.Colors.card,
                                    in: Capsule())
                        .overlay(Capsule().stroke(isOn ? Theme.Colors.accent : .clear))
                }
                .foregroundStyle(Theme.Colors.primaryText)
            }
        }
    }

    // MARK: - Bindings

    private func intProxy(_ keyPath: WritableKeyPath<OnboardingDraft, Int?>) -> Binding<String> {
        Binding(
            get: { model.draft[keyPath: keyPath].map(String.init) ?? "" },
            set: { model.draft[keyPath: keyPath] = Int($0) }
        )
    }

    private func doubleProxy(_ keyPath: WritableKeyPath<OnboardingDraft, Double?>) -> Binding<String> {
        Binding(
            get: {
                guard let value = model.draft[keyPath: keyPath] else { return "" }
                return value.formatted(.number.precision(.fractionLength(0...1)))
            },
            set: { model.draft[keyPath: keyPath] = Double($0.replacingOccurrences(of: ",", with: ".")) }
        )
    }

    private var sexProxy: Binding<BiologicalSex> {
        Binding(get: { model.draft.sex ?? .male }, set: { model.draft.sex = $0 })
    }

    private var waterProxy: Binding<Int> {
        Binding(
            get: { model.draft.waterGoalMl ?? model.draft.recommendedWaterMl ?? 2000 },
            set: { model.draft.waterGoalMl = $0 }
        )
    }

    private var medicalProxy: Binding<String> {
        Binding(
            get: { model.draft.medicalRestrictions.joined(separator: "\n") },
            set: {
                model.draft.medicalRestrictions = $0
                    .split(separator: "\n")
                    .map { $0.trimmingCharacters(in: .whitespaces) }
                    .filter { !$0.isEmpty }
            }
        )
    }

    private func toggle<T: Hashable>(_ value: T, in keyPath: WritableKeyPath<OnboardingDraft, Set<T>>) {
        if model.draft[keyPath: keyPath].contains(value) {
            model.draft[keyPath: keyPath].remove(value)
        } else {
            model.draft[keyPath: keyPath].insert(value)
        }
    }
}
