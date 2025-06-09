"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Copy, Check, ExternalLink } from "lucide-react"

const imageList = [
  {
    name: "Главная страница - Hero",
    currentPath: "/luxury-roman-plaster-bedroom.png",
    location: "app/page.tsx",
    line: "около строки 45",
  },
  {
    name: "Accent Walls - Главное фото",
    currentPath: "/images/services/accent-walls/geometric-modern.jpg",
    location: "app/services/accent-walls/page.tsx",
    line: "около строки 20",
  },
  {
    name: "Board & Batten - Главное фото",
    currentPath: "/elegant-board-and-batten.png",
    location: "app/services/board-and-batten/page.tsx",
    line: "около строки 25",
  },
  {
    name: "Roman Plaster - Главное фото",
    currentPath: "/luxury-roman-plaster-bedroom.png",
    location: "app/services/roman-plaster/page.tsx",
    line: "около строки 30",
  },
  {
    name: "Fireplace - Главное фото",
    currentPath: "/modern-fireplace-buildout.png",
    location: "app/services/fireplace-buildouts/page.tsx",
    line: "около строки 22",
  },
  {
    name: "Media Walls - Главное фото",
    currentPath: "/tv-media-wall.png",
    location: "app/services/media-walls/page.tsx",
    line: "около строки 18",
  },
]

export default function SimpleReplacePage() {
  const [newUrls, setNewUrls] = useState<{ [key: string]: string }>({})
  const [copied, setCopied] = useState<{ [key: string]: boolean }>({})

  const handleUrlChange = (index: number, url: string) => {
    setNewUrls((prev) => ({
      ...prev,
      [index]: url,
    }))
  }

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopied((prev) => ({
      ...prev,
      [index]: true,
    }))
    setTimeout(() => {
      setCopied((prev) => ({
        ...prev,
        [index]: false,
      }))
    }, 2000)
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Простая замена изображений</h1>
        <p className="text-muted-foreground">Загрузите изображения в любой бесплатный сервис и вставьте ссылки здесь</p>
      </div>

      {/* Инструкция */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>📋 Как заменить изображение:</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Шаг 1: Загрузите изображение</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>
                  •{" "}
                  <a
                    href="https://imgur.com"
                    target="_blank"
                    className="text-blue-600 hover:underline"
                    rel="noreferrer"
                  >
                    Imgur.com
                  </a>{" "}
                  (бесплатно)
                </li>
                <li>
                  •{" "}
                  <a
                    href="https://postimg.cc"
                    target="_blank"
                    className="text-blue-600 hover:underline"
                    rel="noreferrer"
                  >
                    PostImg.cc
                  </a>{" "}
                  (бесплатно)
                </li>
                <li>
                  •{" "}
                  <a
                    href="https://imgbb.com"
                    target="_blank"
                    className="text-blue-600 hover:underline"
                    rel="noreferrer"
                  >
                    ImgBB.com
                  </a>{" "}
                  (бесплатно)
                </li>
                <li>• Google Drive (публичная ссылка)</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Шаг 2: Скопируйте ссылку</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Вставьте ссылку в поле ниже</li>
                <li>• Нажмите "Копировать код"</li>
                <li>• Замените старый код в файле</li>
                <li>• Сохраните изменения</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Список изображений */}
      <div className="space-y-6">
        {imageList.map((image, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg">{image.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Текущее изображение */}
              <div>
                <Label className="text-sm font-medium">Текущее изображение:</Label>
                <div className="mt-2 aspect-video relative rounded-lg overflow-hidden bg-muted max-w-md">
                  <img
                    src={newUrls[index] || image.currentPath || "/placeholder.svg"}
                    alt={image.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      ;(e.target as HTMLImageElement).src = "/placeholder.svg"
                    }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-1 font-mono">{image.currentPath}</p>
              </div>

              {/* Новая ссылка */}
              <div>
                <Label htmlFor={`url-${index}`} className="text-sm font-medium">
                  Новая ссылка на изображение:
                </Label>
                <div className="flex gap-2 mt-2">
                  <Input
                    id={`url-${index}`}
                    placeholder="https://i.imgur.com/example.jpg"
                    value={newUrls[index] || ""}
                    onChange={(e) => handleUrlChange(index, e.target.value)}
                    className="flex-1"
                  />
                  <Button variant="outline" size="sm" onClick={() => window.open("https://imgur.com/upload", "_blank")}>
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Код для замены */}
              {newUrls[index] && (
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-green-600">✅ Код для замены:</Label>
                  <div className="bg-muted p-3 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Файл: {image.location}</span>
                      <span className="text-xs text-muted-foreground">{image.line}</span>
                    </div>
                    <div className="bg-background p-2 rounded border">
                      <div className="text-xs text-red-600 mb-1">Старый код:</div>
                      <code className="text-xs">src="{image.currentPath}"</code>

                      <div className="text-xs text-green-600 mt-2 mb-1">Новый код:</div>
                      <code className="text-xs break-all">src="{newUrls[index]}"</code>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      className="mt-2 w-full"
                      onClick={() => copyToClipboard(`src="${newUrls[index]}"`, index)}
                    >
                      {copied[index] ? (
                        <>
                          <Check className="h-4 w-4 mr-2" />
                          Скопировано!
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4 mr-2" />
                          Копировать новый код
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Дополнительная помощь */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>🆘 Нужна помощь?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-sm space-y-2">
            <p>
              <strong>Не можете найти файл?</strong> Используйте поиск в редакторе кода (Ctrl+F)
            </p>
            <p>
              <strong>Изображение не загружается?</strong> Проверьте, что ссылка публичная и заканчивается на .jpg, .png
              или .webp
            </p>
            <p>
              <strong>Нужно больше изображений?</strong> Добавьте их в этот список или создайте новые карточки
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
