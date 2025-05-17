import Link from "next/link"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PaginationProps {
  currentPage: number
  totalPages: number
  baseUrl: string
  className?: string
}

export function Pagination({ currentPage, totalPages, baseUrl, className = "" }: PaginationProps) {
  // Не отображаем пагинацию, если страница всего одна
  if (totalPages <= 1) return null

  // Функция для создания URL страницы
  const getPageUrl = (page: number) => {
    if (page === 1) return baseUrl
    return `${baseUrl}${baseUrl.includes("?") ? "&" : "?"}page=${page}`
  }

  // Определяем, какие страницы отображать
  const getPageNumbers = () => {
    const pages = []

    // Всегда показываем первую страницу
    pages.push(1)

    // Определяем начальную и конечную страницы для отображения
    const startPage = Math.max(2, currentPage - 1)
    const endPage = Math.min(totalPages - 1, currentPage + 1)

    // Добавляем многоточие после первой страницы, если нужно
    if (startPage > 2) {
      pages.push("ellipsis-start")
    }

    // Добавляем страницы в диапазоне
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i)
    }

    // Добавляем многоточие перед последней страницей, если нужно
    if (endPage < totalPages - 1) {
      pages.push("ellipsis-end")
    }

    // Всегда показываем последнюю страницу, если страниц больше одной
    if (totalPages > 1) {
      pages.push(totalPages)
    }

    return pages
  }

  const pageNumbers = getPageNumbers()

  return (
    <nav aria-label="Pagination" className={`flex justify-center ${className}`}>
      <ul className="flex items-center gap-1">
        {/* Кнопка "Предыдущая" */}
        <li>
          <Button
            variant="outline"
            size="sm"
            asChild={currentPage > 1}
            disabled={currentPage <= 1}
            className="flex items-center gap-1"
          >
            {currentPage > 1 ? (
              <Link href={getPageUrl(currentPage - 1)}>
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous page</span>
              </Link>
            ) : (
              <span>
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous page</span>
              </span>
            )}
          </Button>
        </li>

        {/* Номера страниц */}
        {pageNumbers.map((page, index) => (
          <li key={index}>
            {page === "ellipsis-start" || page === "ellipsis-end" ? (
              <span className="px-2">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">More pages</span>
              </span>
            ) : (
              <Button variant={currentPage === page ? "default" : "outline"} size="sm" asChild={currentPage !== page}>
                {currentPage !== page ? <Link href={getPageUrl(page as number)}>{page}</Link> : <span>{page}</span>}
              </Button>
            )}
          </li>
        ))}

        {/* Кнопка "Следующая" */}
        <li>
          <Button
            variant="outline"
            size="sm"
            asChild={currentPage < totalPages}
            disabled={currentPage >= totalPages}
            className="flex items-center gap-1"
          >
            {currentPage < totalPages ? (
              <Link href={getPageUrl(currentPage + 1)}>
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next page</span>
              </Link>
            ) : (
              <span>
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next page</span>
              </span>
            )}
          </Button>
        </li>
      </ul>
    </nav>
  )
}
