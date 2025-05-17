"use client"

import { useEffect } from "react"

export function PerformanceMetrics() {
  useEffect(() => {
    // Отслеживание метрик Web Vitals
    if (typeof window !== "undefined" && "performance" in window) {
      // Импортируем web-vitals только на клиенте
      import("web-vitals").then(({ getCLS, getFID, getLCP, getFCP, getTTFB }) => {
        getCLS(sendToAnalytics)
        getFID(sendToAnalytics)
        getLCP(sendToAnalytics)
        getFCP(sendToAnalytics)
        getTTFB(sendToAnalytics)
      })
    }
  }, [])

  const sendToAnalytics = ({ name, delta, value, id }: { name: string; delta: number; value: number; id: string }) => {
    // Здесь можно отправить данные в аналитику
    console.log({ name, delta, value, id })

    // Пример отправки в Google Analytics
    if (typeof window !== "undefined" && "gtag" in window) {
      // @ts-ignore
      window.gtag("event", name, {
        event_category: "Web Vitals",
        event_label: id,
        value: Math.round(name === "CLS" ? delta * 1000 : delta),
        non_interaction: true,
      })
    }
  }

  return null // Этот компонент не рендерит UI
}
