"use client"

import Image from "next/image"
import { useState } from "react"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
  sizes?: string
  quality?: number
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  fill = false,
  sizes,
  quality = 85,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Convert to WebP if not already
  const optimizedSrc = src.includes(".webp") ? src : src.replace(/\.(jpg|jpeg|png)$/i, ".webp")

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={hasError ? src : optimizedSrc} // Fallback to original if WebP fails
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        sizes={sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
        quality={quality}
        priority={priority}
        className={cn("transition-all duration-700 ease-in-out", isLoading ? "scale-105 blur-sm" : "scale-100 blur-0")}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setHasError(true)
          setIsLoading(false)
        }}
        {...props}
      />
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />
      )}
    </div>
  )
}
