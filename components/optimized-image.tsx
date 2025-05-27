"use client"

import Image from "next/image"
import { useState } from "react"

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
  quality = 85,
  fallbackSrc,
}: OptimizedImageProps) {
  const [imageSrc, setImageSrc] = useState<string>(src)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  const handleError = () => {
    console.warn(`Image failed to load: ${src}`)
    setError(true)
    setIsLoading(false)

    if (fallbackSrc && imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc)
      setError(false)
      setIsLoading(true)
      return
    }

    // Final fallback to placeholder
    setImageSrc(`/placeholder.svg?height=${height || 400}&width=${width || 600}&query=${encodeURIComponent(alt)}`)
  }

  const handleLoad = () => {
    setIsLoading(false)
    setError(false)
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

  if (fill) {
    return (
      <div className={`relative ${className || "w-full h-full"}`}>
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={alt}
          fill
          className={`${objectFitClass} ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
          priority={priority}
          onError={handleError}
          onLoad={handleLoad}
          sizes={sizes || "(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"}
          quality={quality}
        />
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
            <div className="w-6 h-6 md:w-8 md:h-8 border-2 md:border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={`relative ${className || ""}`}>
      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={alt}
        width={width || 600}
        height={height || 400}
        className={`${objectFitClass} ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
        priority={priority}
        onError={handleError}
        onLoad={handleLoad}
        sizes={sizes || "(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"}
        quality={quality}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
          <div className="w-6 h-6 md:w-8 md:h-8 border-2 md:border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  )
}
