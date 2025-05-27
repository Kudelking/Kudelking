"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ImageUploader } from "@/components/image-uploader"
import { Save } from "lucide-react"

interface ServiceImage {
  id: string
  title: string
  currentImage: string
  category: string
}

const serviceImages: ServiceImage[] = [
  {
    id: "accent-walls-hero",
    title: "Акцентные стены - Главное изображение",
    currentImage: "/images/services/accent-walls/geometric-modern.jpg",
    category: "accent-walls",
  },
  {
    id: "board-batten-hero",
    title: "Board & Batten - Главное изображение",
    currentImage: "/images/services/board-batten/elegant-dining-room.jpg",
    category: "board-batten",
  },
  {
    id: "roman-plaster-hero",
    title: "Римская штукатурка - Главное изображение",
    currentImage: "/images/services/roman-plaster/luxury-bedroom.jpg",
    category: "roman-plaster",
  },
  {
    id: "limewash-hero",
    title: "Лаймвош - Главное изображение",
    currentImage: "/images/services/limewash/mediterranean-living-room.jpg",
    category: "limewash",
  },
  {
    id: "fireplace-hero",
    title: "Камины - Главное изображение",
    currentImage: "/images/services/fireplace/modern-stone-fireplace.jpg",
    category: "fireplace",
  },
  {
    id: "media-walls-hero",
    title: "Медиа стены - Главное изображение",
    currentImage: "/images/services/media-walls/floating-tv-wall.jpg",
    category: "media-walls",
  },
]

export default function AdminServicesPage() {
  const [uploadedImages, setUploadedImages] = useState<{ [key: string]: string }>({})
  const [savedImages, setSavedImages] = useState<{ [key: string]: string }>({})

  useEffect(() => {
    const saved = localStorage.getItem("service-images")
    if (saved) {
      setSavedImages(JSON.parse(saved))
    }
  }, [])

  const handleImageUpload = (serviceId: string, file: File, previewUrl: string) => {
    setUploadedImages((prev) => ({
      ...prev,
      [serviceId]: previewUrl,
    }))
  }

  const handleSaveImages = () => {
    const newSavedImages = { ...savedImages, ...uploadedImages }
    setSavedImages(newSavedImages)
    localStorage.setItem("service-images", JSON.stringify(newSavedImages))
    setUploadedImages({})
    alert("Изображения сохранены!")
  }

  const getCurrentImage = (serviceId: string) => {
    return (
      uploadedImages[serviceId] || savedImages[serviceId] || serviceImages.find((s) => s.id === serviceId)?.currentImage
    )
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Управление изображениями сервисов</h1>
        <p className="text-muted-foreground">Замените изображения для страниц сервисов</p>
      </div>

      <div className="mb-6">
        <Button onClick={handleSaveImages} disabled={Object.keys(uploadedImages).length === 0} size="lg">
          <Save className="h-4 w-4 mr-2" />
          Сохранить все изменения ({Object.keys(uploadedImages).length})
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {serviceImages.map((service) => (
          <Card key={service.id}>
            <CardHeader>
              <CardTitle className="text-lg">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="aspect-video relative border rounded-lg overflow-hidden">
                  <img
                    src={getCurrentImage(service.id) || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <ImageUploader
                  currentImage={getCurrentImage(service.id)}
                  onImageChange={(file, previewUrl) => handleImageUpload(service.id, file, previewUrl)}
                  title="Заменить изображение"
                  description="Загрузите новое изображение для этого сервиса"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 p-4 bg-muted rounded-lg">
        <h3 className="font-semibold mb-2">Инструкции:</h3>
        <ul className="text-sm text-muted-foreground space-y-1">
          <li>• Загружайте изображения в формате JPG, PNG или WebP</li>
          <li>• Рекомендуемый размер: 1200x800 пикселей</li>
          <li>• Максимальный размер файла: 5MB</li>
          <li>• Изображения автоматически оптимизируются для веба</li>
          <li>• Нажмите "Сохранить все изменения" чтобы применить новые изображения</li>
        </ul>
      </div>
    </div>
  )
}
