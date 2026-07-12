import Foundation
import SwiftData

/// Owns the SwiftData `ModelContainer`. Use `.live()` in the app and `.inMemory()` in tests.
public enum PersistenceController {

    /// On-disk store for production, backed by the app's default SwiftData location.
    public static func live() throws -> ModelContainer {
        let schema = Schema(PersistenceSchema.models)
        let config = ModelConfiguration(schema: schema, isStoredInMemoryOnly: false)
        return try ModelContainer(for: schema, configurations: [config])
    }

    /// Ephemeral store for unit tests — no disk, isolated per test.
    public static func inMemory() throws -> ModelContainer {
        let schema = Schema(PersistenceSchema.models)
        let config = ModelConfiguration(schema: schema, isStoredInMemoryOnly: true)
        return try ModelContainer(for: schema, configurations: [config])
    }
}
