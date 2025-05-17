import { Star } from "lucide-react"
import { OptimizedImage } from "@/components/optimized-image"

interface EnhancedTestimonialProps {
  quote: string
  author: string
  location: string
  rating: number
  image: string
  projectType: string
}

export function EnhancedTestimonial({ quote, author, location, rating, image, projectType }: EnhancedTestimonialProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden h-full flex flex-col">
      <div className="relative h-48">
        <OptimizedImage
          src={image}
          alt={`${projectType} project by ${author}`}
          fill
          className="w-full h-full"
          objectFit="cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
          ))}
        </div>
        <p className="text-muted-foreground mb-4 italic line-clamp-4">"{quote}"</p>
        <div className="mt-auto">
          <p className="font-medium">{author}</p>
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">{location}</p>
            <span className="text-xs bg-muted px-2 py-1 rounded-full">{projectType}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
