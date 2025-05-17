import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { OptimizedImage } from "@/components/optimized-image"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  link: string
  fallbackIcon?: string
}

export function ServiceCard({ title, description, icon, link, fallbackIcon }: ServiceCardProps) {
  // Определяем запасное изображение на основе названия услуги
  const determineFallbackIcon = () => {
    if (fallbackIcon) return fallbackIcon

    if (title.toLowerCase().includes("roman plaster")) {
      return "/images/services/roman-plaster/luxury-living-room.png"
    }

    if (title.toLowerCase().includes("accent")) {
      return "/geometric-accent-wall.png"
    }

    if (title.toLowerCase().includes("board")) {
      return "/board-and-batten-shelf.png"
    }

    if (title.toLowerCase().includes("wood")) {
      return "/bedroom-wood-slat-wall.png"
    }

    if (title.toLowerCase().includes("fireplace")) {
      return "/modern-fireplace-buildout.png"
    }

    if (title.toLowerCase().includes("tv") || title.toLowerCase().includes("media")) {
      return "/tv-media-wall.png"
    }

    return "/accent-wall.png"
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg h-full flex flex-col">
      <div className="relative h-48">
        <OptimizedImage
          src={icon}
          alt={title}
          fill
          className="w-full h-full"
          objectFit="cover"
          fallbackSrc={determineFallbackIcon()}
          priority
        />
      </div>
      <CardContent className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
        <Link href={link} className="group inline-flex items-center text-sm font-medium text-primary mt-auto">
          Learn More
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardContent>
    </Card>
  )
}
