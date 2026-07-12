import SwiftUI

/// The single reusable representations of the four canonical screen states.
/// Every feature uses these so loading/empty/error look identical across the app.

public struct LoadingView: View {
    let message: String
    public init(_ message: String = "Loading…") { self.message = message }
    public var body: some View {
        VStack(spacing: Theme.Spacing.md) {
            ProgressView()
            Text(message).font(Theme.Typography.caption).foregroundStyle(Theme.Colors.secondaryText)
        }
        .frame(maxWidth: .infinity, maxHeight: .infinity)
        .accessibilityElement(children: .combine)
        .accessibilityLabel(message)
    }
}

public struct EmptyStateView: View {
    let systemImage: String
    let title: String
    let message: String
    let actionTitle: String?
    let action: (() -> Void)?

    public init(systemImage: String, title: String, message: String,
                actionTitle: String? = nil, action: (() -> Void)? = nil) {
        self.systemImage = systemImage; self.title = title; self.message = message
        self.actionTitle = actionTitle; self.action = action
    }

    public var body: some View {
        ContentUnavailableView {
            Label(title, systemImage: systemImage)
        } description: {
            Text(message)
        } actions: {
            if let actionTitle, let action {
                Button(actionTitle, action: action).buttonStyle(.borderedProminent)
            }
        }
    }
}

public struct ErrorStateView: View {
    let title: String
    let message: String
    let retryTitle: String
    let onRetry: () -> Void

    public init(title: String = "Something went wrong", message: String,
                retryTitle: String = "Try Again", onRetry: @escaping () -> Void) {
        self.title = title; self.message = message
        self.retryTitle = retryTitle; self.onRetry = onRetry
    }

    public var body: some View {
        VStack(spacing: Theme.Spacing.md) {
            Image(systemName: "exclamationmark.triangle")
                .font(.largeTitle).foregroundStyle(Theme.Colors.warning)
            Text(title).font(Theme.Typography.headline)
            Text(message)
                .font(Theme.Typography.caption)
                .foregroundStyle(Theme.Colors.secondaryText)
                .multilineTextAlignment(.center)
            Button(retryTitle, action: onRetry).buttonStyle(.borderedProminent)
        }
        .padding(Theme.Spacing.lg)
        .frame(maxWidth: .infinity, maxHeight: .infinity)
    }
}

/// Generic four-state container. Feature views wrap their content in this.
public enum LoadState<Value> {
    case loading
    case empty
    case error(String)
    case loaded(Value)
}
