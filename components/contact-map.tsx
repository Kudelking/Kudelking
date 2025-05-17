"use client"

import { useEffect, useRef } from "react"

interface ContactMapProps {
  address: string
  height?: string
  zoom?: number
}

export function ContactMap({ address, height = "400px", zoom = 14 }: ContactMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<google.maps.Map | null>(null)
  const markerRef = useRef<google.maps.Marker | null>(null)

  useEffect(() => {
    // Загружаем Google Maps API
    const loadGoogleMaps = () => {
      const script = document.createElement("script")
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`
      script.async = true
      script.defer = true
      script.onload = initMap
      document.head.appendChild(script)
    }

    // Инициализируем карту
    const initMap = () => {
      if (!mapRef.current || typeof google === "undefined") return

      // Геокодируем адрес
      const geocoder = new google.maps.Geocoder()
      geocoder.geocode({ address }, (results, status) => {
        if (status === "OK" && results && results[0]) {
          const location = results[0].geometry.location

          // Создаем карту
          const mapOptions: google.maps.MapOptions = {
            center: location,
            zoom,
            mapTypeControl: false,
            streetViewControl: false,
            fullscreenControl: false,
            styles: [
              {
                featureType: "poi",
                elementType: "labels",
                stylers: [{ visibility: "off" }],
              },
            ],
          }

          mapInstanceRef.current = new google.maps.Map(mapRef.current, mapOptions)

          // Добавляем маркер
          markerRef.current = new google.maps.Marker({
            position: location,
            map: mapInstanceRef.current,
            title: "Accent Walls Pro",
            animation: google.maps.Animation.DROP,
          })

          // Добавляем информационное окно
          const infoWindow = new google.maps.InfoWindow({
            content: `<div style="padding: 8px; max-width: 200px;">
              <h3 style="font-weight: bold; margin-bottom: 4px;">Accent Walls Pro</h3>
              <p style="margin: 0;">${address}</p>
            </div>`,
          })

          // Открываем информационное окно при клике на маркер
          markerRef.current.addListener("click", () => {
            infoWindow.open(mapInstanceRef.current, markerRef.current)
          })
        }
      })
    }

    // Если Google Maps API уже загружен, инициализируем карту
    if (typeof window.google !== "undefined" && window.google.maps) {
      initMap()
    } else {
      loadGoogleMaps()
    }

    // Очистка при размонтировании
    return () => {
      if (markerRef.current) {
        markerRef.current.setMap(null)
      }
    }
  }, [address, zoom])

  return (
    <div
      ref={mapRef}
      className="w-full rounded-lg overflow-hidden"
      style={{ height }}
      aria-label={`Map showing location of Accent Walls Pro at ${address}`}
    />
  )
}
