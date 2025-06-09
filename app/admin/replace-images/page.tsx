"use client"

import { RealImageUploader } from "@/components/real-image-uploader"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const serviceImages = [
  {
    title: "Accent Walls - Main Hero",
    path: "/images/services/accent-walls/geometric-modern.jpg",
    category: "Accent Walls",
  },
  {
    title: "Board & Batten - Main Hero",
    path: "/images/services/board-batten/elegant-dining-room.jpg",
    category: "Board & Batten",
  },
  {
    title: "Roman Plaster - Main Hero",
    path: "/images/services/roman-plaster/luxury-bedroom.jpg",
    category: "Roman Plaster",
  },
  {
    title: "Limewash - Main Hero",
    path: "/images/services/limewash/mediterranean-living-room.jpg",
    category: "Limewash",
  },
  {
    title: "Fireplace - Main Hero",
    path: "/images/services/fireplace/modern-stone-fireplace.jpg",
    category: "Fireplaces",
  },
  {
    title: "Media Walls - Main Hero",
    path: "/images/services/media-walls/floating-tv-wall.jpg",
    category: "Media Walls",
  },
  {
    title: "Decorative Ceilings - Main Hero",
    path: "/images/services/ceilings/coffered-ceiling.jpg",
    category: "Ceilings",
  },
  {
    title: "Wallpaper - Main Hero",
    path: "/images/services/wallpaper/luxury-feature-wall.jpg",
    category: "Wallpaper",
  },
  {
    title: "Brick Walls - Main Hero",
    path: "/images/services/brick/industrial-loft.jpg",
    category: "Brick Walls",
  },
  {
    title: "Custom Projects - Main Hero",
    path: "/images/services/custom/restaurant-feature-wall.jpg",
    category: "Custom Projects",
  },
]

export default function ReplaceImagesPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Замена изображений сервисов</h1>
        <p className="text-muted-foreground">
          Загрузите новые изображения для страниц сервисов. Изменения применятся сразу на сайте.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceImages.map((image) => (
          <RealImageUploader
            key={image.path}
            currentImage={image.path}
            imagePath={image.path}
            title={image.title}
            onImageUploaded={(newPath) => {
              console.log(`Image uploaded: ${newPath}`)
            }}
          />
        ))}
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Инструкции</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>• Выберите изображение с вашего компьютера</p>
            <p>• Изображение автоматически загрузится на сервер</p>
            <p>• Страница обновится, чтобы показать новое изображение</p>
            <p>• Рекомендуемый размер: 1200x800 пикселей</p>
            <p>• Поддерживаемые форматы: JPG, PNG, WebP</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
