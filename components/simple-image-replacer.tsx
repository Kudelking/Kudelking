"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Check, X, Loader2, Copy } from "lucide-react"

interface SimpleImageReplacerProps {
  title: string
  currentImage: string
  imagePath: string
}

export function SimpleImageReplacer({ title, currentImage, imagePath }: SimpleImageReplacerProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [newImageUrl, setNewImageUrl] = useState<string | null>(null)
  const [uploadError, setUploadError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setIsUploading(true)
    setUploadError(null)

    try {
      const formData = new FormData()
      formData.append("file", file)
      formData.append("imagePath", imagePath)

      const response = await fetch("/api/upload-blob", {
        method: "POST",
        body: formData,
      })

      const result = await response.json()

      if (result.success) {
        setNewImageUrl(result.url)
      } else {
        setUploadError(result.error || "Ошибка загрузки")
      }
    } catch (error) {
      setUploadError("Ошибка сети")
    } finally {
      setIsUploading(false)
    }
  }

  const copyUrl = () => {
    if (newImageUrl) {
      navigator.clipboard.writeText(newImageUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Текущее изображение */}
        <div>
          <p className="text-sm text-muted-foreground mb-2">Текущее изображение:</p>
          <div className="aspect-video relative rounded-lg overflow-hidden bg-muted">
            <img
              src={newImageUrl || currentImage || "/placeholder.svg"}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-xs text-muted-foreground mt-1 font-mono">{imagePath}</p>
        </div>

        {/* Загрузка нового изображения */}
        <div>
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
                    Загрузить новое изображение
                  </>
                )}
              </span>
            </Button>
            <input type="file" accept="image/*" onChange={handleFileSelect} className="hidden" disabled={isUploading} />
          </label>
        </div>

        {/* Новый URL */}
        {newImageUrl && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-green-600 text-sm">
              <Check className="h-4 w-4" />
              Изображение загружено успешно!
            </div>
            <div className="p-3 bg-muted rounded-lg">
              <p className="text-sm font-medium mb-2">Новый URL изображения:</p>
              <div className="flex items-center gap-2">
                <code className="text-xs bg-background p-2 rounded flex-1 break-all">{newImageUrl}</code>
                <Button size="sm" variant="outline" onClick={copyUrl}>
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2">Скопируйте этот URL и замените им старый путь в коде</p>
            </div>
          </div>
        )}

        {/* Ошибка */}
        {uploadError && (
          <div className="flex items-center gap-2 text-red-600 text-sm">
            <X className="h-4 w-4" />
            {uploadError}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
