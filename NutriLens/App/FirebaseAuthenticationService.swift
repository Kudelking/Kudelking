import Foundation
import Authentication

/// Production `AuthenticationService` backed by Firebase Auth. This adapter is intentionally
/// thin: it maps Firebase's user/credential types onto the framework-free `AuthenticatedUser`.
///
/// It lives in the App target (not the Authentication package) so the package stays free of the
/// Firebase SPM dependency and remains fast to test. Uncomment the Firebase calls once
/// `firebase-ios-sdk` is added to the project and `GoogleService-Info.plist` is provisioned.
struct FirebaseAuthenticationService: AuthenticationService {

    func restoreSession() async throws -> AuthenticatedUser? {
        // guard let user = Auth.auth().currentUser else { return nil }
        // let token = try await user.getIDToken()
        // return Self.map(user, token: token)
        nil
    }

    func signInWithApple(_ credential: AppleCredential) async throws -> AuthenticatedUser {
        // let oauth = OAuthProvider.appleCredential(withIDToken: credential.idToken,
        //                                           rawNonce: credential.nonce,
        //                                           fullName: nil)
        // let result = try await Auth.auth().signIn(with: oauth)
        // return try await Self.map(result.user)
        throw notWired
    }

    func signInWithGoogle(_ credential: GoogleCredential) async throws -> AuthenticatedUser {
        // let oauth = GoogleAuthProvider.credential(withIDToken: credential.idToken,
        //                                           accessToken: credential.accessToken)
        // let result = try await Auth.auth().signIn(with: oauth)
        // return try await Self.map(result.user)
        throw notWired
    }

    func signInWithEmail(email: String, password: String) async throws -> AuthenticatedUser {
        // let result = try await Auth.auth().signIn(withEmail: email, password: password)
        // return try await Self.map(result.user)
        throw notWired
    }

    func registerWithEmail(email: String, password: String) async throws -> AuthenticatedUser {
        // let result = try await Auth.auth().createUser(withEmail: email, password: password)
        // return try await Self.map(result.user)
        throw notWired
    }

    func signOut() async throws {
        // try Auth.auth().signOut()
    }

    private var notWired: Error {
        NSError(domain: "FirebaseAuth", code: -1,
                userInfo: [NSLocalizedDescriptionKey: "Firebase SDK not yet linked."])
    }
}
