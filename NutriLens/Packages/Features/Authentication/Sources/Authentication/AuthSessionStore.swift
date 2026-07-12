import Foundation
import Observation

/// Owns the app's authentication state and the side effects around it (token persistence).
/// This is the single source of truth the root view routes on. All auth mutations funnel
/// through here so token save/clear can never drift from the in-memory state.
@MainActor
@Observable
public final class AuthSessionStore {
    public private(set) var state: AuthState = .loading

    private let service: AuthenticationService
    private let tokenStore: TokenStore
    private let tokenAccount: String

    public init(service: AuthenticationService,
                tokenStore: TokenStore,
                tokenAccount: String = "idToken") {
        self.service = service
        self.tokenStore = tokenStore
        self.tokenAccount = tokenAccount
    }

    /// Restore a persisted session at launch. Resolves to `.signedOut` if none / on failure.
    public func bootstrap() async {
        do {
            if let user = try await service.restoreSession() {
                try? tokenStore.save(token: user.idToken, account: tokenAccount)
                state = .signedIn(user)
            } else {
                state = .signedOut
            }
        } catch {
            state = .signedOut
        }
    }

    public func signInWithApple(_ credential: AppleCredential) async throws {
        try await complete { try await self.service.signInWithApple(credential) }
    }

    public func signInWithGoogle(_ credential: GoogleCredential) async throws {
        try await complete { try await self.service.signInWithGoogle(credential) }
    }

    public func signInWithEmail(email: String, password: String) async throws {
        let validEmail = try CredentialValidator.validateEmail(email).get()
        let validPassword = try CredentialValidator.validatePassword(password).get()
        try await complete {
            try await self.service.signInWithEmail(email: validEmail, password: validPassword)
        }
    }

    public func registerWithEmail(email: String, password: String) async throws {
        let validEmail = try CredentialValidator.validateEmail(email).get()
        let validPassword = try CredentialValidator.validatePassword(password).get()
        try await complete {
            try await self.service.registerWithEmail(email: validEmail, password: validPassword)
        }
    }

    public func signOut() async {
        try? await service.signOut()
        try? tokenStore.delete(account: tokenAccount)
        state = .signedOut
    }

    /// Runs a sign-in operation, persisting the token and updating state only on success.
    /// On failure the state is untouched (stays signed out) and the error propagates to the UI.
    private func complete(_ operation: () async throws -> AuthenticatedUser) async throws {
        let user = try await operation()
        try tokenStore.save(token: user.idToken, account: tokenAccount)
        state = .signedIn(user)
    }
}
