// Отключаем компонент, чтобы он не показывался на сайте
// Для этого изменим функцию SocialProofNotification, чтобы она возвращала null

export function SocialProofNotification() {
  // Просто возвращаем null, чтобы компонент не рендерился
  return null

  // Оригинальный код закомментирован ниже, чтобы его можно было восстановить при необходимости
  /*
  "use client"

import { useState, useEffect } from "react"
import { X } from 'lucide-react'

// Sample data for notifications
const notifications = [
  { name: "Michael T.", location: "Bethesda, MD", action: "just requested a quote", time: "2 minutes ago" },
  { name: "Sarah L.", location: "Silver Spring, MD", action: "scheduled a consultation", time: "15 minutes ago" },
  { name: "David R.", location: "Arlington, VA", action: "completed a project", time: "1 hour ago" },
  { name: "Jennifer K.", location: "Washington DC", action: "left a 5-star review", time: "3 hours ago" },
  { name: "Robert M.", location: "Rockville, MD", action: "just requested a quote", time: "5 hours ago" },
]

export function SocialProofNotification() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentNotification, setCurrentNotification] = useState(0)

  useEffect(() => {
    // Show first notification after 5 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true)
    }, 5000)

    // Rotate through notifications
    const rotationTimer = setInterval(() => {
      setIsVisible(false)

      // Wait for fade out animation to complete
      setTimeout(() => {
        setCurrentNotification((prev) => (prev + 1) % notifications.length)
        setIsVisible(true)
      }, 500)
    }, 8000)

    return () => {
      clearTimeout(initialTimer)
      clearInterval(rotationTimer)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
  }

  const notification = notifications[currentNotification]

  return (
    <div
      className={`fixed bottom-20 left-4 z-40 max-w-xs bg-white rounded-lg shadow-lg border p-4 transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={handleClose}
        className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
        aria-label="Close notification"
      >
        <X className="h-4 w-4" />
      </button>
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
          {notification.name.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-medium">
            {notification.name} from {notification.location}
          </p>
          <p className="text-xs text-muted-foreground">{notification.action}</p>
          <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
        </div>
      </div>
    </div>
  )
  */
}
