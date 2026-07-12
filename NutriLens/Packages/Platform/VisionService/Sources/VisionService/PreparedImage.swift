import Foundation

/// The output of preparing a captured photo for analysis: compressed bytes plus the perceptual
/// hash used for cache lookups. Platform-neutral so it can flow through the domain layer.
public struct PreparedImage: Sendable, Equatable {
    public let jpegData: Data
    public let perceptualHashHex: String
    public let pixelWidth: Int
    public let pixelHeight: Int

    public init(jpegData: Data, perceptualHashHex: String,
                pixelWidth: Int, pixelHeight: Int) {
        self.jpegData = jpegData
        self.perceptualHashHex = perceptualHashHex
        self.pixelWidth = pixelWidth
        self.pixelHeight = pixelHeight
    }
}

/// Tunables for image preparation. Defaults balance recognition accuracy against OpenAI Vision
/// per-tile cost (ARCHITECTURE §6): 1024px max side, JPEG q=0.6.
public struct ImagePreparationConfig: Sendable {
    public let maxSide: Int
    public let jpegQuality: Double

    public init(maxSide: Int = 1024, jpegQuality: Double = 0.6) {
        self.maxSide = maxSide
        self.jpegQuality = jpegQuality
    }

    public static let `default` = ImagePreparationConfig()

    /// Target size for a dimension so the longest side becomes `maxSide`, preserving aspect ratio.
    public func scaledSize(width: Int, height: Int) -> (width: Int, height: Int) {
        let longest = max(width, height)
        guard longest > maxSide, longest > 0 else { return (width, height) }
        let ratio = Double(maxSide) / Double(longest)
        return (Int((Double(width) * ratio).rounded()),
                Int((Double(height) * ratio).rounded()))
    }
}
