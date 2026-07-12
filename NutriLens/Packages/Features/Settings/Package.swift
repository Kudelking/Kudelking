// swift-tools-version: 6.0
import PackageDescription

let package = Package(
    name: "Settings",
    platforms: [.iOS(.v17)],
    products: [
        .library(name: "Settings", targets: ["Settings"])
    ],
    dependencies: [
        .package(path: "../../Core/CoreModels"),
        .package(path: "../../Core/CoreUI")
    ],
    targets: [
        .target(
            name: "Settings",
            dependencies: ["CoreModels", "CoreUI"]
        ),
        .testTarget(
            name: "SettingsTests",
            dependencies: ["Settings", "CoreModels"]
        )
    ]
)
