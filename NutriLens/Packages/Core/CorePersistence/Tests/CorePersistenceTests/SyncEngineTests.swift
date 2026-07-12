import Testing
import Foundation
@testable import CorePersistence
import CoreModels

@Suite("SyncEngine")
struct SyncEngineTests {

    private func entry(_ n: Int, op: SyncOp = .create) -> OutboxEntry {
        OutboxEntry(id: UUID(), entityType: "meal", entityID: "\(n)", op: op,
                    payload: Data(), attempts: 0, createdAt: Date(timeIntervalSince1970: Double(n)))
    }

    actor MockOutbox: OutboxSource {
        var entries: [OutboxEntry]
        private(set) var acked: [UUID] = []
        init(_ entries: [OutboxEntry]) { self.entries = entries }
        func pendingOutbox(limit: Int) async throws -> [OutboxEntry] { Array(entries.prefix(limit)) }
        func acknowledgeOutbox(id: UUID) async throws {
            acked.append(id)
            entries.removeAll { $0.id == id }
        }
        func ackedIDs() -> [UUID] { acked }
        func remaining() -> Int { entries.count }
    }

    actor MockRemote: RemoteSyncClient {
        var failOnEntityID: String?
        private(set) var pushed: [String] = []
        init(failOnEntityID: String? = nil) { self.failOnEntityID = failOnEntityID }
        func push(_ entry: OutboxEntry) async throws {
            if entry.entityID == failOnEntityID { throw AppError.offline }
            pushed.append(entry.entityID)
        }
        func pushedIDs() -> [String] { pushed }
    }

    @Test("Drains all entries and acknowledges each on success")
    func drainsAll() async throws {
        let outbox = MockOutbox([entry(1), entry(2), entry(3)])
        let remote = MockRemote()
        let result = try await SyncEngine(source: outbox, remote: remote).sync()

        #expect(result.pushed == 3)
        #expect(await remote.pushedIDs() == ["1", "2", "3"])
        #expect(await outbox.remaining() == 0)
    }

    @Test("Stops at the first failure, preserving order and the remaining queue")
    func stopsOnFailure() async throws {
        let outbox = MockOutbox([entry(1), entry(2), entry(3)])
        let remote = MockRemote(failOnEntityID: "2")
        let result = try await SyncEngine(source: outbox, remote: remote).sync()

        #expect(result.pushed == 1)                 // only entry 1 succeeded
        #expect(await remote.pushedIDs() == ["1"])
        #expect(await outbox.remaining() == 2)      // 2 and 3 still queued
        #expect(await outbox.ackedIDs().count == 1)
    }

    @Test("Reports remaining when a full batch is drained")
    func remainingFlag() async throws {
        let outbox = MockOutbox([entry(1), entry(2)])
        let result = try await SyncEngine(source: outbox, remote: MockRemote(), batchSize: 2).sync()
        #expect(result.remaining)                   // batch was full → maybe more
    }

    @Test("Empty outbox is a no-op")
    func empty() async throws {
        let result = try await SyncEngine(source: MockOutbox([]), remote: MockRemote()).sync()
        #expect(result.pushed == 0)
        #expect(!result.remaining)
    }
}
