"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, Check, X, Loader2 } from "lucide-react"

interface RealImageUploaderProps {
  currentImage: string
  imagePath: string
  title: string
  onImageUploaded?: (newPath: string) => void
}

export function RealImageUploader({ currentImage, imagePath, title, onImageUploaded }: RealImageUploaderProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const [uploadError, setUploadError] = useState<string | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Показываем предпросмотр
    const preview = URL.createObjectURL(file)
    setPreviewUrl(preview)

    // Загружаем файл на сервер
    setIsUploading(true)
    setUploadError(null)
    setUploadSuccess(false)

    try {
      const formData = new FormData()
      formData.append("file", file)
      formData.append("imagePath", imagePath)

      const response = await fetch("/api/upload-image", {
        method: "POST",
        body: formData,
      })

      const result = await response.json()

      if (result.success) {
        setUploadSuccess(true)
        onImageUploaded?.(result.path)

        // Принудительно обновляем изображение на странице
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      } else {
        setUploadError(result.error || "Ошибка загрузки")
        setPreviewUrl(null)
      }
    } catch (error) {
      setUploadError("Ошибка сети")
      setPreviewUrl(null)
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <h3 className="font-medium mb-3">{title}</h3>

        {/* Текущее изображение */}
        <div className="mb-4">
          <div className="aspect-video relative rounded-lg overflow-hidden bg-muted">
            <img
              src={previewUrl || currentImage || "/placeholder.svg"}
              alt={title}
              className="w-full h-full object-cover"
            />
            {uploadSuccess && (
              <div className="absolute inset-0 bg-green-500/20 flex items-center justify-center">
                <div className="bg-green-500 text-white p-2 rounded-full">
                  <Check className="h-4 w-4" />
                </div>
              </div>
            )}
          </div>
          <p className="text-xs text-muted-foreground mt-2 font-mono">{imagePath}</p>
        </div>

        {/* Загрузка файла */}
        <div className="space-y-3">
          <label className="cursor-pointer">
            <Button variant="outline" className="w-full" disabled={isUploading} asChild>
              <span>
                {isUploading ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Загрузка...
                  </>
                ) : (
                  <>
                    <Upload className="h-4 w-4 mr-2" />
                    Выбрать новое изображение
                  </>
                )}
              </span>
            </Button>
            <input type="file" accept="image/*" onChange={handleFileSelect} className="hidden" disabled={isUploading} />
          </label>

          {/* Статус загрузки */}
          {uploadSuccess && (
            <div className="flex items-center gap-2 text-green-600 text-sm">
              <Check className="h-4 w-4" />
              Изображение успешно загружено! Страница обновится...
            </div>
          )}

          {uploadError && (
            <div className="flex items-center gap-2 text-red-600 text-sm">
              <X className="h-4 w-4" />
              {uploadError}
            </div>
          )}

          <p className="text-xs text-muted-foreground">
            Поддерживаемые форматы: JPG, PNG, WebP. Максимальный размер: 10MB
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
