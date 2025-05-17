"use client"

import { useEffect } from "react"

interface ImagePreloaderProps {
  images: string[]
}

export function ImagePreloader({ images }: ImagePreloaderProps) {
  useEffect(() => {
    // Предварительная загрузка изображений
    images.forEach((src) => {
      if (src) {
        const img = new Image()
        img.src = src
      }
    })
  }, [images])

  // Этот компонент не рендерит ничего видимого
  return null
}
