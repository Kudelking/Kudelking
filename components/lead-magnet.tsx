"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Check } from "lucide-react"

export function LeadMagnet() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your CRM/marketing system
    console.log("Lead magnet requested:", email)
    setIsSubmitted(true)
  }

  return (
    <Card className="overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-48 md:h-full">
          <Image
            src="/images/lead-magnet-cover.png"
            alt="2025 Accent Wall Design Guide"
            fill
            className="object-cover"
          />
        </div>
        <CardContent className="p-6">
          {isSubmitted ? (
            <div className="h-full flex flex-col items-center justify-center text-center">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Thank You!</h3>
              <p className="text-muted-foreground mb-4">Your design guide has been sent to your email.</p>
              <p className="text-sm">Check your inbox (and spam folder) for your free guide.</p>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-bold mb-2">2025 Accent Wall Design Guide</h3>
              <p className="text-muted-foreground mb-4">
                Get our free 15-page guide with the latest trends, color palettes, and design inspiration.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Top 10 accent wall trends for 2025</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Designer color palettes</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Before & after transformations</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Expert design tips</span>
                </li>
              </ul>
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  type="email"
                  placeholder="Your email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button type="submit" className="w-full">
                  <Download className="h-4 w-4 mr-2" />
                  Download Free Guide
                </Button>
              </form>
            </>
          )}
        </CardContent>
      </div>
    </Card>
  )
}
