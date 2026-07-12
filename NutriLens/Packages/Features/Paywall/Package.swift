// swift-tools-version: 6.0
import PackageDescription

let package = Package(
    name: "Paywall",
    platforms: [.iOS(.v17)],
    products: [
        .library(name: "Paywall", targets: ["Paywall"])
    ],
    dependencies: [
        .package(path: "../../Core/CoreModels"),
        .package(path: "../../Core/CoreUI")
    ],
    targets: [
        .target(
            name: "Paywall",
            dependencies: ["CoreModels", "CoreUI"]
        ),
        .testTarget(
            name: "PaywallTests",
            dependencies: ["Paywall", "CoreModels"]
        )
    ]
)
