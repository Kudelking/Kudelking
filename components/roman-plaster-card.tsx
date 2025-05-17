import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { OptimizedImage } from "@/components/optimized-image"

export function RomanPlasterCard() {
  // Используем локальное изображение вместо внешнего blob URL
  const localImagePath = "/images/services/roman-plaster/luxury-living-room.png"

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg h-full flex flex-col">
      <div className="relative h-48">
        <OptimizedImage
          src={localImagePath}
          alt="Roman Plaster"
          fill
          className="w-full h-full"
          objectFit="cover"
          priority
        />
      </div>
      <CardContent className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">Roman Plaster</h3>
        <p className="text-muted-foreground mb-4 flex-grow">
          Luxurious, timeless finishes with depth and texture inspired by ancient techniques.
        </p>
        <Link
          href="/services/roman-plaster"
          className="group inline-flex items-center text-sm font-medium text-primary mt-auto"
        >
          Learn More
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </CardContent>
    </Card>
  )
}
