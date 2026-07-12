import Foundation

/// The authentication backend boundary. The production implementation wraps Firebase Auth
/// (added in the app target once the Firebase SPM dependency is provisioned); tests use
/// `MockAuthenticationService`. Keeping this a protocol lets the whole auth flow be exercised
/// without a network or Firebase.
public protocol AuthenticationService: Sendable {
    /// Restore a previously persisted session at launch, or nil if none.
    func restoreSession() async throws -> AuthenticatedUser?

    func signInWithApple(_ credential: AppleCredential) async throws -> AuthenticatedUser
    func signInWithGoogle(_ credential: GoogleCredential) async throws -> AuthenticatedUser
    func signInWithEmail(email: String, password: String) async throws -> AuthenticatedUser
    func registerWithEmail(email: String, password: String) async throws -> AuthenticatedUser

    func signOut() async throws
}

/// Validation errors surfaced to the UI before we ever hit the backend.
public enum AuthValidationError: Error, Equatable, Sendable {
    case invalidEmail
    case weakPassword(minLength: Int)
    case emptyField
}
