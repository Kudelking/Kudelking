import Foundation

/// Configurable in-memory auth backend for tests, SwiftUI previews, and UI smoke runs.
public actor MockAuthenticationService: AuthenticationService {
    public enum Behavior: Sendable {
        case succeed(AuthenticatedUser)
        case fail(any Error & Sendable)
    }

    private var restoreResult: AuthenticatedUser?
    private var signInBehavior: Behavior
    public private(set) var signOutCallCount = 0

    public init(restoreResult: AuthenticatedUser? = nil,
                signInBehavior: Behavior = .succeed(.preview)) {
        self.restoreResult = restoreResult
        self.signInBehavior = signInBehavior
    }

    public func setSignInBehavior(_ behavior: Behavior) { signInBehavior = behavior }

    public func restoreSession() async throws -> AuthenticatedUser? { restoreResult }

    public func signInWithApple(_ credential: AppleCredential) async throws -> AuthenticatedUser {
        try resolve()
    }
    public func signInWithGoogle(_ credential: GoogleCredential) async throws -> AuthenticatedUser {
        try resolve()
    }
    public func signInWithEmail(email: String, password: String) async throws -> AuthenticatedUser {
        try resolve()
    }
    public func registerWithEmail(email: String, password: String) async throws -> AuthenticatedUser {
        try resolve()
    }

    public func signOut() async throws { signOutCallCount += 1 }

    private func resolve() throws -> AuthenticatedUser {
        switch signInBehavior {
        case let .succeed(user): return user
        case let .fail(error): throw error
        }
    }
}

public extension AuthenticatedUser {
    static let preview = AuthenticatedUser(
        id: "preview-uid",
        email: "user@nutrilens.app",
        displayName: "Preview User",
        provider: .email,
        idToken: "preview-token"
    )
}
