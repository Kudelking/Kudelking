import Foundation

/// Average-hash (aHash) perceptual hashing. Pure and platform-neutral so it is fully unit-tested
/// without any image framework. Used to detect near-duplicate food photos and serve cached
/// analyses instead of paying for another AI call (ARCHITECTURE §11).
public enum PerceptualHash {

    /// Compute a 64-bit average hash from an 8×8 grayscale grid (row-major, 0…255).
    /// A bit is set when the pixel is at or above the grid's mean brightness.
    public static func aHash(grayscale8x8 pixels: [UInt8]) -> UInt64 {
        precondition(pixels.count == 64, "aHash expects exactly 64 grayscale samples")
        let mean = Double(pixels.reduce(0) { $0 + Int($1) }) / 64.0
        var hash: UInt64 = 0
        for (index, pixel) in pixels.enumerated() where Double(pixel) >= mean {
            hash |= (1 << UInt64(index))
        }
        return hash
    }

    /// Number of differing bits between two hashes (0…64).
    public static func hammingDistance(_ lhs: UInt64, _ rhs: UInt64) -> Int {
        (lhs ^ rhs).nonzeroBitCount
    }

    /// Two images are "the same" for caching when their hashes are within `threshold` bits.
    public static func areSimilar(_ lhs: UInt64, _ rhs: UInt64, threshold: Int = 5) -> Bool {
        hammingDistance(lhs, rhs) <= threshold
    }

    /// 16-character lowercase hex encoding, stable across processes (used as a cache key).
    public static func hexString(_ hash: UInt64) -> String {
        String(format: "%016llx", hash)
    }

    public static func fromHex(_ hex: String) -> UInt64? {
        UInt64(hex, radix: 16)
    }
}
