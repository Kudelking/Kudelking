"use client"

import { SimpleImageReplacer } from "@/components/simple-image-replacer"

const mainImages = [
  {
    title: "Главная страница - Hero изображение",
    path: "/luxury-roman-plaster-bedroom.png",
    current: "/luxury-roman-plaster-bedroom.png",
  },
  {
    title: "Accent Walls - Главное изображение",
    path: "/images/services/accent-walls/geometric-modern.jpg",
    current: "/images/services/accent-walls/geometric-modern.jpg",
  },
  {
    title: "Board & Batten - Главное изображение",
    path: "/elegant-board-and-batten.png",
    current: "/elegant-board-and-batten.png",
  },
  {
    title: "Roman Plaster - Главное изображение",
    path: "/luxury-roman-plaster-bedroom.png",
    current: "/luxury-roman-plaster-bedroom.png",
  },
  {
    title: "Fireplace - Главное изображение",
    path: "/modern-fireplace-buildout.png",
    current: "/modern-fireplace-buildout.png",
  },
  {
    title: "Media Walls - Главное изображение",
    path: "/tv-media-wall.png",
    current: "/tv-media-wall.png",
  },
]

export default function UploadImagesPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Загрузка новых изображений</h1>
        <p className="text-muted-foreground">Загрузите новые изображения и получите URL для замены в коде</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mainImages.map((image, index) => (
          <SimpleImageReplacer key={index} title={image.title} currentImage={image.current} imagePath={image.path} />
        ))}
      </div>

      <div className="mt-8 p-6 bg-muted rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Как использовать:</h2>
        <ol className="list-decimal list-inside space-y-2 text-sm">
          <li>Выберите изображение для загрузки</li>
          <li>Дождитесь завершения загрузки</li>
          <li>Скопируйте новый URL изображения</li>
          <li>Замените старый путь в коде на новый URL</li>
          <li>Изображение будет отображаться на сайте</li>
        </ol>
      </div>
    </div>
  )
}
