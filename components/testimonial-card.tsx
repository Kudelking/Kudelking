import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface TestimonialCardProps {
  quote: string
  author: string
  location: string
  rating: number
  className?: string
}

export function TestimonialCard({ quote, author, location, rating, className }: TestimonialCardProps) {
  return (
    <Card
      className={cn(
        "transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-visible relative",
        className,
      )}
    >
      <div className="absolute -top-5 left-6 bg-primary text-white p-2 rounded-full shadow-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="none"
          className="h-5 w-5"
        >
          <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.032.303-.406.7-.754 1.19-1.042l-.476-.92C7.79 9.156 7.032 9.684 6.438 10.41c-.596.726-.893 1.638-.893 2.74 0 .83.192 1.56.574 2.2.65 1.09 1.642 1.633 2.982 1.633.61 0 1.144-.117 1.6-.35.454-.234.827-.55 1.114-.94.288-.388.48-.814.574-1.28.094-.465.142-.93.142-1.388v-.17h-1.34zm7.863 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.812-.56-.12-1.07-.13-1.54-.028-.16-.95.09-1.626.41-2.032.3-.406.69-.754 1.19-1.042l-.48-.92c-.93.47-1.68.998-2.27 1.722-.59.723-.89 1.635-.89 2.735 0 .83.19 1.56.57 2.2.65 1.09 1.64 1.633 2.98 1.633.61 0 1.14-.117 1.6-.35.45-.234.82-.55 1.11-.94.29-.388.48-.814.58-1.28.09-.465.13-.93.13-1.388v-.17h-1.34z" />
        </svg>
      </div>
      <CardContent className="p-6 pt-8">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-5 w-5 transition-colors duration-300",
                i < rating ? "fill-primary text-primary" : "text-muted",
              )}
            />
          ))}
        </div>
        <p className="mb-4 italic text-gray-700 leading-relaxed">"{quote}"</p>
        <div className="border-t pt-4 mt-4">
          <p className="font-semibold text-gray-900">{author}</p>
          <p className="text-sm text-muted-foreground">{location}</p>
        </div>
      </CardContent>
    </Card>
  )
}
