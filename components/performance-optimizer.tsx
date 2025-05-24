"use client"

import { useEffect } from "react"

export function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalImages = () => {
      const criticalImages = [
        "/logo.png",
        "/wood-slat-living-room.png",
        "/modern-fireplace-buildout.png",
        "/tv-media-wall.png",
      ]

      criticalImages.forEach((src) => {
        const link = document.createElement("link")
        link.rel = "preload"
        link.as = "image"
        link.href = src
        document.head.appendChild(link)
      })
    }

    // Lazy load non-critical resources
    const lazyLoadResources = () => {
      if ("requestIdleCallback" in window) {
        requestIdleCallback(() => {
          preloadCriticalImages()
        })
      } else {
        setTimeout(preloadCriticalImages, 100)
      }
    }

    lazyLoadResources()

    // Service Worker registration for caching
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(console.error)
    }
  }, [])

  return null
}
