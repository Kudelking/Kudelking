"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeAlt?: string
  afterAlt?: string
  className?: string
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Before",
  afterAlt = "After",
  className,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [beforeImgSrc, setBeforeImgSrc] = useState(beforeImage)
  const [afterImgSrc, setAfterImgSrc] = useState(afterImage)
  const [isLoaded, setIsLoaded] = useState({ before: false, after: false })

  // Обработка ошибок загрузки изображений
  const handleBeforeImgError = () => {
    console.warn(`Before image failed to load: ${beforeImage}`)
    setBeforeImgSrc("/plain-living-room-wall.png")
  }

  const handleAfterImgError = () => {
    console.warn(`After image failed to load: ${afterImage}`)
    setAfterImgSrc("/accent-wall.png")
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsDragging(true)
    updateSliderPosition(e.clientX)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    if (e.touches[0]) {
      updateSliderPosition(e.touches[0].clientX)
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    updateSliderPosition(e.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !e.touches[0]) return
    updateSliderPosition(e.touches[0].clientX)
  }

  const updateSliderPosition = (clientX: number) => {
    if (!sliderRef.current) return

    const rect = sliderRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))

    setSliderPosition(percent)
  }

  // Автоматическая анимация при загрузке
  useEffect(() => {
    if (isLoaded.before && isLoaded.after) {
      // Анимация слайдера при загрузке
      const timeout = setTimeout(() => {
        setSliderPosition(25)
        setTimeout(() => {
          setSliderPosition(75)
          setTimeout(() => {
            setSliderPosition(50)
          }, 800)
        }, 800)
      }, 500)

      return () => clearTimeout(timeout)
    }
  }, [isLoaded])

  useEffect(() => {
    const handleMouseUpGlobal = () => {
      setIsDragging(false)
    }

    document.addEventListener("mouseup", handleMouseUpGlobal)
    document.addEventListener("touchend", handleMouseUpGlobal)

    return () => {
      document.removeEventListener("mouseup", handleMouseUpGlobal)
      document.removeEventListener("touchend", handleMouseUpGlobal)
    }
  }, [])

  return (
    <div
      ref={sliderRef}
      className={cn(
        "relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-lg cursor-col-resize select-none",
        isDragging && "cursor-grabbing",
        className,
      )}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Loading overlay */}
      {(!isLoaded.before || !isLoaded.after) && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center z-10">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Before Image (полное изображение на заднем плане) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={beforeImgSrc || "/placeholder.svg"}
          alt={beforeAlt}
          fill
          className="object-cover"
          unoptimized={beforeImgSrc.startsWith("http")}
          onError={handleBeforeImgError}
          onLoad={() => setIsLoaded((prev) => ({ ...prev, before: true }))}
          priority
        />
      </div>

      {/* After Image (обрезанное изображение на переднем плане) */}
      <div
        className="absolute inset-0 h-full overflow-hidden transition-all duration-300"
        style={{ width: `${sliderPosition}%` }}
      >
        <Image
          src={afterImgSrc || "/placeholder.svg"}
          alt={afterAlt}
          fill
          className="object-cover"
          unoptimized={afterImgSrc.startsWith("http")}
          onError={handleAfterImgError}
          onLoad={() => setIsLoaded((prev) => ({ ...prev, after: true }))}
          priority
        />
      </div>

      {/* Slider Line */}
      <div
        className={cn(
          "absolute top-0 bottom-0 w-1 bg-white cursor-col-resize transition-all duration-300",
          isDragging && "w-1.5",
        )}
        style={{ left: `calc(${sliderPosition}% - 0.5px)` }}
      >
        {/* Slider Handle */}
        <div
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center transition-all duration-300",
            (isDragging || isHovering) && "scale-110",
          )}
        >
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1.5 text-sm rounded-full font-medium">
        {beforeAlt}
      </div>
      <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1.5 text-sm rounded-full font-medium">
        {afterAlt}
      </div>
    </div>
  )
}
