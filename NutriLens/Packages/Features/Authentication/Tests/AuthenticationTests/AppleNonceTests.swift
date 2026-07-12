import Testing
@testable import Authentication

@Suite("AppleNonce")
struct AppleNonceTests {

    @Test("Generates a nonce of the requested length")
    func length() {
        #expect(AppleNonce.random(length: 32).count == 32)
        #expect(AppleNonce.random(length: 16).count == 16)
    }

    @Test("Two nonces are (practically) never equal")
    func uniqueness() {
        #expect(AppleNonce.random() != AppleNonce.random())
    }

    @Test("SHA-256 is stable and lowercase hex of the right width")
    func sha256() {
        let hash = AppleNonce.sha256("nutrilens")
        #expect(hash.count == 64)                       // 32 bytes → 64 hex chars
        #expect(hash == hash.lowercased())
        #expect(AppleNonce.sha256("nutrilens") == hash) // deterministic
    }
}
