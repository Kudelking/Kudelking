"use client"

import { useEffect } from "react"

interface ImagePreloaderProps {
  images: string[]
}

export function ImagePreloader({ images }: ImagePreloaderProps) {
  useEffect(() => {
    const preloadImages = async () => {
      try {
        const imagePromises = images.map((src) => {
          return new Promise<void>((resolve, reject) => {
            const img = new Image()

            // Убедимся, что URL начинается с / или https://
            if (src.startsWith("http:")) {
              src = src.replace("http:", "https:")
            }

            img.src = src
            img.onload = () => resolve()
            img.onerror = () => {
              console.warn(`Failed to preload image: ${src}`)
              resolve() // Resolve anyway to not block other images
            }
          })
        })

        await Promise.all(imagePromises)
      } catch (error) {
        console.error("Error preloading images:", error)
      }
    }

    preloadImages()
  }, [images])

  return null
}
