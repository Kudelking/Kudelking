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
      return "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kudelking_spacious_living_room_with_Roman_Plaster_accent_wall_d4cd77c5-8280-419f-88fb-d7d072386205_0-XQj2uA0B1VrryP5JYu61A7g0JqJlBS.png"
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
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col group border border-border/50">
      <div className="relative h-48 overflow-hidden">
        <OptimizedImage
          src={icon}
          alt={title}
          fill
          className="w-full h-full transition-transform duration-500 group-hover:scale-105"
          objectFit="cover"
          fallbackSrc={determineFallbackIcon()}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
      </div>
      <CardContent className="p-6 flex flex-col flex-grow bg-white">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
        <Link
          href={link}
          className="group/link inline-flex items-center text-sm font-medium text-primary mt-auto relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center">
            Learn More
            <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
          </span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/link:w-full"></span>
        </Link>
      </CardContent>
    </Card>
  )
}
