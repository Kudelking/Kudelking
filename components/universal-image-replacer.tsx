"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Upload, Save, RefreshCw, Download, Copy, Check, X, Eye, Grid, List } from "lucide-react"

interface ImageData {
  id: string
  originalPath: string
  currentUrl: string
  category: string
  description: string
  size?: string
  lastModified?: string
}

// Сканируем ВСЕ изображения на сайте
const scanAllSiteImages = (): ImageData[] => {
  const images: ImageData[] = []

  // Главная страница
  images.push(
    {
      id: "hero-main",
      originalPath: "/placeholder.svg?key=hero",
      currentUrl: "/placeholder.svg?key=hero",
      category: "Главная",
      description: "Главный баннер",
    },
    {
      id: "hero-wood",
      originalPath: "/modern-wood-slat-wall.png",
      currentUrl: "/modern-wood-slat-wall.png",
      category: "Главная",
      description: "Деревянные рейки",
    },
    {
      id: "hero-board",
      originalPath: "/elegant-board-and-batten.png",
      currentUrl: "/elegant-board-and-batten.png",
      category: "Главная",
      description: "Board & Batten",
    },
    {
      id: "hero-plaster",
      originalPath: "/luxury-roman-plaster-bedroom.png",
      currentUrl: "/luxury-roman-plaster-bedroom.png",
      category: "Главная",
      description: "Римская штукатурка",
    },
    {
      id: "hero-media",
      originalPath: "/custom-media-wall.png",
      currentUrl: "/custom-media-wall.png",
      category: "Главная",
      description: "Медиа стена",
    },
  )

  // Портфолио
  images.push(
    {
      id: "portfolio-1",
      originalPath: "/images/portfolio/project1.png",
      currentUrl: "/images/portfolio/project1.png",
      category: "Портфолио",
      description: "Проект 1",
    },
    {
      id: "portfolio-2",
      originalPath: "/images/portfolio/project2.png",
      currentUrl: "/images/portfolio/project2.png",
      category: "Портфолио",
      description: "Проект 2",
    },
    {
      id: "portfolio-3",
      originalPath: "/images/portfolio/project3.png",
      currentUrl: "/images/portfolio/project3.png",
      category: "Портфолио",
      description: "Проект 3",
    },
    {
      id: "portfolio-floating-tv",
      originalPath: "/floating-tv-media-wall.png",
      currentUrl: "/floating-tv-media-wall.png",
      category: "Портфолио",
      description: "Парящая ТВ стена",
    },
    {
      id: "portfolio-dining",
      originalPath: "/white-board-and-batten-dining-room.png",
      currentUrl: "/white-board-and-batten-dining-room.png",
      category: "Портфолио",
      description: "Столовая",
    },
  )

  // Услуги - Акцентные стены
  images.push(
    {
      id: "accent-hero",
      originalPath: "/images/services/accent-walls/geometric-modern.jpg",
      currentUrl: "/images/services/accent-walls/geometric-modern.jpg",
      category: "Услуги/Акцентные стены",
      description: "Главная",
    },
    {
      id: "accent-wood",
      originalPath: "/images/services/accent-walls/wood-slat.png",
      currentUrl: "/images/services/accent-walls/wood-slat.png",
      category: "Услуги/Акцентные стены",
      description: "Деревянные рейки",
    },
    {
      id: "accent-geometric",
      originalPath: "/images/services/accent-walls/geometric.png",
      currentUrl: "/images/services/accent-walls/geometric.png",
      category: "Услуги/Акцентные стены",
      description: "Геометрия",
    },
  )

  // Услуги - Board & Batten
  images.push(
    {
      id: "board-hero",
      originalPath: "/elegant-board-and-batten.png",
      currentUrl: "/elegant-board-and-batten.png",
      category: "Услуги/Board & Batten",
      description: "Главная",
    },
    {
      id: "board-traditional",
      originalPath: "/images/services/board-batten/traditional.png",
      currentUrl: "/images/services/board-batten/traditional.png",
      category: "Услуги/Board & Batten",
      description: "Традиционный",
    },
    {
      id: "board-modern",
      originalPath: "/images/services/board-batten/modern.png",
      currentUrl: "/images/services/board-batten/modern.png",
      category: "Услуги/Board & Batten",
      description: "Современный",
    },
  )

  // Услуги - Римская штукатурка
  images.push(
    {
      id: "plaster-hero",
      originalPath: "/images/services/roman-plaster/luxury-living-room.png",
      currentUrl: "/images/services/roman-plaster/luxury-living-room.png",
      category: "Услуги/Римская штукатурка",
      description: "Главная",
    },
    {
      id: "plaster-smooth",
      originalPath: "/images/services/roman-plaster/smooth/hero.png",
      currentUrl: "/images/services/roman-plaster/smooth/hero.png",
      category: "Услуги/Римская штукатурка",
      description: "Гладкая",
    },
    {
      id: "plaster-textured",
      originalPath: "/textured-plaster-living-room.png",
      currentUrl: "/textured-plaster-living-room.png",
      category: "Услуги/Римская штукатурка",
      description: "Текстурная",
    },
    {
      id: "plaster-marmorino",
      originalPath: "/images/services/roman-plaster/marmorino-finish.png",
      currentUrl: "/images/services/roman-plaster/marmorino-finish.png",
      category: "Услуги/Римская штукатурка",
      description: "Мармарино",
    },
  )

  // Услуги - Камины
  images.push(
    {
      id: "fireplace-hero",
      originalPath: "/modern-fireplace-buildout.png",
      currentUrl: "/modern-fireplace-buildout.png",
      category: "Услуги/Камины",
      description: "Главная",
    },
    {
      id: "fireplace-modern",
      originalPath: "/modern-slim-fireplace.png",
      currentUrl: "/modern-slim-fireplace.png",
      category: "Услуги/Камины",
      description: "Современный",
    },
    {
      id: "fireplace-traditional",
      originalPath: "/floor-to-ceiling-fireplace.png",
      currentUrl: "/floor-to-ceiling-fireplace.png",
      category: "Услуги/Камины",
      description: "Традиционный",
    },
  )

  // Услуги - Медиа стены
  images.push(
    {
      id: "media-hero",
      originalPath: "/custom-media-wall.png",
      currentUrl: "/custom-media-wall.png",
      category: "Услуги/Медиа стены",
      description: "Главная",
    },
    {
      id: "media-floating",
      originalPath: "/floating-tv-media-wall.png",
      currentUrl: "/floating-tv-media-wall.png",
      category: "Услуги/Медиа стены",
      description: "Парящая",
    },
    {
      id: "media-builtin",
      originalPath: "/built-in-entertainment-center.png",
      currentUrl: "/built-in-entertainment-center.png",
      category: "Услуги/Медиа стены",
      description: "Встроенная",
    },
  )

  // Блог
  images.push({
    id: "blog-trends",
    originalPath: "/modern-accent-wall-2025.png",
    currentUrl: "/modern-accent-wall-2025.png",
    category: "Блог",
    description: "Тренды 2025",
  })

  // Локации
  images.push(
    {
      id: "location-bethesda",
      originalPath: "/placeholder.svg?key=bethesda",
      currentUrl: "/placeholder.svg?key=bethesda",
      category: "Локации",
      description: "Bethesda",
    },
    {
      id: "location-silver",
      originalPath: "/placeholder.svg?key=silver-spring",
      currentUrl: "/placeholder.svg?key=silver-spring",
      category: "Локации",
      description: "Silver Spring",
    },
    {
      id: "location-rockville",
      originalPath: "/placeholder.svg?key=rockville",
      currentUrl: "/placeholder.svg?key=rockville",
      category: "Локации",
      description: "Rockville",
    },
  )

  // Логотипы и бейджи
  images.push(
    { id: "logo", originalPath: "/logo.png", currentUrl: "/logo.png", category: "Брендинг", description: "Логотип" },
    {
      id: "badge-homeadvisor",
      originalPath: "/home-advisor-badge.png",
      currentUrl: "/home-advisor-badge.png",
      category: "Бейджи",
      description: "HomeAdvisor",
    },
    {
      id: "badge-google",
      originalPath: "/google-5-star-badge.png",
      currentUrl: "/google-5-star-badge.png",
      category: "Бейджи",
      description: "Google Reviews",
    },
    {
      id: "badge-bbb",
      originalPath: "/bbb-accredited-badge.png",
      currentUrl: "/bbb-accredited-badge.png",
      category: "Бейджи",
      description: "BBB",
    },
    {
      id: "badge-thumbtack",
      originalPath: "/thumbtack-top-pro-badge.png",
      currentUrl: "/thumbtack-top-pro-badge.png",
      category: "Бейджи",
      description: "Thumbtack",
    },
  )

  return images
}

export function UniversalImageReplacer() {
  const [images, setImages] = useState<ImageData[]>([])
  const [replacedImages, setReplacedImages] = useState<{ [key: string]: string }>({})
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showPreview, setShowPreview] = useState<string | null>(null)
  const [copiedPath, setCopiedPath] = useState<string | null>(null)

  useEffect(() => {
    // Загружаем все изображения
    setImages(scanAllSiteImages())

    // Загружаем сохраненные замены
    const saved = localStorage.getItem("replaced-images")
    if (saved) {
      setReplacedImages(JSON.parse(saved))
    }
  }, [])

  const categories = ["all", ...new Set(images.map((img) => img.category))]

  const filteredImages = images.filter((img) => {
    const matchesSearch =
      img.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      img.originalPath.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || img.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleImageReplace = (imageId: string, file: File) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const newUrl = e.target?.result as string
      setReplacedImages((prev) => ({
        ...prev,
        [imageId]: newUrl,
      }))
    }
    reader.readAsDataURL(file)
  }

  const saveAllChanges = () => {
    localStorage.setItem("replaced-images", JSON.stringify(replacedImages))
    alert(`✅ Сохранено ${Object.keys(replacedImages).length} изображений!`)
  }

  const resetImage = (imageId: string) => {
    setReplacedImages((prev) => {
      const updated = { ...prev }
      delete updated[imageId]
      return updated
    })
  }

  const resetAllImages = () => {
    if (confirm("Вы уверены? Все изображения вернутся к оригинальным.")) {
      setReplacedImages({})
      localStorage.removeItem("replaced-images")
    }
  }

  const copyPath = (path: string) => {
    navigator.clipboard.writeText(path)
    setCopiedPath(path)
    setTimeout(() => setCopiedPath(null), 2000)
  }

  const exportChanges = () => {
    const dataStr = JSON.stringify(replacedImages, null, 2)
    const dataBlob = new Blob([dataStr], { type: "application/json" })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement("a")
    link.href = url
    link.download = "image-replacements.json"
    link.click()
  }

  return (
    <div className="space-y-6">
      {/* Заголовок и статистика */}
      <div className="flex flex-col lg:flex-row gap-4 justify-between items-start lg:items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Универсальная замена изображений</h1>
          <p className="text-muted-foreground">
            Найдено: {filteredImages.length} из {images.length} | Изменено: {Object.keys(replacedImages).length}
          </p>
        </div>

        <div className="flex gap-2 flex-wrap">
          <Button onClick={saveAllChanges} disabled={Object.keys(replacedImages).length === 0}>
            <Save className="h-4 w-4 mr-2" />
            Сохранить ({Object.keys(replacedImages).length})
          </Button>
          <Button variant="outline" onClick={resetAllImages}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Сбросить все
          </Button>
          <Button variant="outline" onClick={exportChanges}>
            <Download className="h-4 w-4 mr-2" />
            Экспорт
          </Button>
        </div>
      </div>

      {/* Фильтры и поиск */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Поиск по названию или пути..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border rounded-md"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "all" ? "Все категории" : cat}
                </option>
              ))}
            </select>

            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Изображения */}
      <div
        className={
          viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" : "space-y-4"
        }
      >
        {filteredImages.map((image) => {
          const currentUrl = replacedImages[image.id] || image.currentUrl
          const isReplaced = !!replacedImages[image.id]

          return (
            <Card key={image.id} className={`overflow-hidden ${isReplaced ? "ring-2 ring-green-500" : ""}`}>
              {viewMode === "grid" ? (
                <>
                  {/* Grid View */}
                  <div className="aspect-video relative group">
                    <img
                      src={currentUrl || "/placeholder.svg"}
                      alt={image.description}
                      className="w-full h-full object-cover"
                    />

                    {/* Overlay с кнопками */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                      <Button size="sm" variant="secondary" onClick={() => setShowPreview(currentUrl)}>
                        <Eye className="h-4 w-4" />
                      </Button>

                      <label>
                        <Button size="sm" variant="secondary" asChild>
                          <span>
                            <Upload className="h-4 w-4" />
                          </span>
                        </Button>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0]
                            if (file) handleImageReplace(image.id, file)
                          }}
                        />
                      </label>

                      {isReplaced && (
                        <Button size="sm" variant="destructive" onClick={() => resetImage(image.id)}>
                          <X className="h-4 w-4" />
                        </Button>
                      )}
                    </div>

                    {/* Статус */}
                    <div className="absolute top-2 left-2 right-2 flex justify-between">
                      <Badge variant="secondary" className="text-xs">
                        {image.category}
                      </Badge>
                      {isReplaced && <Badge className="bg-green-500 text-xs">Изменено</Badge>}
                    </div>
                  </div>

                  <CardContent className="p-3">
                    <h3 className="font-semibold text-sm mb-1">{image.description}</h3>
                    <div className="flex items-center gap-2">
                      <code className="text-xs text-muted-foreground flex-1 truncate">{image.originalPath}</code>
                      <Button size="sm" variant="ghost" onClick={() => copyPath(image.originalPath)}>
                        {copiedPath === image.originalPath ? (
                          <Check className="h-3 w-3 text-green-500" />
                        ) : (
                          <Copy className="h-3 w-3" />
                        )}
                      </Button>
                    </div>
                  </CardContent>
                </>
              ) : (
                <>
                  {/* List View */}
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="w-32 h-20 flex-shrink-0">
                        <img
                          src={currentUrl || "/placeholder.svg"}
                          alt={image.description}
                          className="w-full h-full object-cover rounded"
                        />
                      </div>

                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold">{image.description}</h3>
                            <p className="text-sm text-muted-foreground">{image.category}</p>
                          </div>
                          {isReplaced && <Badge className="bg-green-500">Изменено</Badge>}
                        </div>

                        <div className="flex items-center gap-2">
                          <code className="text-xs text-muted-foreground flex-1">{image.originalPath}</code>
                          <Button size="sm" variant="ghost" onClick={() => copyPath(image.originalPath)}>
                            {copiedPath === image.originalPath ? (
                              <Check className="h-3 w-3 text-green-500" />
                            ) : (
                              <Copy className="h-3 w-3" />
                            )}
                          </Button>
                        </div>

                        <div className="flex gap-2">
                          <Button size="sm" variant="outline" onClick={() => setShowPreview(currentUrl)}>
                            <Eye className="h-4 w-4 mr-2" />
                            Просмотр
                          </Button>

                          <label>
                            <Button size="sm" variant="outline" asChild>
                              <span>
                                <Upload className="h-4 w-4 mr-2" />
                                Заменить
                              </span>
                            </Button>
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => {
                                const file = e.target.files?.[0]
                                if (file) handleImageReplace(image.id, file)
                              }}
                            />
                          </label>

                          {isReplaced && (
                            <Button size="sm" variant="outline" onClick={() => resetImage(image.id)}>
                              <X className="h-4 w-4 mr-2" />
                              Сбросить
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </>
              )}
            </Card>
          )
        })}
      </div>

      {/* Превью изображения */}
      {showPreview && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setShowPreview(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={showPreview || "/placeholder.svg"}
              alt="Preview"
              className="max-w-full max-h-[90vh] object-contain"
            />
            <Button
              className="absolute top-4 right-4"
              size="icon"
              variant="secondary"
              onClick={() => setShowPreview(null)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
