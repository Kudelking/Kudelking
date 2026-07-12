import Foundation
import SwiftData
import CoreModels

/// A pending local change awaiting replication to the backend (consumed by the sync engine in M9).
public struct OutboxEntry: Sendable, Equatable {
    public let id: UUID
    public let entityType: String
    public let entityID: String
    public let op: SyncOp
    public let payload: Data
    public let attempts: Int
    public let createdAt: Date
}

extension SwiftDataMealRepository {

    /// Oldest-first pending changes. The sync engine drains these when connectivity returns.
    public func pendingOutbox(limit: Int = 100) throws -> [OutboxEntry] {
        var descriptor = FetchDescriptor<OutboxItemModel>(
            sortBy: [SortDescriptor(\.createdAt, order: .forward)]
        )
        descriptor.fetchLimit = limit
        return try modelContext.fetch(descriptor).map {
            OutboxEntry(id: $0.id, entityType: $0.entityType, entityID: $0.entityID,
                        op: $0.op, payload: $0.payload, attempts: $0.attempts,
                        createdAt: $0.createdAt)
        }
    }

    public func pendingOutboxCount() throws -> Int {
        try modelContext.fetchCount(FetchDescriptor<OutboxItemModel>())
    }

    /// Remove an outbox entry once the sync engine has confirmed replication.
    public func acknowledgeOutbox(id: UUID) throws {
        let descriptor = FetchDescriptor<OutboxItemModel>(predicate: #Predicate { $0.id == id })
        if let item = try modelContext.fetch(descriptor).first {
            modelContext.delete(item)
            try modelContext.save()
        }
    }
}
