import Foundation
import SwiftData
import CoreModels

/// SwiftData-backed `MealRepository`. Runs on its own actor (off the main thread) via
/// `@ModelActor`, so all store access is serialized and `Sendable`-safe.
///
/// Every mutation is written together with an Outbox row in the same `save()`, guaranteeing
/// the local write and its future-sync intent are atomic (offline-first, ARCHITECTURE §2/§9).
@ModelActor
public actor SwiftDataMealRepository: MealRepository {

    // Live observers keyed by a token, each watching a specific day.
    private var observers: [UUID: (day: Date, continuation: AsyncStream<[MealEntity]>.Continuation)] = [:]

    // MARK: - MealRepository

    public func log(_ meal: MealEntity) async throws {
        let model = MealModel(entity: meal, syncState: .pendingCreate)
        modelContext.insert(model)
        try enqueueOutbox(op: .create, meal: meal)
        try modelContext.save()
        notify(day: meal.loggedAt)
    }

    public func meals(on day: Date) async throws -> [MealEntity] {
        try fetchMeals(on: day).map { $0.toEntity() }
    }

    public func update(_ meal: MealEntity) async throws {
        guard let model = try fetchMeal(id: meal.id) else {
            throw AppError.unknown
        }
        applyUpdate(model, from: meal)
        try enqueueOutbox(op: .update, meal: meal)
        try modelContext.save()
        notify(day: meal.loggedAt)
    }

    public func delete(id: UUID) async throws {
        guard let model = try fetchMeal(id: id) else { return }
        let day = model.loggedAt
        let payload = try JSONEncoder().encode(model.id)
        modelContext.insert(OutboxItemModel(entityType: "meal", entityID: id.uuidString,
                                            op: .delete, payload: payload))
        modelContext.delete(model)
        try modelContext.save()
        notify(day: day)
    }

    public nonisolated func observeDay(_ day: Date) -> AsyncStream<[MealEntity]> {
        AsyncStream { continuation in
            let token = UUID()
            Task { await self.attach(token: token, day: day, continuation: continuation) }
            continuation.onTermination = { _ in
                Task { await self.detach(token: token) }
            }
        }
    }

    // MARK: - Observer plumbing

    private func attach(token: UUID, day: Date,
                        continuation: AsyncStream<[MealEntity]>.Continuation) {
        observers[token] = (day, continuation)
        // Emit an initial snapshot so subscribers render immediately.
        if let meals = try? meals(on: day) {
            continuation.yield(meals)
        }
    }

    private func detach(token: UUID) {
        observers[token]?.continuation.finish()
        observers[token] = nil
    }

    private func notify(day: Date) {
        let cal = Calendar.current
        for (_, observer) in observers where cal.isDate(observer.day, inSameDayAs: day) {
            if let meals = try? meals(on: observer.day) {
                observer.continuation.yield(meals)
            }
        }
    }

    // MARK: - Store helpers

    private func fetchMeals(on day: Date) throws -> [MealModel] {
        let start = Calendar.current.startOfDay(for: day)
        guard let end = Calendar.current.date(byAdding: .day, value: 1, to: start) else {
            return []
        }
        let descriptor = FetchDescriptor<MealModel>(
            predicate: #Predicate { $0.loggedAt >= start && $0.loggedAt < end },
            sortBy: [SortDescriptor(\.loggedAt, order: .forward)]
        )
        return try modelContext.fetch(descriptor)
    }

    private func fetchMeal(id: UUID) throws -> MealModel? {
        let descriptor = FetchDescriptor<MealModel>(predicate: #Predicate { $0.id == id })
        return try modelContext.fetch(descriptor).first
    }

    private func applyUpdate(_ model: MealModel, from entity: MealEntity) {
        model.mealType = entity.mealType
        model.loggedAt = entity.loggedAt
        model.note = entity.note
        model.photoRemoteURL = entity.photoRemoteURL
        model.totalCalories = entity.totalCalories
        model.totalMacros = entity.totalMacros
        model.updatedAt = .now
        model.syncState = .pendingUpdate

        // Reconcile items: update existing, insert new, remove dropped.
        var existing = Dictionary(uniqueKeysWithValues: model.items.map { ($0.id, $0) })
        var reconciled: [FoodItemModel] = []
        for item in entity.items {
            if let found = existing.removeValue(forKey: item.id) {
                found.apply(item)
                reconciled.append(found)
            } else {
                reconciled.append(FoodItemModel(entity: item))
            }
        }
        for orphan in existing.values { modelContext.delete(orphan) }
        model.items = reconciled
    }

    private func enqueueOutbox(op: SyncOp, meal: MealEntity) throws {
        let payload = try JSONEncoder().encode(meal)
        modelContext.insert(OutboxItemModel(entityType: "meal", entityID: meal.id.uuidString,
                                            op: op, payload: payload))
    }
}
