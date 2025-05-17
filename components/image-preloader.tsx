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
        // Если путь к изображению начинается с http:// или https://, заменяем его на локальное изображение
        let imageSrc = src
        if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("blob:")) {
          // Используем локальное изображение вместо внешнего URL
          if (src.includes("roman-plaster")) {
            imageSrc = "/images/services/roman-plaster/luxury-living-room.png"
          } else {
            // Пропускаем внешние URL, которые не можем заменить
            return
          }
        }

        const img = new Image()
        img.src = imageSrc
      }
    })
  }, [images])

  // Этот компонент не рендерит ничего видимого
  return null
}
