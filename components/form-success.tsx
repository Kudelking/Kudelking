import { CheckCircle } from "lucide-react"

interface FormSuccessProps {
  message?: string
  className?: string
}

export function FormSuccess({ message, className = "" }: FormSuccessProps) {
  if (!message) return null

  return (
    <div className={`flex items-center gap-2 text-green-600 text-sm mt-1 ${className}`}>
      <CheckCircle className="h-4 w-4" />
      <span>{message}</span>
    </div>
  )
}
