"use client"

import type React from "react"

import { useState } from "react"
import { Phone, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CallBackWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setIsOpen(false)
    }, 3000)
  }

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <Button
          size="lg"
          className="rounded-full shadow-lg flex items-center gap-2 group"
          onClick={() => setIsOpen(true)}
        >
          <div className="relative">
            <Phone className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 h-2 w-2 bg-green-500 rounded-full animate-pulse"></span>
          </div>
          <span className="transition-all max-w-0 group-hover:max-w-xs overflow-hidden whitespace-nowrap duration-500">
            Call Us Back
          </span>
        </Button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/30 p-4">
          <div className="bg-background rounded-lg shadow-lg w-full max-w-md relative animate-in slide-in-from-bottom-10 duration-300">
            <Button variant="ghost" size="icon" className="absolute right-2 top-2" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>

            <div className="p-6">
              {isSubmitted ? (
                <div className="text-center py-6">
                  <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">We'll Call You Soon!</h3>
                  <p className="text-muted-foreground">We'll be calling you shortly. Please keep your phone handy!</p>
                </div>
              ) : (
                <>
                  <div className="text-center mb-6">
                    <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Request a Call Back</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      We'll call you within the next 30 minutes during business hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Your Phone Number</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(___) ___-____"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Requesting..." : "Call Me Back"}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
