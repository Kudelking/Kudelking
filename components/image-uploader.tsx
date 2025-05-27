"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, X, Check, AlertCircle } from "lucide-react"

interface ImageUploaderProps {
  currentImage?: string
  onImageChange: (file: File, previewUrl: string) => void
  title: string
  description?: string
  acceptedFormats?: string[]
}

export function ImageUploader({
  currentImage,
  onImageChange,
  title,
  description,
  acceptedFormats = ["image/jpeg", "image/png", "image/webp"],
}: ImageUploaderProps) {
  const [preview, setPreview] = useState<string | null>(currentImage || null)
  const [isDragging, setIsDragging] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = async (file: File) => {
    setError(null)

    // Validate file type
    if (!acceptedFormats.includes(file.type)) {
      setError(`Поддерживаемые форматы: ${acceptedFormats.map((f) => f.split("/")[1]).join(", ")}`)
      return
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError("Размер файла не должен превышать 5MB")
      return
    }

    setIsUploading(true)

    try {
      // Create preview
      const previewUrl = URL.createObjectURL(file)
      setPreview(previewUrl)

      // Call parent callback
      onImageChange(file, previewUrl)

      setIsUploading(false)
    } catch (err) {
      setError("Ошибка при загрузке файла")
      setIsUploading(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const files = Array.from(e.dataTransfer.files)
    if (files.length > 0) {
      handleFileSelect(files[0])
    }
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      handleFileSelect(files[0])
    }
  }

  const clearImage = () => {
    setPreview(null)
    setError(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </CardHeader>
      <CardContent>
        <div
          className={`relative border-2 border-dashed rounded-lg p-6 transition-colors ${
            isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:border-primary/50"
          }`}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={() => setIsDragging(true)}
          onDragLeave={() => setIsDragging(false)}
        >
          {preview ? (
            <div className="space-y-4">
              <div className="relative aspect-video w-full max-w-md mx-auto">
                <img
                  src={preview || "/placeholder.svg"}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-lg"
                />
                <Button variant="destructive" size="sm" className="absolute top-2 right-2" onClick={clearImage}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-center justify-center text-sm text-green-600">
                <Check className="h-4 w-4 mr-2" />
                Изображение загружено
              </div>
            </div>
          ) : (
            <div className="text-center space-y-4">
              <div className="mx-auto w-12 h-12 text-muted-foreground">
                <Upload className="w-full h-full" />
              </div>
              <div>
                <p className="text-sm font-medium">
                  Перетащите изображение сюда или{" "}
                  <button
                    type="button"
                    className="text-primary hover:underline"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    выберите файл
                  </button>
                </p>
                <p className="text-xs text-muted-foreground mt-1">PNG, JPG, WebP до 5MB</p>
              </div>
            </div>
          )}

          {isUploading && (
            <div className="absolute inset-0 bg-background/80 flex items-center justify-center rounded-lg">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                <span className="text-sm">Загрузка...</span>
              </div>
            </div>
          )}

          <input
            ref={fileInputRef}
            type="file"
            accept={acceptedFormats.join(",")}
            onChange={handleFileInput}
            className="hidden"
          />
        </div>

        {error && (
          <div className="mt-4 flex items-center space-x-2 text-sm text-destructive">
            <AlertCircle className="h-4 w-4" />
            <span>{error}</span>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
