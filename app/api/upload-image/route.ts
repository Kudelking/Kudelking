import { type NextRequest, NextResponse } from "next/server"
import { writeFile, mkdir } from "fs/promises"
import path from "path"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File
    const imagePath = formData.get("imagePath") as string

    if (!file) {
      return NextResponse.json({ error: "No file received" }, { status: 400 })
    }

    // Получаем данные файла
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Определяем путь для сохранения
    const publicPath = path.join(process.cwd(), "public")
    const fullImagePath = path.join(publicPath, imagePath)

    // Создаем директорию если не существует
    const dir = path.dirname(fullImagePath)
    await mkdir(dir, { recursive: true })

    // Сохраняем файл
    await writeFile(fullImagePath, buffer)

    return NextResponse.json({
      success: true,
      message: "Image uploaded successfully",
      path: imagePath,
    })
  } catch (error) {
    console.error("Error uploading image:", error)
    return NextResponse.json({ error: "Failed to upload image" }, { status: 500 })
  }
}
