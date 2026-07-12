import Foundation

/// The identity provider a user authenticated with.
public enum AuthProvider: String, Codable, Sendable, CaseIterable {
    case apple, google, email
}

/// An authenticated user as far as the app is concerned. Framework-agnostic — the concrete
/// auth backend (Firebase) maps its own user type onto this.
public struct AuthenticatedUser: Sendable, Equatable, Identifiable {
    public let id: String            // stable uid
    public let email: String?
    public let displayName: String?
    public let provider: AuthProvider
    public let idToken: String       // short-lived; persisted in the Keychain, never UserDefaults

    public init(id: String, email: String?, displayName: String?,
                provider: AuthProvider, idToken: String) {
        self.id = id
        self.email = email
        self.displayName = displayName
        self.provider = provider
        self.idToken = idToken
    }
}

/// The top-level authentication state the app routes on.
public enum AuthState: Sendable, Equatable {
    case loading                       // restoring a persisted session at launch
    case signedOut
    case signedIn(AuthenticatedUser)

    public var user: AuthenticatedUser? {
        if case let .signedIn(user) = self { return user }
        return nil
    }
}

// MARK: - Provider credentials

public struct AppleCredential: Sendable {
    public let idToken: String
    public let nonce: String
    public let fullName: String?
    public init(idToken: String, nonce: String, fullName: String?) {
        self.idToken = idToken
        self.nonce = nonce
        self.fullName = fullName
    }
}

public struct GoogleCredential: Sendable {
    public let idToken: String
    public let accessToken: String
    public init(idToken: String, accessToken: String) {
        self.idToken = idToken
        self.accessToken = accessToken
    }
}
