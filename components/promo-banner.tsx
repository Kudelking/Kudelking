"use client"

import { useState } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-primary text-primary-foreground py-2 px-4 text-center relative">
      <div className="container flex items-center justify-center gap-2 text-sm">
        <span className="font-medium">Spring Special:</span>
        <span>15% off all accent wall installations until May 31st!</span>
        <Button size="sm" variant="secondary" className="ml-2" asChild>
          <Link href="#quote">Get Quote</Link>
        </Button>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-primary-foreground/80 hover:text-primary-foreground"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
      </div>
    </div>
  )
}
