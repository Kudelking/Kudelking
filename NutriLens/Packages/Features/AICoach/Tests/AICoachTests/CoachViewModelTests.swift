import Testing
import Foundation
@testable import AICoach
import CoreModels

/// Scripted gateway that streams the given chunks, optionally finishing with an error.
struct ScriptedGateway: AIGateway {
    var chunks: [String] = []
    var error: (any Error & Sendable)?

    func analyzeMeal(_ request: MealAnalysisRequest) async throws -> MealAnalysisResult {
        throw AppError.unknown   // unused by coach tests
    }

    func coachChat(_ request: CoachRequest) -> AsyncThrowingStream<String, Error> {
        let chunks = chunks
        let error = error
        return AsyncThrowingStream { continuation in
            for chunk in chunks { continuation.yield(chunk) }
            if let error { continuation.finish(throwing: error) } else { continuation.finish() }
        }
    }
}

final class AnalyticsSpy: Analytics, @unchecked Sendable {
    private(set) var events: [AnalyticsEvent] = []
    func track(_ event: AnalyticsEvent) { events.append(event) }
}

@MainActor
@Suite("CoachViewModel")
struct CoachViewModelTests {

    @Test("Starts with a greeting message")
    func greeting() {
        let vm = CoachViewModel(gateway: ScriptedGateway())
        #expect(vm.messages.count == 1)
        #expect(vm.messages.first?.role == .assistant)
    }

    @Test("send() appends the user message and streams the assistant reply")
    func streamsReply() async {
        let spy = AnalyticsSpy()
        let vm = CoachViewModel(gateway: ScriptedGateway(chunks: ["Hello", ", ", "world"]),
                                analytics: spy)
        vm.input = "hi"
        await vm.send()

        #expect(vm.messages.count == 3)                        // greeting + user + assistant
        #expect(vm.messages[1].role == .user)
        #expect(vm.messages[1].text == "hi")
        #expect(vm.messages[2].role == .assistant)
        #expect(vm.messages[2].text == "Hello, world")
        #expect(!vm.messages[2].isStreaming)
        #expect(!vm.isStreaming)
        #expect(vm.input.isEmpty)
        #expect(spy.events.contains(.coachMessageSent))
    }

    @Test("Empty input is a no-op")
    func emptyInput() async {
        let vm = CoachViewModel(gateway: ScriptedGateway(chunks: ["x"]))
        vm.input = "   "
        await vm.send()
        #expect(vm.messages.count == 1)                        // still just the greeting
    }

    @Test("A stream error surfaces an inline message and a fallback bubble")
    func streamError() async {
        let vm = CoachViewModel(gateway: ScriptedGateway(error: AppError.aiUnavailable))
        vm.input = "hello"
        await vm.send()

        #expect(vm.errorMessage != nil)
        #expect(vm.messages.last?.role == .assistant)
        #expect(vm.messages.last?.text.contains("Couldn't reach") == true)
        #expect(!vm.isStreaming)
    }

    @Test("An empty successful stream shows a gentle fallback")
    func emptyStream() async {
        let vm = CoachViewModel(gateway: ScriptedGateway(chunks: []))
        vm.input = "hello"
        await vm.send()
        #expect(vm.messages.last?.text.contains("rephrasing") == true)
    }

    @Test("sendQuickPrompt sends the tapped prompt")
    func quickPrompt() async {
        let vm = CoachViewModel(gateway: ScriptedGateway(chunks: ["answer"]))
        await vm.sendQuickPrompt("What should I eat for dinner?")
        #expect(vm.messages[1].text == "What should I eat for dinner?")
        #expect(vm.messages.last?.text == "answer")
    }
}
