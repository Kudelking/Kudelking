import Foundation
import CoreModels

/// A source of pending local changes (the Outbox) that the sync engine drains.
public protocol OutboxSource: Sendable {
    func pendingOutbox(limit: Int) async throws -> [OutboxEntry]
    func acknowledgeOutbox(id: UUID) async throws
}

/// The remote replication target (Firestore, wrapped in the App target).
public protocol RemoteSyncClient: Sendable {
    func push(_ entry: OutboxEntry) async throws
}

// SwiftDataMealRepository already exposes the Outbox read/ack API.
extension SwiftDataMealRepository: OutboxSource {}

/// Drains the Outbox to the backend in FIFO order (offline-first replication, ARCHITECTURE §9).
///
/// Ordering matters: a create must reach the server before its update. So on the first push
/// failure we stop and leave the remaining entries queued — the next `sync()` retries from there.
/// Entries are acknowledged (removed) only after a confirmed push, so a crash mid-sync never
/// loses data; at worst an entry is pushed twice, which the backend upserts idempotently.
public struct SyncEngine: Sendable {
    private let source: OutboxSource
    private let remote: RemoteSyncClient
    private let batchSize: Int

    public init(source: OutboxSource, remote: RemoteSyncClient, batchSize: Int = 50) {
        self.source = source
        self.remote = remote
        self.batchSize = batchSize
    }

    public struct Result: Sendable, Equatable {
        public let pushed: Int
        public let remaining: Bool     // whether a full batch was drained (more may exist)
    }

    /// Push pending entries until the queue is empty or a push fails. Returns how many were
    /// replicated. Throws only if reading the Outbox itself fails.
    @discardableResult
    public func sync() async throws -> Result {
        let pending = try await source.pendingOutbox(limit: batchSize)
        var pushed = 0
        for entry in pending {
            do {
                try await remote.push(entry)
                try await source.acknowledgeOutbox(id: entry.id)
                pushed += 1
            } catch {
                // Stop on the first failure to preserve ordering; retried on the next run.
                break
            }
        }
        return Result(pushed: pushed, remaining: pending.count == batchSize)
    }
}
