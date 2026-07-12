// swift-tools-version: 6.0
import PackageDescription

let package = Package(
    name: "Authentication",
    platforms: [.iOS(.v17)],
    products: [
        .library(name: "Authentication", targets: ["Authentication"])
    ],
    dependencies: [
        .package(path: "../../Core/CoreModels"),
        .package(path: "../../Core/CoreUI")
    ],
    targets: [
        .target(
            name: "Authentication",
            dependencies: ["CoreModels", "CoreUI"]
        ),
        .testTarget(
            name: "AuthenticationTests",
            dependencies: ["Authentication"]
        )
    ]
)
