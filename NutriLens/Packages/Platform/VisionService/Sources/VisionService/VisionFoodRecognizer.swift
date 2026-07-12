import Foundation
import CoreModels

#if canImport(Vision) && canImport(CoreGraphics) && canImport(ImageIO)
import Vision
import CoreGraphics
import ImageIO

/// Production on-device recognizer using Apple's Vision framework. Runs entirely on-device (free,
/// private) and forms the first stage of the cost cascade.
public struct VisionFoodRecognizer: FoodRecognizer {
    private let foodConfidenceThreshold: Float
    // Coarse keywords that indicate the frame contains food, matched against classifier ids.
    private let foodKeywords = ["food", "dish", "meal", "fruit", "vegetable", "produce",
                                "bread", "meat", "dessert", "beverage", "snack", "plate"]

    public init(foodConfidenceThreshold: Float = 0.3) {
        self.foodConfidenceThreshold = foodConfidenceThreshold
    }

    public func isFood(_ imageData: Data) async -> Bool {
        let labels = await classify(imageData)
        return labels.contains { label in
            foodKeywords.contains { label.identifier.lowercased().contains($0) }
        }
    }

    public func classify(_ imageData: Data) async -> [FoodLabel] {
        guard let cgImage = Self.cgImage(from: imageData) else { return [] }
        let request = VNClassifyImageRequest()
        let handler = VNImageRequestHandler(cgImage: cgImage, orientation: .up)
        do {
            try handler.perform([request])
            let observations = (request.results ?? [])
                .filter { $0.confidence >= foodConfidenceThreshold }
                .prefix(10)
            return observations.map { FoodLabel(identifier: $0.identifier,
                                                confidence: Double($0.confidence)) }
        } catch {
            return []
        }
    }

    public func detectBarcode(_ imageData: Data) async -> String? {
        guard let cgImage = Self.cgImage(from: imageData) else { return nil }
        let request = VNDetectBarcodesRequest()
        let handler = VNImageRequestHandler(cgImage: cgImage, orientation: .up)
        do {
            try handler.perform([request])
            return (request.results ?? [])
                .compactMap { $0.payloadStringValue }
                .first
        } catch {
            return nil
        }
    }

    private static func cgImage(from data: Data) -> CGImage? {
        guard let source = CGImageSourceCreateWithData(data as CFData, nil) else { return nil }
        return CGImageSourceCreateImageAtIndex(source, 0, nil)
    }
}
#endif
