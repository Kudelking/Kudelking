import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { OptimizedImage } from "@/components/optimized-image"

export function RomanPlasterCard() {
  // Используем прямую ссылку на blob URL для изображения Roman Plaster
  const romanPlasterImage =
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kudelking_spacious_living_room_with_Roman_Plaster_accent_wall_d4cd77c5-8280-419f-88fb-d7d072386205_0-XQj2uA0B1VrryP5JYu61A7g0JqJlBS.png"

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg h-full flex flex-col">
      <div className="relative h-48">
        <OptimizedImage
          src={romanPlasterImage}
          alt="Roman Plaster Wall Finishes"
          fill
          className="w-full h-full"
          objectFit="cover"
          unoptimized={true} // Всегда используем unoptimized для внешних URL
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
