// swift-tools-version: 6.0
import PackageDescription

let package = Package(
    name: "Home",
    platforms: [.iOS(.v17)],
    products: [
        .library(name: "Home", targets: ["Home"])
    ],
    dependencies: [
        .package(path: "../../Core/CoreModels"),
        .package(path: "../../Core/CoreUI")
    ],
    targets: [
        .target(
            name: "Home",
            dependencies: ["CoreModels", "CoreUI"]
        ),
        .testTarget(
            name: "HomeTests",
            dependencies: ["Home", "CoreModels"]
        )
    ]
)
