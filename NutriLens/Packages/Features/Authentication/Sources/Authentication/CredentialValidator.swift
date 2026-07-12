import Foundation

/// Pure, deterministic validation of email/password inputs before hitting the backend.
/// Fully unit-tested — no I/O.
public enum CredentialValidator {
    public static let minPasswordLength = 8

    /// A pragmatic email check: non-empty local part, single `@`, a dotted domain.
    public static func validateEmail(_ raw: String) -> Result<String, AuthValidationError> {
        let email = raw.trimmingCharacters(in: .whitespacesAndNewlines)
        guard !email.isEmpty else { return .failure(.emptyField) }

        let parts = email.split(separator: "@", omittingEmptySubsequences: false)
        guard parts.count == 2,
              !parts[0].isEmpty,
              let domain = parts.last,
              domain.contains("."),
              !domain.hasPrefix("."),
              !domain.hasSuffix("."),
              !email.contains(" ")
        else {
            return .failure(.invalidEmail)
        }
        return .success(email.lowercased())
    }

    public static func validatePassword(_ password: String) -> Result<String, AuthValidationError> {
        guard !password.isEmpty else { return .failure(.emptyField) }
        guard password.count >= minPasswordLength else {
            return .failure(.weakPassword(minLength: minPasswordLength))
        }
        return .success(password)
    }
}
