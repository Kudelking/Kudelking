import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`flex items-center text-sm overflow-x-auto whitespace-nowrap py-2 ${className}`}
    >
      <ol className="flex items-center flex-nowrap min-w-full">
        <li className="flex items-center flex-shrink-0">
          <Link href="/" className="text-muted-foreground hover:text-foreground flex items-center">
            <Home className="h-3.5 w-3.5" />
            <span className="sr-only">Home</span>
          </Link>
          <ChevronRight className="h-4 w-4 text-muted-foreground mx-2 flex-shrink-0" aria-hidden="true" />
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={item.label} className="flex items-center flex-shrink-0">
              {item.href && !isLast ? (
                <>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground truncate max-w-[150px] sm:max-w-xs"
                  >
                    {item.label}
                  </Link>
                  <ChevronRight className="h-4 w-4 text-muted-foreground mx-2 flex-shrink-0" aria-hidden="true" />
                </>
              ) : (
                <span
                  className={`${isLast ? "font-medium text-foreground" : "text-muted-foreground"} truncate max-w-[150px] sm:max-w-xs`}
                >
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
