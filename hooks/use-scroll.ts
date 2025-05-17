"use client"

import { useState, useEffect } from "react"

export function useScroll(threshold = 10) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold)
    }

    // Add event listener
    window.addEventListener("scroll", handleScroll)

    // Check initial scroll position
    handleScroll()

    // Clean up
    return () => window.removeEventListener("scroll", handleScroll)
  }, [threshold])

  return isScrolled
}
