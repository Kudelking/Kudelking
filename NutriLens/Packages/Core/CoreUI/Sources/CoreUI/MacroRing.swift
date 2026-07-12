import SwiftUI

/// A circular progress ring with a centered value/label. Used for calories and macros on Home.
public struct MacroRing: View {
    let progress: Double          // 0...1
    let color: Color
    let value: String
    let label: String
    let lineWidth: CGFloat

    @Environment(\.accessibilityReduceMotion) private var reduceMotion

    public init(progress: Double, color: Color, value: String, label: String,
                lineWidth: CGFloat = 10) {
        self.progress = progress
        self.color = color
        self.value = value
        self.label = label
        self.lineWidth = lineWidth
    }

    public var body: some View {
        ZStack {
            Circle()
                .stroke(color.opacity(0.15), lineWidth: lineWidth)
            Circle()
                .trim(from: 0, to: max(0.0001, progress))
                .stroke(color, style: StrokeStyle(lineWidth: lineWidth, lineCap: .round))
                .rotationEffect(.degrees(-90))
                .animation(reduceMotion ? nil : .snappy, value: progress)
            VStack(spacing: 2) {
                Text(value).font(Theme.Typography.headline).monospacedDigit()
                Text(label).font(Theme.Typography.caption)
                    .foregroundStyle(Theme.Colors.secondaryText)
            }
        }
        .accessibilityElement(children: .ignore)
        .accessibilityLabel(label)
        .accessibilityValue("\(value), \(Int((progress * 100).rounded())) percent")
    }
}

/// A compact stat tile (water, steps, fiber…) with an icon, value, and caption.
public struct StatTile: View {
    let systemImage: String
    let value: String
    let label: String
    let tint: Color

    public init(systemImage: String, value: String, label: String, tint: Color) {
        self.systemImage = systemImage
        self.value = value
        self.label = label
        self.tint = tint
    }

    public var body: some View {
        VStack(alignment: .leading, spacing: Theme.Spacing.xs) {
            Image(systemName: systemImage).foregroundStyle(tint)
            Text(value).font(Theme.Typography.headline).monospacedDigit()
            Text(label).font(Theme.Typography.caption)
                .foregroundStyle(Theme.Colors.secondaryText)
        }
        .frame(maxWidth: .infinity, alignment: .leading)
        .padding(Theme.Spacing.md)
        .background(Theme.Colors.card, in: RoundedRectangle(cornerRadius: Theme.Radius.md))
        .accessibilityElement(children: .combine)
    }
}
