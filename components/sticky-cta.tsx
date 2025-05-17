"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function StickyCta() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling 500px
      setIsVisible(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t z-40 py-3 px-4 md:py-4 transform transition-transform duration-300 ease-in-out">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex-1 text-center sm:text-left">
          <p className="text-sm font-medium text-gray-900">Ready to transform your space?</p>
          <p className="text-xs text-gray-600 hidden sm:block">Free consultation & quote</p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <Link href="tel:2404267900" className="flex-1 sm:flex-initial">
            <Button variant="outline" size="sm" className="w-full">
              <Phone className="h-4 w-4 mr-2" />
              Call Now
            </Button>
          </Link>
          <Link href="/contact" className="flex-1 sm:flex-initial">
            <Button size="sm" className="w-full">
              Get a Free Quote
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
