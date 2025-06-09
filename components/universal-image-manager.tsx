"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ImageUploader } from "@/components/image-uploader"
import { Badge } from "@/components/ui/badge"
import { Search, Save, RefreshCw, Download, UploadIcon, Upload } from "lucide-react"

interface ImageItem {
  id: string
  path: string
  title: string
  category: string
  subcategory?: string
  description?: string
  currentUrl: string
}

// Полный список всех изображений на сайте
const allSiteImages: ImageItem[] = [
  // Portfolio Images
  {
    id: "portfolio-floating-tv",
    path: "/floating-tv-media-wall.png",
    title: "Парящая ТВ стена",
    category: "portfolio",
    subcategory: "media-walls",
    description: "Современная парящая ТВ стена с LED подсветкой",
    currentUrl: "/floating-tv-media-wall.png",
  },
  {
    id: "portfolio-board-batten-dining",
    path: "/white-board-and-batten-dining-room.png",
    title: "Board & Batten в столовой",
    category: "portfolio",
    subcategory: "board-batten",
    description: "Классическая белая обшивка в столовой",
    currentUrl: "/white-board-and-batten-dining-room.png",
  },
  {
    id: "portfolio-wood-slat-living",
    path: "/wood-slat-living-room.png",
    title: "Деревянные рейки в гостиной",
    category: "portfolio",
    subcategory: "wood-slats",
    description: "Современная стена из деревянных реек",
    currentUrl: "/wood-slat-living-room.png",
  },
  {
    id: "portfolio-geometric-office",
    path: "/geometric-wood-accent-wall-office.png",
    title: "Геометрическая стена в офисе",
    category: "portfolio",
    subcategory: "accent-walls",
    description: "Геометрическая деревянная акцентная стена",
    currentUrl: "/geometric-wood-accent-wall-office.png",
  },
  {
    id: "portfolio-roman-plaster-bedroom",
    path: "/luxury-roman-plaster-bedroom.png",
    title: "Римская штукатурка в спальне",
    category: "portfolio",
    subcategory: "roman-plaster",
    description: "Роскошная римская штукатурка в спальне",
    currentUrl: "/luxury-roman-plaster-bedroom.png",
  },
  {
    id: "portfolio-modern-fireplace",
    path: "/modern-fireplace-wood-stone.png",
    title: "Современный камин",
    category: "portfolio",
    subcategory: "fireplaces",
    description: "Современный камин с деревом и камнем",
    currentUrl: "/modern-fireplace-wood-stone.png",
  },

  // Service Hero Images
  {
    id: "service-accent-walls-hero",
    path: "/images/services/accent-walls/geometric-modern.jpg",
    title: "Акцентные стены - Главная",
    category: "services",
    subcategory: "accent-walls",
    description: "Главное изображение для страницы акцентных стен",
    currentUrl: "/images/services/accent-walls/geometric-modern.jpg",
  },
  {
    id: "service-board-batten-hero",
    path: "/elegant-board-and-batten.png",
    title: "Board & Batten - Главная",
    category: "services",
    subcategory: "board-batten",
    description: "Главное изображение для Board & Batten",
    currentUrl: "/elegant-board-and-batten.png",
  },
  {
    id: "service-roman-plaster-hero",
    path: "/images/services/roman-plaster/luxury-living-room.png",
    title: "Римская штукатурка - Главная",
    category: "services",
    subcategory: "roman-plaster",
    description: "Главное изображение для римской штукатурки",
    currentUrl: "/images/services/roman-plaster/luxury-living-room.png",
  },
  {
    id: "service-limewash-hero",
    path: "/soft-beige-limewash.png",
    title: "Лаймвош - Главная",
    category: "services",
    subcategory: "limewash",
    description: "Главное изображение для лаймвош",
    currentUrl: "/soft-beige-limewash.png",
  },
  {
    id: "service-fireplace-hero",
    path: "/modern-fireplace-buildout.png",
    title: "Камины - Главная",
    category: "services",
    subcategory: "fireplaces",
    description: "Главное изображение для каминов",
    currentUrl: "/modern-fireplace-buildout.png",
  },
  {
    id: "service-media-walls-hero",
    path: "/custom-media-wall.png",
    title: "Медиа стены - Главная",
    category: "services",
    subcategory: "media-walls",
    description: "Главное изображение для медиа стен",
    currentUrl: "/custom-media-wall.png",
  },

  // Accent Walls Variations
  {
    id: "accent-wood-slat",
    path: "/images/services/accent-walls/wood-slat.png",
    title: "Деревянные рейки",
    category: "services",
    subcategory: "accent-walls",
    description: "Вариация акцентной стены - деревянные рейки",
    currentUrl: "/images/services/accent-walls/wood-slat.png",
  },
  {
    id: "accent-geometric",
    path: "/images/services/accent-walls/geometric.png",
    title: "Геометрические узоры",
    category: "services",
    subcategory: "accent-walls",
    description: "Вариация акцентной стены - геометрия",
    currentUrl: "/images/services/accent-walls/geometric.png",
  },

  // Board & Batten Variations
  {
    id: "board-batten-traditional",
    path: "/images/services/board-batten/traditional.png",
    title: "Традиционный Board & Batten",
    category: "services",
    subcategory: "board-batten",
    description: "Традиционный стиль Board & Batten",
    currentUrl: "/images/services/board-batten/traditional.png",
  },
  {
    id: "board-batten-modern",
    path: "/images/services/board-batten/modern.png",
    title: "Современный Board & Batten",
    category: "services",
    subcategory: "board-batten",
    description: "Современный стиль Board & Batten",
    currentUrl: "/images/services/board-batten/modern.png",
  },

  // Roman Plaster Variations
  {
    id: "roman-plaster-smooth",
    path: "/images/services/roman-plaster/smooth/hero.png",
    title: "Гладкая римская штукатурка",
    category: "services",
    subcategory: "roman-plaster",
    description: "Гладкая текстура римской штукатурки",
    currentUrl: "/images/services/roman-plaster/smooth/hero.png",
  },
  {
    id: "roman-plaster-textured",
    path: "/textured-plaster-living-room.png",
    title: "Текстурированная римская штукатурка",
    category: "services",
    subcategory: "roman-plaster",
    description: "Текстурированная римская штукатурка",
    currentUrl: "/textured-plaster-living-room.png",
  },
  {
    id: "roman-plaster-marmorino",
    path: "/images/services/roman-plaster/marmorino-finish.png",
    title: "Мармарино финиш",
    category: "services",
    subcategory: "roman-plaster",
    description: "Мармарино финиш римской штукатурки",
    currentUrl: "/images/services/roman-plaster/marmorino-finish.png",
  },

  // Limewash Variations
  {
    id: "limewash-smooth",
    path: "/smooth-limewash-wall.png",
    title: "Гладкий лаймвош",
    category: "services",
    subcategory: "limewash",
    description: "Гладкая текстура лаймвош",
    currentUrl: "/smooth-limewash-wall.png",
  },
  {
    id: "limewash-textured",
    path: "/rustic-limewash-wall.png",
    title: "Текстурированный лаймвош",
    category: "services",
    subcategory: "limewash",
    description: "Рустикальная текстура лаймвош",
    currentUrl: "/rustic-limewash-wall.png",
  },

  // Fireplace Variations
  {
    id: "fireplace-modern",
    path: "/modern-slim-fireplace.png",
    title: "Современный камин",
    category: "services",
    subcategory: "fireplaces",
    description: "Современный тонкий камин",
    currentUrl: "/modern-slim-fireplace.png",
  },
  {
    id: "fireplace-traditional",
    path: "/floor-to-ceiling-fireplace.png",
    title: "Традиционный камин",
    category: "services",
    subcategory: "fireplaces",
    description: "Традиционный камин от пола до потолка",
    currentUrl: "/floor-to-ceiling-fireplace.png",
  },

  // Media Walls Variations
  {
    id: "media-wall-floating",
    path: "/floating-tv-media-wall.png",
    title: "Парящая медиа стена",
    category: "services",
    subcategory: "media-walls",
    description: "Парящая ТВ стена",
    currentUrl: "/floating-tv-media-wall.png",
  },
  {
    id: "media-wall-built-in",
    path: "/built-in-entertainment-center.png",
    title: "Встроенная медиа стена",
    category: "services",
    subcategory: "media-walls",
    description: "Встроенный развлекательный центр",
    currentUrl: "/built-in-entertainment-center.png",
  },

  // Wallpaper Images
  {
    id: "wallpaper-feature",
    path: "/luxury-wallpaper-feature-wall.png",
    title: "Роскошные обои - акцентная стена",
    category: "services",
    subcategory: "wallpaper",
    description: "Роскошная акцентная стена с обоями",
    currentUrl: "/luxury-wallpaper-feature-wall.png",
  },
  {
    id: "wallpaper-full-room",
    path: "/bedroom-wallpaper-installation.png",
    title: "Обои - полная комната",
    category: "services",
    subcategory: "wallpaper",
    description: "Поклейка обоев в спальне",
    currentUrl: "/bedroom-wallpaper-installation.png",
  },

  // Brick Walls
  {
    id: "brick-real",
    path: "/images/portfolio/brick-accent-wall.png",
    title: "Настоящая кирпичная стена",
    category: "services",
    subcategory: "brick-walls",
    description: "Настоящая кирпичная акцентная стена",
    currentUrl: "/images/portfolio/brick-accent-wall.png",
  },
]

const createBlobUrl = (file: File): string => {
  return URL.createObjectURL(file)
}

export function UniversalImageManager() {
  const [images, setImages] = useState<ImageItem[]>(allSiteImages)
  const [uploadedImages, setUploadedImages] = useState<{ [key: string]: string }>({})
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedSubcategory, setSelectedSubcategory] = useState("all")

  // Load saved images from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("all-site-images")
    if (saved) {
      const savedImages = JSON.parse(saved)
      setUploadedImages(savedImages)
    }
  }, [])

  const categories = ["all", "portfolio", "services"]
  const subcategories = [
    "all",
    "accent-walls",
    "board-batten",
    "roman-plaster",
    "limewash",
    "fireplaces",
    "media-walls",
    "wallpaper",
    "brick-walls",
    "wood-slats",
  ]

  const filteredImages = images.filter((image) => {
    const matchesSearch =
      image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.description?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || image.category === selectedCategory
    const matchesSubcategory = selectedSubcategory === "all" || image.subcategory === selectedSubcategory

    return matchesSearch && matchesCategory && matchesSubcategory
  })

  const handleImageUpload = (imageId: string, file: File, previewUrl: string) => {
    setUploadedImages((prev) => ({
      ...prev,
      [imageId]: previewUrl,
    }))

    // Также сохраняем файл для возможной загрузки на сервер
    const fileData = {
      file: file,
      previewUrl: previewUrl,
      timestamp: Date.now(),
    }
    localStorage.setItem(
      `image-file-${imageId}`,
      JSON.stringify({
        name: file.name,
        size: file.size,
        type: file.type,
        previewUrl: previewUrl,
      }),
    )
  }

  const getCurrentImageUrl = (image: ImageItem) => {
    return uploadedImages[image.id] || image.currentUrl
  }

  const saveAllChanges = () => {
    localStorage.setItem("all-site-images", JSON.stringify(uploadedImages))
    alert(`Сохранено ${Object.keys(uploadedImages).length} изображений!`)
  }

  const resetAllImages = () => {
    if (confirm("Вы уверены, что хотите сбросить ВСЕ изображения к оригинальным?")) {
      setUploadedImages({})
      localStorage.removeItem("all-site-images")
      alert("Все изображения сброшены к оригинальным!")
    }
  }

  const exportImages = () => {
    const dataStr = JSON.stringify(uploadedImages, null, 2)
    const dataBlob = new Blob([dataStr], { type: "application/json" })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement("a")
    link.href = url
    link.download = "site-images-backup.json"
    link.click()
  }

  const importImages = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        try {
          const imported = JSON.parse(e.target?.result as string)
          setUploadedImages(imported)
          localStorage.setItem("all-site-images", JSON.stringify(imported))
          alert("Изображения успешно импортированы!")
        } catch (error) {
          alert("Ошибка при импорте файла!")
        }
      }
      reader.readAsText(file)
    }
  }

  const applyChangesToSite = async () => {
    const changedImages = Object.keys(uploadedImages)
    if (changedImages.length === 0) {
      alert("Нет изменений для применения!")
      return
    }

    if (confirm(`Применить ${changedImages.length} изменений на сайте? Это действие нельзя отменить.`)) {
      // Здесь можно добавить логику для загрузки файлов на сервер
      // Пока просто сохраняем в localStorage как "применено"
      localStorage.setItem("applied-site-images", JSON.stringify(uploadedImages))
      alert(`${changedImages.length} изображений успешно применены на сайте!`)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Управление всеми изображениями</h2>
          <p className="text-muted-foreground">
            Найдено: {filteredImages.length} из {images.length} изображений
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button onClick={saveAllChanges} disabled={Object.keys(uploadedImages).length === 0}>
            <Save className="h-4 w-4 mr-2" />
            Сохранить все ({Object.keys(uploadedImages).length})
          </Button>
          <Button variant="outline" onClick={resetAllImages}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Сбросить все
          </Button>
          <Button variant="outline" onClick={exportImages}>
            <Download className="h-4 w-4 mr-2" />
            Экспорт
          </Button>
          <label className="cursor-pointer">
            <Button variant="outline" asChild>
              <span>
                <UploadIcon className="h-4 w-4 mr-2" />
                Импорт
              </span>
            </Button>
            <input type="file" accept=".json" onChange={importImages} className="hidden" />
          </label>
          <Button onClick={applyChangesToSite} variant="default" className="bg-green-600 hover:bg-green-700">
            <Upload className="h-4 w-4 mr-2" />
            Применить изменения на сайте
          </Button>
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Поиск</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Поиск по названию или описанию..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Категория</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat === "all" ? "Все категории" : cat === "portfolio" ? "Портфолио" : "Сервисы"}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Подкатегория</label>
              <select
                value={selectedSubcategory}
                onChange={(e) => setSelectedSubcategory(e.target.value)}
                className="w-full p-2 border rounded-md"
              >
                {subcategories.map((subcat) => (
                  <option key={subcat} value={subcat}>
                    {subcat === "all" ? "Все подкатегории" : subcat}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image) => (
          <Card key={image.id} className="overflow-hidden">
            <div className="aspect-video relative">
              <img
                src={getCurrentImageUrl(image) || "/placeholder.svg"}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2 space-x-1">
                <Badge variant="secondary" className="text-xs">
                  {image.category}
                </Badge>
                {image.subcategory && (
                  <Badge variant="outline" className="text-xs">
                    {image.subcategory}
                  </Badge>
                )}
              </div>
              {uploadedImages[image.id] && (
                <div className="absolute top-2 right-2">
                  <Badge className="bg-green-500 text-xs">Изменено</Badge>
                </div>
              )}
            </div>

            <CardContent className="p-4">
              <h3 className="font-semibold mb-1 text-sm">{image.title}</h3>
              {image.description && <p className="text-xs text-muted-foreground mb-3">{image.description}</p>}
              <p className="text-xs text-muted-foreground mb-3 font-mono">{image.path}</p>

              <ImageUploader
                currentImage={getCurrentImageUrl(image)}
                onImageChange={(file, previewUrl) => handleImageUpload(image.id, file, previewUrl)}
                title="Заменить изображение"
                description=""
              />
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredImages.length === 0 && (
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-muted-foreground">Изображения не найдены. Попробуйте изменить фильтры поиска.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
