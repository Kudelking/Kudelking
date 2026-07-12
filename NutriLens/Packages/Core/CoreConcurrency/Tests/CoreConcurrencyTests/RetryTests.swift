import Testing
import Foundation
@testable import CoreConcurrency

@Suite("withRetry")
struct RetryTests {

    @Test("Succeeds on the first attempt without sleeping")
    func firstTry() async throws {
        var sleeps = 0
        let result = try await withRetry(.network, sleeper: { _ in sleeps += 1 }) { 42 }
        #expect(result == 42)
        #expect(sleeps == 0)
    }

    @Test("Retries transient failures then succeeds")
    func retriesThenSucceeds() async throws {
        let counter = Counter()
        let result = try await withRetry(
            RetryPolicy(maxAttempts: 4),
            sleeper: { _ in }               // don't actually wait in tests
        ) {
            let n = await counter.increment()
            if n < 3 { throw URLError(.timedOut) }
            return "ok"
        }
        #expect(result == "ok")
        #expect(await counter.value == 3)
    }

    @Test("Stops immediately when shouldRetry returns false")
    func noRetryOnPermanent() async {
        let counter = Counter()
        await #expect(throws: URLError.self) {
            try await withRetry(
                RetryPolicy(maxAttempts: 4),
                shouldRetry: { _ in false },
                sleeper: { _ in }
            ) {
                _ = await counter.increment()
                throw URLError(.badServerResponse)
            }
        }
        #expect(await counter.value == 1)
    }

    @Test("Gives up after maxAttempts")
    func exhausts() async {
        let counter = Counter()
        await #expect(throws: URLError.self) {
            try await withRetry(RetryPolicy(maxAttempts: 3), sleeper: { _ in }) {
                _ = await counter.increment()
                throw URLError(.cannotConnectToHost)
            }
        }
        #expect(await counter.value == 3)
    }
}

private actor Counter {
    private(set) var value = 0
    func increment() -> Int { value += 1; return value }
}
