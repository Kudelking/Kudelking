"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface PageTransitionProps {
  children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [displayChildren, setDisplayChildren] = useState(children)

  useEffect(() => {
    // Если путь изменился, начинаем переход
    setIsTransitioning(true)

    // Устанавливаем таймер для обновления содержимого после анимации выхода
    const timeout = setTimeout(() => {
      setDisplayChildren(children)
      setIsTransitioning(false)
    }, 300) // Должно соответствовать длительности анимации выхода

    return () => clearTimeout(timeout)
  }, [pathname, children])

  return (
    <div className={cn("transition-opacity duration-300 ease-in-out", isTransitioning ? "opacity-0" : "opacity-100")}>
      {displayChildren}
    </div>
  )
}
