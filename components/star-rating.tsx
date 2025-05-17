import { Star, StarHalf } from "lucide-react"

interface StarRatingProps {
  rating: number
  maxRating?: number
  size?: "sm" | "md" | "lg"
  showValue?: boolean
  className?: string
}

export function StarRating({ rating, maxRating = 5, size = "md", showValue = false, className = "" }: StarRatingProps) {
  // Определяем размер звезд в зависимости от параметра size
  const starSize = size === "sm" ? "h-3 w-3" : size === "lg" ? "h-6 w-6" : "h-4 w-4"

  // Создаем массив для отображения звезд
  const stars = []

  // Заполняем массив звездами
  for (let i = 1; i <= maxRating; i++) {
    if (i <= rating) {
      // Полная звезда
      stars.push(<Star key={i} className={`${starSize} fill-primary text-primary`} />)
    } else if (i - 0.5 <= rating) {
      // Половина звезды
      stars.push(<StarHalf key={i} className={`${starSize} fill-primary text-primary`} />)
    } else {
      // Пустая звезда
      stars.push(<Star key={i} className={`${starSize} text-muted-foreground`} />)
    }
  }

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="flex">{stars}</div>
      {showValue && <span className="ml-1 text-sm font-medium">{rating.toFixed(1)}</span>}
    </div>
  )
}
