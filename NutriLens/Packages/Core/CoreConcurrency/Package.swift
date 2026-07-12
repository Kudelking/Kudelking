// swift-tools-version: 6.0
import PackageDescription

let package = Package(
    name: "CoreConcurrency",
    platforms: [.iOS(.v17), .watchOS(.v10), .macOS(.v14)],
    products: [.library(name: "CoreConcurrency", targets: ["CoreConcurrency"])],
    targets: [
        .target(name: "CoreConcurrency"),
        .testTarget(name: "CoreConcurrencyTests", dependencies: ["CoreConcurrency"])
    ]
)
