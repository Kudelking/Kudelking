import Testing
import Foundation
@testable import VisionService

@Suite("PerceptualHash")
struct PerceptualHashTests {

    // Left half dark, right half bright.
    private var patternA: [UInt8] {
        (0..<64).map { ($0 % 8) < 4 ? 0 : 255 }
    }
    // Inverse of A (bright left, dark right) → every bit flips.
    private var patternInverse: [UInt8] {
        (0..<64).map { ($0 % 8) < 4 ? 255 : 0 }
    }

    @Test("Identical grids hash equal, distance zero, similar")
    func identical() {
        let a = PerceptualHash.aHash(grayscale8x8: patternA)
        let b = PerceptualHash.aHash(grayscale8x8: patternA)
        #expect(a == b)
        #expect(PerceptualHash.hammingDistance(a, b) == 0)
        #expect(PerceptualHash.areSimilar(a, b, threshold: 0))
    }

    @Test("Inverted image differs in every bit and is not similar")
    func inverted() {
        let a = PerceptualHash.aHash(grayscale8x8: patternA)
        let b = PerceptualHash.aHash(grayscale8x8: patternInverse)
        #expect(PerceptualHash.hammingDistance(a, b) == 64)
        #expect(!PerceptualHash.areSimilar(a, b, threshold: 5))
    }

    @Test("A few flipped pixels stay within the similarity threshold")
    func nearDuplicate() {
        var noisy = patternA
        noisy[0] = 255; noisy[9] = 255; noisy[18] = 255   // flip 3 dark samples bright
        let a = PerceptualHash.aHash(grayscale8x8: patternA)
        let b = PerceptualHash.aHash(grayscale8x8: noisy)
        let distance = PerceptualHash.hammingDistance(a, b)
        #expect(distance > 0)
        #expect(distance <= 5)
        #expect(PerceptualHash.areSimilar(a, b))
    }

    @Test("Hamming distance is symmetric")
    func symmetric() {
        let a = PerceptualHash.aHash(grayscale8x8: patternA)
        let b = PerceptualHash.aHash(grayscale8x8: patternInverse)
        #expect(PerceptualHash.hammingDistance(a, b) == PerceptualHash.hammingDistance(b, a))
    }

    @Test("Hex encoding is 16 chars and round-trips")
    func hex() {
        let hash = PerceptualHash.aHash(grayscale8x8: patternA)
        let hex = PerceptualHash.hexString(hash)
        #expect(hex.count == 16)
        #expect(PerceptualHash.fromHex(hex) == hash)
    }
}

@Suite("ImagePreparationConfig")
struct ImagePreparationConfigTests {

    @Test("Scales the longest side down to maxSide, preserving aspect ratio")
    func scalesDown() {
        let config = ImagePreparationConfig(maxSide: 1024)
        let (w, h) = config.scaledSize(width: 4000, height: 3000)
        #expect(w == 1024)
        #expect(h == 768)     // 3000 * (1024/4000)
    }

    @Test("Leaves already-small images untouched")
    func noUpscale() {
        let config = ImagePreparationConfig(maxSide: 1024)
        let (w, h) = config.scaledSize(width: 800, height: 600)
        #expect(w == 800 && h == 600)
    }
}
