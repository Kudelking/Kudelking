"use client"

import { useState, useEffect } from "react"
import { Clock } from "lucide-react"

export function UrgencyTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  })

  useEffect(() => {
    // Check if we have a stored end time
    const storedEndTime = localStorage.getItem("promoEndTime")
    let endTime: number

    if (storedEndTime) {
      endTime = Number.parseInt(storedEndTime, 10)

      // If the stored end time has passed, set a new one for 24 hours from now
      if (endTime < Date.now()) {
        endTime = Date.now() + 24 * 60 * 60 * 1000
        localStorage.setItem("promoEndTime", endTime.toString())
      }
    } else {
      // Set end time to 24 hours from now
      endTime = Date.now() + 24 * 60 * 60 * 1000
      localStorage.setItem("promoEndTime", endTime.toString())
    }

    const timer = setInterval(() => {
      const now = Date.now()
      const difference = endTime - now

      if (difference <= 0) {
        clearInterval(timer)
        // Reset for another 24 hours
        const newEndTime = Date.now() + 24 * 60 * 60 * 1000
        localStorage.setItem("promoEndTime", newEndTime.toString())
        setTimeLeft({ hours: 23, minutes: 59, seconds: 59 })
      } else {
        const hours = Math.floor(difference / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ hours, minutes, seconds })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-primary/10 p-3 rounded-lg flex items-center justify-center gap-3">
      <Clock className="h-5 w-5 text-primary" />
      <div>
        <p className="text-sm font-medium">Limited Time Offer Ends In:</p>
        <div className="flex items-center gap-1 mt-1">
          <div className="bg-primary text-white text-xs font-mono px-2 py-1 rounded">
            {timeLeft.hours.toString().padStart(2, "0")}
          </div>
          <span className="text-xs">:</span>
          <div className="bg-primary text-white text-xs font-mono px-2 py-1 rounded">
            {timeLeft.minutes.toString().padStart(2, "0")}
          </div>
          <span className="text-xs">:</span>
          <div className="bg-primary text-white text-xs font-mono px-2 py-1 rounded">
            {timeLeft.seconds.toString().padStart(2, "0")}
          </div>
        </div>
      </div>
    </div>
  )
}
