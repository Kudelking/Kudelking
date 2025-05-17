import { OptimizedImage } from "@/components/optimized-image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description?: string
  imageSrc: string
  category?: string
  location: string
  image?: string // Для обратной совместимости
  href?: string
}

export function ProjectCard({ title, description, imageSrc, category, location, image, href = "#" }: ProjectCardProps) {
  // Используем image в качестве запасного варианта, если imageSrc не предоставлен
  const imageSource = imageSrc || image || "/accent-wall-project.png"

  // Определяем запасное изображение на основе категории
  const getFallbackImage = () => {
    if (!category) return "/accent-wall-project.png"

    const categoryLower = category.toLowerCase()

    if (categoryLower.includes("roman") || categoryLower.includes("plaster")) {
      return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kudelking_spacious_living_room_with_Roman_Plaster_accent_wall_d4cd77c5-8280-419f-88fb-d7d072386205_0-XQj2uA0B1VrryP5JYu61A7g0JqJlBS.png"
    }

    if (categoryLower.includes("wood") || categoryLower.includes("slat")) {
      return "/bedroom-wood-slat-wall.png"
    }

    if (categoryLower.includes("board") || categoryLower.includes("batten")) {
      return "/board-and-batten-shelf.png"
    }

    if (categoryLower.includes("fire")) {
      return "/modern-fireplace-buildout.png"
    }

    if (categoryLower.includes("media")) {
      return "/tv-media-wall.png"
    }

    if (categoryLower.includes("geometric")) {
      return "/geometric-accent-wall.png"
    }

    return "/accent-wall-project.png"
  }

  return (
    <Link href={href} className="block h-full">
      <div className="overflow-hidden rounded-lg shadow-sm border border-gray-100 bg-white transition-all duration-300 hover:shadow-md hover:-translate-y-1 h-full flex flex-col group">
        <div className="relative h-56 overflow-hidden">
          <OptimizedImage
            src={imageSource}
            alt={title}
            fill
            className="w-full h-full transition-transform duration-500 group-hover:scale-105"
            objectFit="cover"
            fallbackSrc={getFallbackImage()}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
          {category && (
            <div className="absolute top-3 left-3 bg-primary/90 text-white text-xs font-medium px-2 py-1 rounded-full">
              {category}
            </div>
          )}
          <div className="absolute bottom-3 left-3 right-3">
            <h3 className="font-bold text-lg text-white line-clamp-1 group-hover:underline">{title}</h3>
            <div className="text-sm text-white/90">{location}</div>
          </div>
        </div>
        <div className="p-4 flex flex-col flex-grow bg-white">
          {description && <p className="text-sm text-muted-foreground line-clamp-3 mb-3">{description}</p>}
          <div className="mt-auto flex justify-end">
            <span className="inline-flex items-center text-sm font-medium text-primary group-hover:underline">
              View Project <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}
