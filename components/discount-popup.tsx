"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Добавляем глобальную переменную для отслеживания состояния попапа
let popupShownGlobally = false

export function DiscountPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    // Проверяем, был ли попап уже показан в этой сессии
    const hasSeenPopup = localStorage.getItem("hasSeenPopup") === "true"

    // Проверяем глобальную переменную, чтобы избежать дублирования
    if (!hasSeenPopup && !popupShownGlobally) {
      // Устанавливаем глобальный флаг
      popupShownGlobally = true

      const handleMouseLeave = (e: MouseEvent) => {
        // Показываем попап только когда мышь покидает верхнюю часть страницы
        if (e.clientY <= 0) {
          setIsVisible(true)
        }
      }

      document.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        document.removeEventListener("mouseleave", handleMouseLeave)
        // Сбрасываем флаг при размонтировании компонента
        popupShownGlobally = false
      }
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem("hasSeenPopup", "true")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    // Валидация email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address")
      return
    }

    // Here you would typically send the email to your CRM/marketing system
    console.log("Email submitted:", email)
    setIsSubmitted(true)
    localStorage.setItem("hasSeenPopup", "true")

    // Close popup after 3 seconds
    setTimeout(() => {
      setIsVisible(false)
    }, 3000)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md relative">
        <button
          onClick={handleClose}
          className="absolute right-2 top-2 text-gray-500 hover:text-gray-800 p-1"
          aria-label="Close popup"
        >
          <X className="h-5 w-5" />
        </button>

        <CardHeader className="pb-2 pt-6">
          <CardTitle className="text-center text-xl sm:text-2xl">
            {isSubmitted ? "Thank You!" : "Wait! Don't Miss Out"}
          </CardTitle>
        </CardHeader>

        <CardContent>
          {isSubmitted ? (
            <div className="text-center py-6">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
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
                  className="h-6 w-6 text-primary"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <p className="text-muted-foreground mb-2">Your discount code has been sent to your email.</p>
              <p className="font-medium text-lg">WELCOME10</p>
            </div>
          ) : (
            <>
              <p className="text-muted-foreground text-center mb-6">
                Subscribe to our newsletter and receive a 10% discount on your first accent wall project!
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-invalid={error ? "true" : "false"}
                  />
                  {error && <p className="text-sm text-red-500">{error}</p>}
                </div>
                <Button type="submit" className="w-full">
                  Get My Discount
                </Button>
              </form>
              <p className="text-xs text-muted-foreground text-center mt-4">
                By subscribing, you agree to receive marketing emails. You can unsubscribe at any time.
              </p>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
