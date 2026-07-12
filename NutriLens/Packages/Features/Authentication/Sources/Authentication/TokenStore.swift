import Foundation
#if canImport(Security)
import Security
#endif

/// Secure persistence for the auth token. Tokens are sensitive → Keychain only, never
/// UserDefaults (ARCHITECTURE §10).
public protocol TokenStore: Sendable {
    func save(token: String, account: String) throws
    func loadToken(account: String) throws -> String?
    func delete(account: String) throws
}

/// Keychain-backed implementation. Gated on `Security` so the package still compiles on
/// platforms without it; unit tests use `InMemoryTokenStore`.
public struct KeychainTokenStore: TokenStore {
    private let service: String

    public init(service: String = "com.nutrilens.auth") {
        self.service = service
    }

    #if canImport(Security)
    public func save(token: String, account: String) throws {
        let data = Data(token.utf8)
        var query = baseQuery(account: account)
        SecItemDelete(query as CFDictionary)               // overwrite semantics
        query[kSecValueData as String] = data
        query[kSecAttrAccessible as String] = kSecAttrAccessibleAfterFirstUnlockThisDeviceOnly
        let status = SecItemAdd(query as CFDictionary, nil)
        guard status == errSecSuccess else { throw KeychainError.osStatus(status) }
    }

    public func loadToken(account: String) throws -> String? {
        var query = baseQuery(account: account)
        query[kSecReturnData as String] = true
        query[kSecMatchLimit as String] = kSecMatchLimitOne
        var result: CFTypeRef?
        let status = SecItemCopyMatching(query as CFDictionary, &result)
        if status == errSecItemNotFound { return nil }
        guard status == errSecSuccess, let data = result as? Data else {
            throw KeychainError.osStatus(status)
        }
        return String(decoding: data, as: UTF8.self)
    }

    public func delete(account: String) throws {
        let status = SecItemDelete(baseQuery(account: account) as CFDictionary)
        guard status == errSecSuccess || status == errSecItemNotFound else {
            throw KeychainError.osStatus(status)
        }
    }

    private func baseQuery(account: String) -> [String: Any] {
        [
            kSecClass as String: kSecClassGenericPassword,
            kSecAttrService as String: service,
            kSecAttrAccount as String: account
        ]
    }
    #else
    public func save(token: String, account: String) throws { throw KeychainError.unsupported }
    public func loadToken(account: String) throws -> String? { throw KeychainError.unsupported }
    public func delete(account: String) throws { throw KeychainError.unsupported }
    #endif
}

public enum KeychainError: Error, Equatable, Sendable {
    case osStatus(Int32)
    case unsupported
}

/// In-memory store for tests and previews. Thread-safe via an internal lock.
public final class InMemoryTokenStore: TokenStore, @unchecked Sendable {
    private var storage: [String: String] = [:]
    private let lock = NSLock()

    public init() {}

    public func save(token: String, account: String) throws {
        lock.lock(); defer { lock.unlock() }
        storage[account] = token
    }

    public func loadToken(account: String) throws -> String? {
        lock.lock(); defer { lock.unlock() }
        return storage[account]
    }

    public func delete(account: String) throws {
        lock.lock(); defer { lock.unlock() }
        storage[account] = nil
    }
}
