import Foundation
import Observation
import AuthenticationServices

/// Drives `WelcomeView`: form state, loading, error surfacing, and provider flows. Delegates all
/// state transitions to `AuthSessionStore` so the view never touches the backend directly.
@MainActor
@Observable
public final class AuthViewModel {
    public enum Mode: Sendable { case signIn, register }

    public var mode: Mode = .signIn
    public var email = ""
    public var password = ""
    public private(set) var isLoading = false
    public private(set) var errorMessage: String?

    /// Optional Google flow supplied by the app (GoogleSignIn SDK lives outside this package).
    /// When nil, the Google button is hidden.
    public let googleSignIn: (@Sendable () async throws -> GoogleCredential)?

    private let session: AuthSessionStore
    private var currentNonce: String?

    public init(session: AuthSessionStore,
                googleSignIn: (@Sendable () async throws -> GoogleCredential)? = nil) {
        self.session = session
        self.googleSignIn = googleSignIn
    }

    public var showsGoogle: Bool { googleSignIn != nil }

    public var submitTitle: String { mode == .signIn ? "Sign In" : "Create Account" }

    public func toggleMode() {
        mode = mode == .signIn ? .register : .signIn
        errorMessage = nil
    }

    // MARK: - Email

    public func submitEmail() async {
        await run {
            switch self.mode {
            case .signIn:
                try await self.session.signInWithEmail(email: self.email, password: self.password)
            case .register:
                try await self.session.registerWithEmail(email: self.email, password: self.password)
            }
        }
    }

    // MARK: - Google

    public func signInWithGoogle() async {
        guard let googleSignIn else { return }
        await run {
            let credential = try await googleSignIn()
            try await self.session.signInWithGoogle(credential)
        }
    }

    // MARK: - Apple

    /// Configure the Apple authorization request with a fresh hashed nonce.
    public func configure(_ request: ASAuthorizationAppleIDRequest) {
        let nonce = AppleNonce.random()
        currentNonce = nonce
        request.requestedScopes = [.fullName, .email]
        request.nonce = AppleNonce.sha256(nonce)
    }

    public func handleAppleCompletion(_ result: Result<ASAuthorization, Error>) async {
        switch result {
        case let .success(authorization):
            guard
                let credential = authorization.credential as? ASAuthorizationAppleIDCredential,
                let tokenData = credential.identityToken,
                let idToken = String(data: tokenData, encoding: .utf8),
                let nonce = currentNonce
            else {
                errorMessage = "Apple sign-in returned an unexpected response."
                return
            }
            let name = [credential.fullName?.givenName, credential.fullName?.familyName]
                .compactMap { $0 }
                .joined(separator: " ")
            let apple = AppleCredential(idToken: idToken, nonce: nonce,
                                        fullName: name.isEmpty ? nil : name)
            await run { try await self.session.signInWithApple(apple) }
        case let .failure(error):
            if (error as? ASAuthorizationError)?.code == .canceled { return }
            errorMessage = "Apple sign-in failed. Please try again."
        }
    }

    // MARK: - Helpers

    private func run(_ operation: @escaping () async throws -> Void) async {
        isLoading = true
        errorMessage = nil
        defer { isLoading = false }
        do {
            try await operation()
        } catch let error as AuthValidationError {
            errorMessage = Self.message(for: error)
        } catch {
            errorMessage = "Something went wrong. Please try again."
        }
    }

    static func message(for error: AuthValidationError) -> String {
        switch error {
        case .invalidEmail: "Please enter a valid email address."
        case let .weakPassword(minLength): "Password must be at least \(minLength) characters."
        case .emptyField: "Please fill in all fields."
        }
    }
}
