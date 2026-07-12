import Foundation

/// The single error currency of the app. Every layer maps low-level failures into a case here,
/// and the UI renders a matching recovery action.
public enum AppError: Error, Equatable, Sendable {
    case offline
    case network(code: Int)
    case timeout
    case rateLimited(retryAfter: TimeInterval)
    case quotaExceeded            // free-tier daily limit reached → paywall
    case aiUnavailable            // model/provider down → graceful degradation
    case aiMalformedResponse      // could not parse structured output
    case foodNotRecognized
    case notAuthenticated
    case server(code: Int)
    case unknown

    /// The action the UI should offer the user for this error.
    public var recovery: Recovery {
        switch self {
        case .offline, .network, .timeout, .server, .aiUnavailable, .unknown: .retry
        case .rateLimited: .waitAndRetry
        case .quotaExceeded: .upgrade
        case .aiMalformedResponse, .foodNotRecognized: .manualEntry
        case .notAuthenticated: .reauthenticate
        }
    }

    public enum Recovery: Sendable {
        case retry
        case waitAndRetry
        case upgrade
        case manualEntry
        case reauthenticate
    }
}
