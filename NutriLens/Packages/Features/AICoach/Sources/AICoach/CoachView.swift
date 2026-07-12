import SwiftUI
import CoreModels
import CoreUI

/// The AI Coach chat screen: scrolling conversation, quick-prompt chips, and an input bar with
/// a live streaming indicator.
public struct CoachView: View {
    @State private var model: CoachViewModel

    public init(model: CoachViewModel) {
        _model = State(initialValue: model)
    }

    public var body: some View {
        VStack(spacing: 0) {
            conversation
            if let error = model.errorMessage {
                Text(error)
                    .font(Theme.Typography.caption)
                    .foregroundStyle(Theme.Colors.danger)
                    .padding(.horizontal, Theme.Spacing.md)
            }
            quickPrompts
            inputBar
        }
    }

    private var conversation: some View {
        ScrollViewReader { proxy in
            ScrollView {
                LazyVStack(spacing: Theme.Spacing.md) {
                    ForEach(model.messages) { message in
                        MessageBubble(message: message).id(message.id)
                    }
                }
                .padding(Theme.Spacing.md)
            }
            .onChange(of: model.messages.last?.text) {
                if let last = model.messages.last {
                    withAnimation { proxy.scrollTo(last.id, anchor: .bottom) }
                }
            }
        }
    }

    private var quickPrompts: some View {
        ScrollView(.horizontal, showsIndicators: false) {
            HStack(spacing: Theme.Spacing.sm) {
                ForEach(model.quickPrompts, id: \.self) { prompt in
                    Button(prompt) { Task { await model.sendQuickPrompt(prompt) } }
                        .font(Theme.Typography.caption)
                        .padding(.horizontal, Theme.Spacing.md)
                        .padding(.vertical, Theme.Spacing.sm)
                        .background(Theme.Colors.card, in: Capsule())
                        .foregroundStyle(Theme.Colors.primaryText)
                }
            }
            .padding(.horizontal, Theme.Spacing.md)
        }
        .disabled(model.isStreaming)
    }

    private var inputBar: some View {
        HStack(spacing: Theme.Spacing.sm) {
            TextField("Ask your coach…", text: $model.input, axis: .vertical)
                .textFieldStyle(.roundedBorder)
                .lineLimit(1...4)
                .disabled(model.isStreaming)
            Button {
                Task { await model.send() }
            } label: {
                Image(systemName: model.isStreaming ? "ellipsis" : "arrow.up.circle.fill")
                    .font(.title2)
            }
            .disabled(!model.canSend)
        }
        .padding(Theme.Spacing.md)
    }
}

private struct MessageBubble: View {
    let message: ChatMessageItem

    private var isUser: Bool { message.role == .user }

    var body: some View {
        HStack {
            if isUser { Spacer(minLength: Theme.Spacing.xl) }
            Group {
                if message.text.isEmpty, message.isStreaming {
                    ProgressView().controlSize(.small)
                } else {
                    Text(message.text)
                }
            }
            .padding(Theme.Spacing.md)
            .background(isUser ? Theme.Colors.accent.opacity(0.2) : Theme.Colors.card,
                        in: RoundedRectangle(cornerRadius: Theme.Radius.md))
            .frame(maxWidth: .infinity, alignment: isUser ? .trailing : .leading)
            if !isUser { Spacer(minLength: Theme.Spacing.xl) }
        }
        .accessibilityElement(children: .combine)
        .accessibilityLabel(isUser ? "You" : "Coach")
        .accessibilityValue(message.text)
    }
}
