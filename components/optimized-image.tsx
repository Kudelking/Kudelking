"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

interface OptimizedImageProps {
  src: string
  alt: string
  fill?: boolean
  width?: number
  height?: number
  className?: string
  priority?: boolean
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"
  sizes?: string
  quality?: number
  fallbackSrc?: string
}

export function OptimizedImage({
  src,
  alt,
  fill = false,
  width,
  height,
  className,
  priority = false,
  objectFit = "cover",
  sizes,
  quality = 80,
  fallbackSrc,
}: OptimizedImageProps) {
  const [imageSrc, setImageSrc] = useState<string>(src)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  // Если путь начинается с http или https, используем unoptimized
  const isExternal = src.startsWith("http") || src.startsWith("https")

  // Сбросить состояние при изменении src
  useEffect(() => {
    setImageSrc(src)
    setError(false)
    setIsLoading(true)
  }, [src])

  // Обработка ошибки загрузки
  const handleError = () => {
    console.warn(`Image failed to load: ${src}`)
    setError(true)
    setIsLoading(false)

    // Сначала используем предоставленный fallbackSrc, если он есть
    if (fallbackSrc) {
      setImageSrc(fallbackSrc)
      return
    }

    // Затем проверяем, является ли это изображением Roman Plaster
    if (src.includes("roman-plaster")) {
      setImageSrc(
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kudelking_spacious_living_room_with_Roman_Plaster_accent_wall_d4cd77c5-8280-419f-88fb-d7d072386205_0-XQj2uA0B1VrryP5JYu61A7g0JqJlBS.png",
      )
      return
    }

    // В противном случае используем placeholder
    setImageSrc(`/placeholder.svg?height=${height || 400}&width=${width || 600}&query=${encodeURIComponent(alt)}`)
  }

  // Обработка успешной загрузки
  const handleLoad = () => {
    setIsLoading(false)
  }

  const objectFitClass =
    objectFit === "cover"
      ? "object-cover"
      : objectFit === "contain"
        ? "object-contain"
        : objectFit === "fill"
          ? "object-fill"
          : objectFit === "none"
            ? "object-none"
            : "object-scale-down"

  // Проверка на пустой src
  if (!src && !error) {
    return fill ? (
      <div className={`relative ${className || "w-full h-full"} bg-gray-200`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-gray-400">{alt || "Image"}</span>
        </div>
      </div>
    ) : (
      <div
        className={`relative ${className || ""} bg-gray-200 flex items-center justify-center`}
        style={{ width: width ? `${width}px` : "100%", height: height ? `${height}px` : "300px" }}
      >
        <span className="text-gray-400">{alt || "Image"}</span>
      </div>
    )
  }

  return fill ? (
    <div className={`relative ${className || "w-full h-full"}`}>
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={alt}
        fill
        className={`${objectFitClass} ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
        priority={priority}
        unoptimized={isExternal || error}
        onError={handleError}
        onLoad={handleLoad}
        sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
        quality={quality}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  ) : (
    <div
      className={`relative ${className || ""}`}
      style={{ width: width ? `${width}px` : "auto", height: height ? `${height}px` : "auto" }}
    >
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={alt}
        width={width || 600}
        height={height || 400}
        className={`${objectFitClass} ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
        priority={priority}
        unoptimized={isExternal || error}
        onError={handleError}
        onLoad={handleLoad}
        sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
        quality={quality}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  )
}
