import { OptimizedImage } from "@/components/optimized-image"
import { ArrowRight, MapPin, Clock, Palette } from "lucide-react"

interface ProjectCardProps {
  title: string
  description?: string
  imageSrc: string
  category?: string
  location: string
  image?: string // Для обратной совместимости
  href?: string
  completionTime?: string
  materials?: string
  roomType?: string
}

export function ProjectCard({
  title,
  description,
  imageSrc,
  category,
  location,
  image,
  href = "#",
  completionTime,
  materials,
  roomType,
}: ProjectCardProps) {
  // Используем image в качестве запасного варианта, если imageSrc не предоставлен
  const imageSource = imageSrc || image || "/accent-wall-project.png"

  // Определяем запасное изображение на основе категории
  const getFallbackImage = () => {
    if (!category) return "/accent-wall-project.png"

    const categoryLower = category.toLowerCase()

    if (categoryLower.includes("roman") || categoryLower.includes("plaster")) {
      return "/images/services/roman-plaster/luxury-living-room.png"
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
    <article className="block h-full">
      <div className="overflow-hidden rounded-lg shadow-sm border border-gray-100 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col group">
        <div className="relative h-64 overflow-hidden">
          <OptimizedImage
            src={imageSource}
            alt={`${title} - ${category} installation in ${location}`}
            fill
            className="w-full h-full transition-transform duration-500 group-hover:scale-105"
            objectFit="cover"
            fallbackSrc={getFallbackImage()}
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          {category && (
            <div className="absolute top-3 left-3 bg-primary/95 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
              {category}
            </div>
          )}
          <div className="absolute bottom-3 left-3 right-3">
            <h3 className="font-bold text-lg text-white line-clamp-2 group-hover:underline mb-1">{title}</h3>
            <div className="flex items-center text-sm text-white/90">
              <MapPin className="h-3 w-3 mr-1" />
              {location}
            </div>
          </div>
        </div>

        <div className="p-4 flex flex-col flex-grow bg-white">
          {description && (
            <p className="text-sm text-muted-foreground line-clamp-3 mb-4 leading-relaxed">{description}</p>
          )}

          {/* Project Details */}
          <div className="space-y-2 mb-4 text-xs text-muted-foreground">
            {completionTime && (
              <div className="flex items-center">
                <Clock className="h-3 w-3 mr-2" />
                <span>Completed in {completionTime}</span>
              </div>
            )}
            {roomType && (
              <div className="flex items-center">
                <Palette className="h-3 w-3 mr-2" />
                <span>{roomType}</span>
              </div>
            )}
          </div>

          <div className="mt-auto flex justify-between items-center">
            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">View Details</span>
            <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </article>
  )
}
