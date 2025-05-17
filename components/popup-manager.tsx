"use client"

import { useEffect, useState } from "react"
import { ExitIntentPopup } from "@/components/exit-intent-popup"
import { SocialProofNotification } from "@/components/social-proof-notification"

export function PopupManager() {
  const [showExitIntent, setShowExitIntent] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && localStorage.getItem("hasSeenExitPopup") !== "true") {
        setShowExitIntent(true)
        localStorage.setItem("hasSeenExitPopup", "true")
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <>
      {/* Мы не включаем DiscountPopup здесь, так как он уже включен в layout.tsx */}
      {showExitIntent && <ExitIntentPopup onClose={() => setShowExitIntent(false)} />}
      <SocialProofNotification />
    </>
  )
}
