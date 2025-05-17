"use client"

import Link from "next/link"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface TagProps {
  label: string
  href?: string
  onRemove?: () => void
  variant?: "default" | "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
  className?: string
}

export function Tag({ label, href, onRemove, variant = "default", size = "md", className = "" }: TagProps) {
  // Определяем классы в зависимости от варианта
  const variantClasses = {
    default: "bg-muted text-muted-foreground hover:bg-muted/80",
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "bg-background border border-input text-foreground hover:bg-accent hover:text-accent-foreground",
  }

  // Определяем классы в зависимости от размера
  const sizeClasses = {
    sm: "text-xs py-0.5 px-2",
    md: "text-sm py-1 px-3",
    lg: "text-base py-1.5 px-4",
  }

  const baseClasses = "inline-flex items-center rounded-full font-medium transition-colors"

  const TagContent = () => (
    <>
      <span className="truncate max-w-[200px]">{label}</span>
      {onRemove && (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            onRemove()
          }}
          className="ml-1 rounded-full hover:bg-background/20 p-0.5 flex-shrink-0"
        >
          <X className={size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4"} />
          <span className="sr-only">Remove {label}</span>
        </button>
      )}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}>
        <TagContent />
      </Link>
    )
  }

  return (
    <span className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}>
      <TagContent />
    </span>
  )
}
