import Foundation

/// Policy for retrying a throwing async operation with exponential backoff and jitter.
public struct RetryPolicy: Sendable {
    public let maxAttempts: Int
    public let baseDelay: Duration
    public let maxDelay: Duration
    public let jitter: Double   // 0...1 fraction of the delay added randomly

    public init(maxAttempts: Int = 4,
                baseDelay: Duration = .seconds(2),
                maxDelay: Duration = .seconds(16),
                jitter: Double = 0.2) {
        self.maxAttempts = max(1, maxAttempts)
        self.baseDelay = baseDelay
        self.maxDelay = maxDelay
        self.jitter = jitter
    }

    public static let network = RetryPolicy()
    public static let none = RetryPolicy(maxAttempts: 1)

    /// Backoff delay for a given zero-based attempt index: base·2^n, capped at maxDelay, plus jitter.
    func delay(forAttempt attempt: Int) -> Duration {
        let exponent = Double(1 << attempt)                 // 1, 2, 4, 8...
        let raw = baseDelay * exponent
        let capped = raw < maxDelay ? raw : maxDelay
        let jitterFraction = Double.random(in: 0...jitter)
        return capped + capped * jitterFraction
    }
}

/// Runs `operation`, retrying on failure per `policy`. `shouldRetry` lets callers opt out of
/// retrying non-transient errors (e.g. 4xx that aren't 429). Honors task cancellation.
public func withRetry<T: Sendable>(
    _ policy: RetryPolicy = .network,
    shouldRetry: @Sendable (Error) -> Bool = { _ in true },
    sleeper: @Sendable (Duration) async throws -> Void = { try await Task.sleep(for: $0) },
    operation: @Sendable () async throws -> T
) async throws -> T {
    var lastError: Error = CancellationError()
    for attempt in 0..<policy.maxAttempts {
        try Task.checkCancellation()
        do {
            return try await operation()
        } catch is CancellationError {
            throw CancellationError()
        } catch {
            lastError = error
            let isLast = attempt == policy.maxAttempts - 1
            guard !isLast, shouldRetry(error) else { throw error }
            try await sleeper(policy.delay(forAttempt: attempt))
        }
    }
    throw lastError
}
