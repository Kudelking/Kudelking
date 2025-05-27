import { OptimizedImage } from "@/components/optimized-image"
import Link from "next/link"
import { ArrowRight, MapPin } from "lucide-react"

interface ProjectCardProps {
  title: string
  description?: string
  imageSrc: string
  category?: string
  location: string
  image?: string
  href?: string
}

export function ProjectCard({ title, description, imageSrc, category, location, image, href = "#" }: ProjectCardProps) {
  const imageSource = imageSrc || image

  // Generate comprehensive SEO-friendly alt text
  const generateAltText = () => {
    const categoryText = category ? `${category.charAt(0).toUpperCase() + category.slice(1)} ` : ""
    const locationText = location ? ` in ${location}` : ""
    return `${categoryText}accent wall installation${locationText} - ${title} by Accent Walls Pro`
  }

  // Generate detailed image caption for screen readers
  const generateCaption = () => {
    const categoryText = category ? `${category.charAt(0).toUpperCase() + category.slice(1)} ` : ""
    return `${categoryText}installation in ${location} - Professional accent wall services`
  }

  // Improved fallback image logic with category-specific placeholders
  const getFallbackImage = () => {
    if (!category || typeof category !== "string") {
      return "/placeholder.svg?height=400&width=600&query=premium+accent+wall+installation"
    }

    const categoryLower = category.toLowerCase()

    if (categoryLower.includes("tv") || categoryLower.includes("media")) {
      return "/placeholder.svg?height=400&width=600&query=modern+floating+tv+media+wall+entertainment+center"
    }
    if (categoryLower.includes("board") || categoryLower.includes("batten")) {
      return "/placeholder.svg?height=400&width=600&query=elegant+white+board+and+batten+wainscoting+dining+room"
    }
    if (categoryLower.includes("fire")) {
      return "/placeholder.svg?height=400&width=600&query=luxury+stone+fireplace+surround+modern+living+room"
    }
    if (categoryLower.includes("limewash")) {
      return "/placeholder.svg?height=400&width=600&query=textured+limewash+wall+finish+mediterranean+style"
    }
    if (categoryLower.includes("wood") || categoryLower.includes("slat")) {
      return "/placeholder.svg?height=400&width=600&query=vertical+wood+slat+accent+wall+bedroom+walnut"
    }
    if (categoryLower.includes("roman") || categoryLower.includes("plaster")) {
      return "/placeholder.svg?height=400&width=600&query=smooth+roman+plaster+venetian+finish+luxury+interior"
    }
    if (categoryLower.includes("accent")) {
      return "/placeholder.svg?height=400&width=600&query=geometric+wood+pattern+accent+wall+modern+office"
    }
    if (categoryLower.includes("brick")) {
      return "/placeholder.svg?height=400&width=600&query=exposed+brick+accent+wall+industrial+loft+style"
    }
    if (categoryLower.includes("wallpaper")) {
      return "/placeholder.svg?height=400&width=600&query=luxury+patterned+wallpaper+feature+wall+dining+room"
    }
    if (categoryLower.includes("ceiling")) {
      return "/placeholder.svg?height=400&width=600&query=coffered+ceiling+crown+molding+elegant+home+office"
    }

    return "/placeholder.svg?height=400&width=600&query=premium+accent+wall+installation"
  }

  return (
    <Link href={href} className="block h-full group" aria-label={`View details for ${title}`}>
      <article className="overflow-hidden rounded-lg shadow-sm border border-gray-100 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
        <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden bg-muted">
          <OptimizedImage
            src={imageSource}
            alt={generateAltText()}
            fill
            className="w-full h-full transition-transform duration-500 group-hover:scale-105 object-cover"
            fallbackSrc={getFallbackImage()}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

          {category && (
            <div className="absolute top-3 left-3 bg-primary/90 text-white text-xs font-medium px-2 md:px-3 py-1 rounded-full backdrop-blur-sm">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </div>
          )}

          <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
            <h3 className="font-bold text-sm md:text-base lg:text-lg text-white line-clamp-2 group-hover:underline mb-2">
              {title}
            </h3>
            <div className="flex items-center text-white/90 text-xs md:text-sm mb-2">
              <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
              <span>{location}</span>
            </div>
            {description && (
              <p className="text-white/80 text-xs md:text-sm line-clamp-2 mb-3 hidden sm:block">{description}</p>
            )}
            <div className="flex justify-between items-center">
              <span className="inline-flex items-center text-xs md:text-sm font-medium text-white group-hover:underline">
                View Project{" "}
                <ArrowRight className="ml-1 h-3 w-3 md:h-4 md:w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </div>

        {/* Image caption for accessibility and SEO */}
        <div className="sr-only">{generateCaption()}</div>
      </article>
    </Link>
  )
}
