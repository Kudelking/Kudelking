import { put } from "@vercel/blob"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File
    const imagePath = formData.get("imagePath") as string

    if (!file) {
      return NextResponse.json({ error: "No file received" }, { status: 400 })
    }

    // Создаем уникальное имя файла
    const timestamp = Date.now()
    const fileName = `${timestamp}-${file.name}`

    // Загружаем в Vercel Blob
    const blob = await put(fileName, file, {
      access: "public",
    })

    return NextResponse.json({
      success: true,
      message: "Image uploaded successfully",
      url: blob.url,
      originalPath: imagePath,
    })
  } catch (error) {
    console.error("Error uploading to blob:", error)
    return NextResponse.json({ error: "Failed to upload image" }, { status: 500 })
  }
}
