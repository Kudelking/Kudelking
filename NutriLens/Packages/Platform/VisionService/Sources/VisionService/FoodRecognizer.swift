import Foundation

/// A candidate label from the on-device classifier.
public struct FoodLabel: Sendable, Hashable, Identifiable {
    public var id: String { identifier }
    public let identifier: String
    public let confidence: Double
    public init(identifier: String, confidence: Double) {
        self.identifier = identifier
        self.confidence = confidence
    }
}

/// On-device Vision seam. The client uses this as the first, free stage of the cost cascade:
/// reject non-food frames, read barcodes, and gather quick labels before any paid AI call
/// (ARCHITECTURE §6). Concrete impl uses the Vision framework; tests use `MockFoodRecognizer`.
public protocol FoodRecognizer: Sendable {
    /// Fast gate: is there food in this image at all?
    func isFood(_ imageData: Data) async -> Bool
    /// Top on-device labels (may be empty). Used to prefill manual entry on degradation.
    func classify(_ imageData: Data) async -> [FoodLabel]
    /// Detected barcode payload, if any — routes to OpenFoodFacts instead of the AI pipeline.
    func detectBarcode(_ imageData: Data) async -> String?
}

/// Deterministic recognizer for tests, previews, and UI smoke runs.
public struct MockFoodRecognizer: FoodRecognizer {
    public var foodResult: Bool
    public var labels: [FoodLabel]
    public var barcode: String?

    public init(foodResult: Bool = true,
                labels: [FoodLabel] = [FoodLabel(identifier: "food", confidence: 0.9)],
                barcode: String? = nil) {
        self.foodResult = foodResult
        self.labels = labels
        self.barcode = barcode
    }

    public func isFood(_ imageData: Data) async -> Bool { foodResult }
    public func classify(_ imageData: Data) async -> [FoodLabel] { labels }
    public func detectBarcode(_ imageData: Data) async -> String? { barcode }
}
