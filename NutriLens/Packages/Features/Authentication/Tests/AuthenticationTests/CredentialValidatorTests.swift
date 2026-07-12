import Testing
@testable import Authentication

@Suite("CredentialValidator")
struct CredentialValidatorTests {

    @Test("Accepts well-formed emails and normalizes case/whitespace")
    func validEmails() throws {
        #expect(try CredentialValidator.validateEmail("  User@Example.com ").get() == "user@example.com")
        #expect(try CredentialValidator.validateEmail("a.b+tag@sub.domain.io").get() == "a.b+tag@sub.domain.io")
    }

    @Test("Rejects malformed emails", arguments: [
        "", "plainaddress", "@no-local.com", "no-at-sign.com",
        "no@domain", "trailing@dot.", "space in@email.com", "two@@at.com"
    ])
    func invalidEmails(_ input: String) {
        #expect(CredentialValidator.validateEmail(input).isFailure)
    }

    @Test("Password must meet the minimum length")
    func passwords() {
        #expect(CredentialValidator.validatePassword("").isFailure)
        #expect(CredentialValidator.validatePassword("short").isFailure)
        #expect((try? CredentialValidator.validatePassword("longenough1").get()) == "longenough1")
    }
}

private extension Result {
    var isFailure: Bool { if case .failure = self { true } else { false } }
}
