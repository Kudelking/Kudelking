"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { OptimizedImage } from "@/components/optimized-image"

interface ImageGalleryProps {
  images: {
    src: string
    alt: string
    width?: number
    height?: number
  }[]
  className?: string
}

export function ImageGallery({ images, className = "" }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [validatedImages, setValidatedImages] = useState(images)

  // Проверяем и исправляем изображения при монтировании компонента
  useEffect(() => {
    // Создаем копию массива изображений для проверки
    const validImages = [...images]

    // Проверяем каждое изображение
    images.forEach((image, index) => {
      // Если путь к изображению пустой или undefined, заменяем его на placeholder
      if (!image.src) {
        validImages[index] = {
          ...image,
          src: `/placeholder.svg?height=${image.height || 400}&width=${image.width || 600}&query=${encodeURIComponent(image.alt)}`,
        }
      }

      // Если путь к изображению начинается с http:// или https://, заменяем его на локальное изображение
      if (
        image.src &&
        (image.src.startsWith("http://") || image.src.startsWith("https://") || image.src.startsWith("blob:"))
      ) {
        // Используем локальное изображение вместо внешнего URL
        if (image.src.includes("roman-plaster")) {
          validImages[index] = {
            ...image,
            src: "/images/services/roman-plaster/luxury-living-room.png",
          }
        }
      }
    })

    setValidatedImages(validImages)
  }, [images])

  const openModal = (index: number) => {
    setCurrentIndex(index)
    setIsModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = "auto"
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? validatedImages.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === validatedImages.length - 1 ? 0 : prevIndex + 1))
  }

  // Обработчик клавиш
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeModal()
    if (e.key === "ArrowLeft") goToPrevious()
    if (e.key === "ArrowRight") goToNext()
  }

  // Обработчик ошибок загрузки изображений
  const handleImageError = (index: number) => {
    const updatedImages = [...validatedImages]
    updatedImages[index] = {
      ...updatedImages[index],
      src: `/placeholder.svg?height=${updatedImages[index].height || 400}&width=${updatedImages[index].width || 600}&query=${encodeURIComponent(updatedImages[index].alt)}`,
    }
    setValidatedImages(updatedImages)
  }

  return (
    <>
      <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${className}`}>
        {validatedImages.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square rounded-lg overflow-hidden cursor-pointer"
            onClick={() => openModal(index)}
          >
            <OptimizedImage
              src={image.src}
              alt={image.alt}
              fill
              className="w-full h-full"
              objectFit="cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              fallbackSrc={`/placeholder.svg?height=${image.height || 400}&width=${image.width || 600}&query=${encodeURIComponent(image.alt)}`}
              priority={index < 4} // Приоритетная загрузка только для первых 4 изображений
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
            onClick={closeModal}
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous</span>
          </button>

          <div
            className="relative w-full max-w-4xl max-h-[80vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={validatedImages[currentIndex].src || "/placeholder.svg"}
                alt={validatedImages[currentIndex].alt}
                width={validatedImages[currentIndex].width || 1200}
                height={validatedImages[currentIndex].height || 800}
                className="object-contain mx-auto max-h-[80vh]"
                unoptimized={validatedImages[currentIndex].src.startsWith("http")}
                onError={() => handleImageError(currentIndex)}
              />
            </div>
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full bg-black/50 hover:bg-black/70"
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next</span>
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {currentIndex + 1} / {validatedImages.length}
          </div>
        </div>
      )}
    </>
  )
}
