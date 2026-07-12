import Testing
import Foundation
@testable import Authentication

@MainActor
@Suite("AuthSessionStore")
struct AuthSessionStoreTests {

    private struct StubError: Error, Sendable {}

    private func makeStore(
        restore: AuthenticatedUser? = nil,
        behavior: MockAuthenticationService.Behavior = .succeed(.preview)
    ) -> (AuthSessionStore, MockAuthenticationService, InMemoryTokenStore) {
        let service = MockAuthenticationService(restoreResult: restore, signInBehavior: behavior)
        let tokens = InMemoryTokenStore()
        let store = AuthSessionStore(service: service, tokenStore: tokens)
        return (store, service, tokens)
    }

    @Test("bootstrap with no persisted session ends signed out")
    func bootstrapSignedOut() async {
        let (store, _, _) = makeStore(restore: nil)
        await store.bootstrap()
        #expect(store.state == .signedOut)
    }

    @Test("bootstrap restores a persisted session and its token")
    func bootstrapRestores() async throws {
        let (store, _, tokens) = makeStore(restore: .preview)
        await store.bootstrap()
        #expect(store.state == .signedIn(.preview))
        #expect(try tokens.loadToken(account: "idToken") == "preview-token")
    }

    @Test("Successful email sign-in updates state and persists the token")
    func emailSignInSuccess() async throws {
        let (store, _, tokens) = makeStore()
        try await store.signInWithEmail(email: "user@nutrilens.app", password: "supersecret")
        #expect(store.state.user?.id == "preview-uid")
        #expect(try tokens.loadToken(account: "idToken") == "preview-token")
    }

    @Test("Invalid email is rejected before hitting the backend")
    func emailValidation() async {
        let (store, _, tokens) = makeStore()
        await #expect(throws: AuthValidationError.self) {
            try await store.signInWithEmail(email: "nope", password: "supersecret")
        }
        #expect(store.state == .loading)               // untouched
        #expect((try? tokens.loadToken(account: "idToken")) ?? nil == nil)
    }

    @Test("Backend failure leaves state unchanged and no token is stored")
    func signInFailure() async {
        let (store, _, tokens) = makeStore(behavior: .fail(StubError()))
        await #expect(throws: StubError.self) {
            try await store.signInWithEmail(email: "user@nutrilens.app", password: "supersecret")
        }
        #expect(store.state == .loading)
        #expect((try? tokens.loadToken(account: "idToken")) ?? nil == nil)
    }

    @Test("Sign out clears state, token, and calls the backend")
    func signOut() async throws {
        let (store, service, tokens) = makeStore()
        try await store.signInWithEmail(email: "user@nutrilens.app", password: "supersecret")
        await store.signOut()
        #expect(store.state == .signedOut)
        #expect((try? tokens.loadToken(account: "idToken")) ?? nil == nil)
        #expect(await service.signOutCallCount == 1)
    }
}
