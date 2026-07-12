import Foundation

/// Prepares a captured photo for analysis: downscale, JPEG-compress, and compute the perceptual
/// hash. Kept behind a protocol so the AI pipeline can be tested with a stub preparer.
public protocol ImagePreparing: Sendable {
    func prepare(_ imageData: Data) -> PreparedImage?
}

#if canImport(UIKit)
import UIKit

public struct ImagePreparer: ImagePreparing {
    private let config: ImagePreparationConfig

    public init(config: ImagePreparationConfig = .default) {
        self.config = config
    }

    public func prepare(_ imageData: Data) -> PreparedImage? {
        guard let image = UIImage(data: imageData) else { return nil }
        let resized = resize(image)
        guard let jpeg = resized.jpegData(compressionQuality: config.jpegQuality) else {
            return nil
        }
        let hash = perceptualHash(of: resized)
        let size = resized.size.scaledToPixels(scale: resized.scale)
        return PreparedImage(
            jpegData: jpeg,
            perceptualHashHex: PerceptualHash.hexString(hash),
            pixelWidth: size.width,
            pixelHeight: size.height
        )
    }

    private func resize(_ image: UIImage) -> UIImage {
        let px = image.size.scaledToPixels(scale: image.scale)
        let target = config.scaledSize(width: px.width, height: px.height)
        if target.width == px.width, target.height == px.height { return image }
        let size = CGSize(width: target.width, height: target.height)
        let format = UIGraphicsImageRendererFormat.default()
        format.scale = 1
        return UIGraphicsImageRenderer(size: size, format: format).image { _ in
            image.draw(in: CGRect(origin: .zero, size: size))
        }
    }

    /// Downsample to 8×8 grayscale and average-hash it.
    private func perceptualHash(of image: UIImage) -> UInt64 {
        let side = 8
        let size = CGSize(width: side, height: side)
        var pixels = [UInt8](repeating: 0, count: side * side)
        let colorSpace = CGColorSpaceCreateDeviceGray()
        guard let context = CGContext(
            data: &pixels, width: side, height: side, bitsPerComponent: 8,
            bytesPerRow: side, space: colorSpace,
            bitmapInfo: CGImageAlphaInfo.none.rawValue
        ), let cg = image.cgImage else {
            return 0
        }
        context.draw(cg, in: CGRect(origin: .zero, size: size))
        return PerceptualHash.aHash(grayscale8x8: pixels)
    }
}

private extension CGSize {
    func scaledToPixels(scale: CGFloat) -> (width: Int, height: Int) {
        (Int((width * scale).rounded()), Int((height * scale).rounded()))
    }
}
#endif
