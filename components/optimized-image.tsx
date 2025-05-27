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
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"
  fallbackSrc?: string
  sizes?: string
  priority?: boolean
}

export function OptimizedImage({
  src,
  alt,
  fill = false,
  width,
  height,
  className = "",
  objectFit = "cover",
  fallbackSrc,
  sizes,
  priority = false,
}: OptimizedImageProps) {
  const [imageSrc, setImageSrc] = useState(src)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    setHasError(true)
    setIsLoading(false)
    if (fallbackSrc && imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc)
      setHasError(false)
      setIsLoading(true)
    }
  }

  const handleLoad = () => {
    setIsLoading(false)
    setHasError(false)
  }

  const imageProps = {
    src: imageSrc,
    alt,
    onError: handleError,
    onLoad: handleLoad,
    className: `${className} transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`,
    style: { objectFit },
    sizes,
    priority,
  }

  return (
    <div className="relative w-full h-full bg-muted">
      {/* Loading placeholder */}
      {isLoading && (
        <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Error state */}
      {hasError && !fallbackSrc && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <div className="text-center text-muted-foreground p-4">
            <div className="w-12 h-12 mx-auto mb-2 opacity-50">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
              </svg>
            </div>
            <p className="text-xs">Изображение недоступно</p>
          </div>
        </div>
      )}

      {/* Actual image */}
      {fill ? <Image {...imageProps} fill /> : <Image {...imageProps} width={width || 600} height={height || 400} />}
    </div>
  )
}
