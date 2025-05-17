"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X, Maximize2, ZoomIn, ZoomOut } from "lucide-react"
import { OptimizedImage } from "@/components/optimized-image"
import { cn } from "@/lib/utils"

interface ImageGalleryProps {
  images: {
    src: string
    alt: string
    width?: number
    height?: number
  }[]
  className?: string
  columns?: 2 | 3 | 4
}

export function ImageGallery({ images, className = "", columns = 4 }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [validatedImages, setValidatedImages] = useState(images)
  const [isLoading, setIsLoading] = useState(true)
  const [zoomLevel, setZoomLevel] = useState(1)

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
    })

    setValidatedImages(validImages)
  }, [images])

  const openModal = (index: number) => {
    setCurrentIndex(index)
    setIsModalOpen(true)
    document.body.style.overflow = "hidden"
    setIsLoading(true)
    setZoomLevel(1)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = "auto"
    setZoomLevel(1)
  }

  const goToPrevious = () => {
    setIsLoading(true)
    setZoomLevel(1)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? validatedImages.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setIsLoading(true)
    setZoomLevel(1)
    setCurrentIndex((prevIndex) => (prevIndex === validatedImages.length - 1 ? 0 : prevIndex + 1))
  }

  const zoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 3))
  }

  const zoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.5))
  }

  // Обработчик клавиш
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeModal()
    if (e.key === "ArrowLeft") goToPrevious()
    if (e.key === "ArrowRight") goToNext()
    if (e.key === "+" || e.key === "=") zoomIn()
    if (e.key === "-") zoomOut()
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

  // Определяем количество колонок в сетке
  const getGridCols = () => {
    switch (columns) {
      case 2:
        return "grid-cols-1 sm:grid-cols-2"
      case 3:
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
      case 4:
      default:
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    }
  }

  return (
    <>
      <div className={cn(`grid ${getGridCols()} gap-4`, className)}>
        {validatedImages.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => openModal(index)}
          >
            <OptimizedImage
              src={image.src}
              alt={image.alt}
              fill
              className="w-full h-full transition-transform duration-500 group-hover:scale-105"
              objectFit="cover"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              fallbackSrc={`/placeholder.svg?height=${image.height || 400}&width=${image.width || 600}&query=${encodeURIComponent(image.alt)}`}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <Maximize2 className="h-8 w-8 text-white" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-50"
            onClick={(e) => {
              e.stopPropagation()
              closeModal()
            }}
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </button>

          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-50"
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous</span>
          </button>

          <div
            className="relative w-full max-w-5xl max-h-[85vh] flex items-center justify-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            <div
              className="relative w-full h-full transition-transform duration-300 overflow-auto"
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <Image
                src={validatedImages[currentIndex].src || "/placeholder.svg"}
                alt={validatedImages[currentIndex].alt}
                width={validatedImages[currentIndex].width || 1200}
                height={validatedImages[currentIndex].height || 800}
                className={cn(
                  "object-contain mx-auto max-h-[85vh] transition-opacity duration-300",
                  isLoading ? "opacity-0" : "opacity-100",
                )}
                unoptimized={validatedImages[currentIndex].src.startsWith("http")}
                onError={() => handleImageError(currentIndex)}
                onLoad={() => setIsLoading(false)}
              />
            </div>
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-50"
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next</span>
          </button>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-4 z-50">
            <div className="bg-black/70 text-white text-sm rounded-full px-4 py-2">
              {currentIndex + 1} / {validatedImages.length}
            </div>
            <div className="flex items-center gap-2">
              <button
                className="text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  zoomOut()
                }}
                disabled={zoomLevel <= 0.5}
              >
                <ZoomOut className="h-5 w-5" />
                <span className="sr-only">Zoom Out</span>
              </button>
              <div className="bg-black/70 text-white text-sm rounded-full px-3 py-1">
                {Math.round(zoomLevel * 100)}%
              </div>
              <button
                className="text-white p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  zoomIn()
                }}
                disabled={zoomLevel >= 3}
              >
                <ZoomIn className="h-5 w-5" />
                <span className="sr-only">Zoom In</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
