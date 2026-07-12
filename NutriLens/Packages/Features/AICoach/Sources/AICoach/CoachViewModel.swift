import Foundation
import Observation
import CoreModels

/// A single chat bubble in the coach conversation.
public struct ChatMessageItem: Identifiable, Equatable, Sendable {
    public let id: UUID
    public let role: ChatRole
    public var text: String
    public var isStreaming: Bool

    public init(id: UUID = UUID(), role: ChatRole, text: String, isStreaming: Bool = false) {
        self.id = id
        self.role = role
        self.text = text
        self.isStreaming = isStreaming
    }
}

/// Drives the AI Coach chat. Streams assistant replies token-by-token via `AIGateway.coachChat`,
/// updating the last bubble in place so the UI feels live. Failures degrade to an inline message
/// rather than throwing.
@MainActor
@Observable
public final class CoachViewModel {
    public private(set) var messages: [ChatMessageItem]
    public var input = ""
    public private(set) var isStreaming = false
    public private(set) var errorMessage: String?

    public let quickPrompts = [
        "How much protein did I eat today?",
        "What should I eat for dinner?",
        "Can I eat this?",
        "Why am I not losing weight?"
    ]

    private let gateway: AIGateway
    private let recentDays: Int
    private let analytics: Analytics?

    public init(gateway: AIGateway,
                recentDays: Int = 7,
                analytics: Analytics? = nil,
                greeting: String = "Hi! I'm your nutrition coach. Ask me anything about your goals.") {
        self.gateway = gateway
        self.recentDays = recentDays
        self.analytics = analytics
        self.messages = [ChatMessageItem(role: .assistant, text: greeting)]
    }

    public var canSend: Bool {
        !isStreaming && !input.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty
    }

    public func sendQuickPrompt(_ prompt: String) async {
        input = prompt
        await send()
    }

    public func send() async {
        let text = input.trimmingCharacters(in: .whitespacesAndNewlines)
        guard !isStreaming, !text.isEmpty else { return }

        input = ""
        errorMessage = nil
        messages.append(ChatMessageItem(role: .user, text: text))

        let assistantID = UUID()
        messages.append(ChatMessageItem(id: assistantID, role: .assistant,
                                        text: "", isStreaming: true))
        isStreaming = true
        analytics?.track(.coachMessageSent)

        defer {
            isStreaming = false
            setStreaming(false, for: assistantID)
        }

        do {
            let stream = gateway.coachChat(CoachRequest(message: text, recentDays: recentDays))
            for try await chunk in stream {
                append(chunk, to: assistantID)
            }
            // If the model returned nothing, show a gentle fallback.
            if currentText(of: assistantID).isEmpty {
                setText("I'm not sure how to answer that. Try rephrasing?", for: assistantID)
            }
        } catch {
            errorMessage = "The coach is unavailable right now. Please try again."
            if currentText(of: assistantID).isEmpty {
                setText("⚠️ Couldn't reach the coach.", for: assistantID)
            }
        }
    }

    // MARK: - Message mutation helpers

    private func index(of id: UUID) -> Int? { messages.firstIndex { $0.id == id } }

    private func append(_ chunk: String, to id: UUID) {
        guard let index = index(of: id) else { return }
        messages[index].text += chunk
    }

    private func setText(_ text: String, for id: UUID) {
        guard let index = index(of: id) else { return }
        messages[index].text = text
    }

    private func setStreaming(_ streaming: Bool, for id: UUID) {
        guard let index = index(of: id) else { return }
        messages[index].isStreaming = streaming
    }

    private func currentText(of id: UUID) -> String {
        index(of: id).map { messages[$0].text } ?? ""
    }
}
