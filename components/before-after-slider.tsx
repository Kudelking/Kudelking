"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeAlt?: string
  afterAlt?: string
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = "Before",
  afterAlt = "After",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  const [beforeImgSrc, setBeforeImgSrc] = useState(beforeImage)
  const [afterImgSrc, setAfterImgSrc] = useState(afterImage)

  // Обработка ошибок загрузки изображений
  const handleBeforeImgError = () => {
    console.warn(`Before image failed to load: ${beforeImage}`)
    setBeforeImgSrc("/plain-living-room-wall.png")
  }

  const handleAfterImgError = () => {
    console.warn(`After image failed to load: ${afterImage}`)
    setAfterImgSrc("/accent-wall.png")
  }

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging && e.type !== "touchmove") return

    if (!sliderRef.current) return

    const rect = sliderRef.current.getBoundingClientRect()

    // Get clientX based on whether it's a mouse or touch event
    const clientX = "touches" in e ? e.touches[0].clientX : e.clientX

    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100))

    setSliderPosition(percent)
  }

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
      className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-lg cursor-col-resize select-none"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
    >
      {/* Before Image (полное изображение на заднем плане) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={beforeImgSrc || "/placeholder.svg"}
          alt={beforeAlt}
          fill
          className="object-cover"
          unoptimized={beforeImgSrc.startsWith("http")}
          onError={handleBeforeImgError}
          priority
        />
      </div>

      {/* After Image (обрезанное изображение на переднем плане) */}
      <div className="absolute inset-0 h-full overflow-hidden" style={{ width: `${sliderPosition}%` }}>
        <Image
          src={afterImgSrc || "/placeholder.svg"}
          alt={afterAlt}
          fill
          className="object-cover"
          unoptimized={afterImgSrc.startsWith("http")}
          onError={handleAfterImgError}
          priority
        />
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize"
        style={{ left: `calc(${sliderPosition}% - 0.5px)` }}
      >
        {/* Slider Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
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
      <div className="absolute bottom-4 left-4 bg-black/70 text-white px-2 py-1 text-sm rounded">Before</div>
      <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 text-sm rounded">After</div>
    </div>
  )
}
