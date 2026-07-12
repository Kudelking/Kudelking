// swift-tools-version: 6.0
import PackageDescription

let package = Package(
    name: "Progress",
    platforms: [.iOS(.v17)],
    products: [
        .library(name: "Progress", targets: ["Progress"])
    ],
    dependencies: [
        .package(path: "../../Core/CoreModels"),
        .package(path: "../../Core/CoreUI")
    ],
    targets: [
        .target(
            name: "Progress",
            dependencies: ["CoreModels", "CoreUI"]
        ),
        .testTarget(
            name: "ProgressTests",
            dependencies: ["Progress", "CoreModels"]
        )
    ]
)
