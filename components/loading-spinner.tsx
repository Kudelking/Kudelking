interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  className?: string
}

export function LoadingSpinner({ size = "md", className = "" }: LoadingSpinnerProps) {
  const sizeClass = size === "sm" ? "w-4 h-4 border-2" : size === "lg" ? "w-8 h-8 border-4" : "w-6 h-6 border-3"

  return (
    <div className={`inline-block ${className}`} aria-label="Loading">
      <div className={`${sizeClass} border-t-primary rounded-full animate-spin`}></div>
    </div>
  )
}
