import Foundation
import Observation
import CoreModels

/// Backs the Diary screen: today's meals grouped by meal type, with delete.
@MainActor
@Observable
public final class DiaryViewModel {
    public struct Section: Identifiable, Equatable {
        public let type: MealType
        public let meals: [MealEntity]
        public var id: MealType { type }
        public var calories: Double { meals.reduce(0) { $0 + $1.totalCalories } }
    }

    public private(set) var sections: [Section] = []
    public private(set) var isLoading = true

    private let repository: MealRepository
    private let day: Date
    private var observationTask: Task<Void, Never>?

    public init(repository: MealRepository, day: Date = .now) {
        self.repository = repository
        self.day = day
    }

    public var isEmpty: Bool { sections.allSatisfy(\.meals.isEmpty) }

    public func start() async {
        observationTask?.cancel()
        let stream = repository.observeDay(day)
        observationTask = Task { [weak self] in
            for await meals in stream {
                await self?.apply(meals: meals)
            }
        }
    }

    public func stop() {
        observationTask?.cancel()
        observationTask = nil
    }

    public func delete(_ meal: MealEntity) async {
        try? await repository.delete(id: meal.id)
    }

    private func apply(meals: [MealEntity]) {
        isLoading = false
        sections = MealType.allCases.map { type in
            Section(type: type,
                    meals: meals.filter { $0.mealType == type }
                        .sorted { $0.loggedAt < $1.loggedAt })
        }
    }
}
