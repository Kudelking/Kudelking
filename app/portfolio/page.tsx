import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { ProjectGallery } from "@/components/project-gallery"

export const metadata = {
  title: "Портфолио премиальных акцентных стен | 100+ проектов | Accent Walls Pro",
  description:
    "Просмотрите наше обширное портфолио акцентных стен, Board & Batten, римской штукатурки и деревянных реек в Вашингтоне, Мэриленде и Вирджинии. Реальные преобразования клиентов.",
  keywords:
    "портфолио акцентных стен, галерея board and batten, проекты римской штукатурки, деревянные рейки, облицовка каминов, медиа стены, портфолио дизайна интерьера",
  openGraph: {
    title: "Портфолио премиальных акцентных стен | 100+ завершенных проектов",
    description: "Просмотрите наше обширное портфолио акцентных стен, board & batten, римской штукатурки в DC, MD, VA",
    images: [
      {
        url: "/floating-tv-media-wall.png",
        width: 1200,
        height: 630,
        alt: "Портфолио Accent Walls Pro - Премиальные настенные инсталляции",
      },
    ],
    type: "website",
  },
}

// ИСПРАВЛЕННЫЕ ПРОЕКТЫ с правильными путями к существующим изображениям
const projects = [
  // TV WALLS / MEDIA WALLS - Используем существующие изображения ТВ стен
  {
    id: "floating-tv-modern",
    title: "Парящая ТВ стена с LED подсветкой",
    location: "Arlington, VA",
    image: "/floating-tv-media-wall.png",
    category: "tv walls",
    description:
      "Современная парящая ТВ стена с чистыми линиями, скрытым кабель-менеджментом и интегрированной LED подсветкой для элегантного развлекательного решения.",
  },
  {
    id: "builtin-tv-storage",
    title: "Встроенная ТВ стена с кастомным хранением",
    location: "Rockville, MD",
    image: "/tv-media-wall.png",
    category: "tv walls",
    description:
      "Кастомная встроенная ТВ стена с интегрированными шкафами и полками, максимизирующая функциональность при сохранении чистого внешнего вида.",
  },
  {
    id: "tv-wall-entertainment",
    title: "Развлекательный центр с ТВ стеной",
    location: "Bethesda, MD",
    image: "/built-in-entertainment-center.png",
    category: "tv walls",
    description:
      "Полный развлекательный центр с ТВ стеной, включающий встроенные полки и скрытый кабель-менеджмент для бесшовной интеграции.",
  },

  // BOARD & BATTEN - Используем существующие изображения board and batten
  {
    id: "board-batten-white-dining",
    title: "Классический белый Board & Batten в столовой",
    location: "Silver Spring, MD",
    image: "/white-board-and-batten-dining-room.png",
    category: "board & batten",
    description:
      "Элегантная белая обшивка board and batten в формальной столовой с классическими пропорциями и вневременной привлекательностью.",
  },
  {
    id: "board-batten-full-wall",
    title: "Полная стена Board & Batten",
    location: "Chevy Chase, MD",
    image: "/full-wall-board-and-batten.png",
    category: "board & batten",
    description:
      "Полная стена board and batten инсталляция, создающая драматические архитектурные детали и визуальный интерес в этой элегантной прихожей.",
  },
  {
    id: "board-batten-elegant",
    title: "Элегантный Board & Batten",
    location: "Gaithersburg, MD",
    image: "/elegant-board-and-batten.png",
    category: "board & batten",
    description:
      "Изысканная board and batten инсталляция с классическими пропорциями, добавляющая архитектурную элегантность в это жилое пространство.",
  },

  // FIREPLACE BUILDOUTS - Используем существующие изображения каминов
  {
    id: "fireplace-modern-buildout",
    title: "Современная облицовка камина",
    location: "Potomac, MD",
    image: "/modern-fireplace-buildout.png",
    category: "fireplaces",
    description:
      "Современная облицовка камина от пола до потолка с гладким линейным газовым камином в качестве центрального элемента.",
  },
  {
    id: "fireplace-wood-stone",
    title: "Камин с деревом и камнем",
    location: "McLean, VA",
    image: "/modern-fireplace-wood-stone.png",
    category: "fireplaces",
    description:
      "Современный дизайн камина, сочетающий натуральное дерево и каменные элементы для теплого, изысканного центрального элемента гостиной.",
  },
  {
    id: "fireplace-slim-modern",
    title: "Современный тонкий камин",
    location: "Alexandria, VA",
    image: "/modern-slim-fireplace.png",
    category: "fireplaces",
    description:
      "Элегантный тонкий камин с минималистским дизайном, создающий изысканное современное заявление в этом жилом пространстве.",
  },

  // LIMEWASH - Используем существующие изображения лаймвош
  {
    id: "limewash-beige-soft",
    title: "Мягкий бежевый лаймвош",
    location: "Reston, VA",
    image: "/soft-beige-limewash.png",
    category: "limewash",
    description:
      "Элегантные мягкие бежевые стены лаймвош создают спокойную, изысканную атмосферу в этой роскошной гостиной.",
  },
  {
    id: "limewash-smooth-wall",
    title: "Гладкая стена лаймвош",
    location: "Great Falls, VA",
    image: "/smooth-limewash-wall.png",
    category: "limewash",
    description:
      "Спокойные стены лаймвош с гладкой отделкой, создающие успокаивающую атмосферу спа в этом минималистском дизайне.",
  },
  {
    id: "limewash-rustic",
    title: "Рустикальный лаймвош",
    location: "Fairfax, VA",
    image: "/rustic-limewash-wall.png",
    category: "limewash",
    description:
      "Текстурированная рустикальная стена лаймвош, привносящая аутентичный средиземноморский характер в это элегантное пространство.",
  },

  // WOOD SLAT WALLS - Используем существующие изображения деревянных реек
  {
    id: "wood-slat-bedroom",
    title: "Деревянные рейки в спальне",
    location: "Vienna, VA",
    image: "/bedroom-wood-slat-wall.png",
    category: "wood slats",
    description:
      "Теплая акцентная стена из деревянных реек, создающая уютный фокус за кроватью в этой современной спальне.",
  },
  {
    id: "wood-slat-modern",
    title: "Современная стена из деревянных реек",
    location: "Tysons, VA",
    image: "/modern-wood-slat-wall.png",
    category: "wood slats",
    description:
      "Современная стена из деревянных реек, добавляющая естественную текстуру и тепло в этот современный дизайн интерьера.",
  },
  {
    id: "wood-slat-living",
    title: "Деревянные рейки в гостиной",
    location: "Herndon, VA",
    image: "/wood-slat-living-room.png",
    category: "wood slats",
    description:
      "Элегантная стена из деревянных реек в гостиной, создающая драматическую атмосферу и архитектурный интерес.",
  },

  // ROMAN PLASTER - Используем существующие изображения римской штукатурки
  {
    id: "roman-plaster-luxury-bedroom",
    title: "Роскошная римская штукатурка в спальне",
    location: "Chevy Chase, MD",
    image: "/luxury-roman-plaster-bedroom.png",
    category: "roman plaster",
    description:
      "Изысканная римская штукатурка акцентная стена с тонкими вариациями, создающая элегантную глубину в этом роскошном жилом пространстве.",
  },
  {
    id: "roman-plaster-home-office",
    title: "Римская штукатурка в домашнем офисе",
    location: "Potomac, MD",
    image: "/home-office-roman-plaster.png",
    category: "roman plaster",
    description:
      "Профессиональная римская штукатурка в домашнем офисе, создающая изысканную рабочую атмосферу с европейским шармом.",
  },

  // ACCENT WALLS - Используем существующие изображения акцентных стен
  {
    id: "accent-wall-geometric",
    title: "Геометрическая акцентная стена",
    location: "Washington, DC",
    image: "/geometric-accent-wall.png",
    category: "accent walls",
    description:
      "Смелая геометрическая акцентная стена с угловыми элементами дизайна, создающая вдохновляющий фон для этого современного пространства.",
  },
  {
    id: "accent-wall-project",
    title: "Кастомная акцентная стена",
    location: "Arlington, VA",
    image: "/accent-wall-project.png",
    category: "accent walls",
    description:
      "Уникальная кастомная акцентная стена, разработанная специально для этого пространства с учетом индивидуальных предпочтений клиента.",
  },

  // BRICK WALLS - Создаем проекты с placeholder изображениями
  {
    id: "brick-wall-exposed",
    title: "Открытая кирпичная стена",
    location: "Frederick, MD",
    image: "/placeholder.svg?height=400&width=600&query=exposed+brick+accent+wall+loft+style",
    category: "brick walls",
    description:
      "Восстановленная открытая кирпичная акцентная стена с индустриальным освещением, празднующая исторический характер этого преобразованного лофт пространства.",
  },
  {
    id: "brick-wall-painted",
    title: "Окрашенная кирпичная стена",
    location: "Annapolis, MD",
    image: "/placeholder.svg?height=400&width=600&query=painted+white+brick+wall+farmhouse+style",
    category: "brick walls",
    description:
      "Классическая кирпичная стена, окрашенная в четкий белый цвет для гостиной в фермерском стиле, сохраняя текстуру при осветлении пространства.",
  },

  // WALLPAPER - Используем существующие изображения обоев
  {
    id: "wallpaper-luxury-feature",
    title: "Роскошные обои",
    location: "Cabin John, MD",
    image: "/luxury-wallpaper-feature-wall.png",
    category: "wallpaper",
    description: "Изысканные обои, создающие элегантный фокус в этом формальном пространстве.",
  },
  {
    id: "wallpaper-bedroom",
    title: "Обои в спальне",
    location: "Falls Church, VA",
    image: "/bedroom-wallpaper-installation.png",
    category: "wallpaper",
    description: "Элегантная установка обоев в спальне, создающая уютную и стильную атмосферу для отдыха.",
  },

  // CEILING DECORATION - Создаем проекты с placeholder изображениями
  {
    id: "ceiling-coffered",
    title: "Кессонный потолок",
    location: "Fairfax, VA",
    image: "/placeholder.svg?height=400&width=600&query=coffered+ceiling+home+office+elegant",
    category: "ceilings",
    description:
      "Кастомный кессонный потолок с детальной лепниной, добавляющий архитектурную изысканность и визуальную высоту в этот элегантный офис.",
  },
  {
    id: "ceiling-tray",
    title: "Подвесной потолок",
    location: "Herndon, VA",
    image: "/placeholder.svg?height=400&width=600&query=tray+ceiling+master+bedroom+crown+molding",
    category: "ceilings",
    description:
      "Элегантный подвесной потолок с карнизом и встроенным освещением, создающий роскошный фокус в этой главной спальне.",
  },
]

export default function PortfolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">Accent Walls Pro</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Главная
            </Link>
            <Link href="/services" className="text-sm font-medium transition-colors hover:text-primary">
              Услуги
            </Link>
            <Link href="/portfolio" className="text-sm font-medium transition-colors hover:text-primary">
              Portfolio
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              О нас
            </Link>
            <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
              Контакты
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-12 md:py-16 lg:py-24 bg-muted/30 overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 md:mb-6">
                Портфолио премиальных акцентных стен
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 px-4">
                Исследуйте нашу коллекцию из 100+ премиальных инсталляций акцентных стен по всему Вашингтону, Мэриленду
                и Вирджинии. Каждая категория демонстрирует нашу специализированную экспертизу в преобразовании
                пространств.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-foreground transition-colors">
                  Главная
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span>Портфолио</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 lg:py-24">
          <div className="container px-4 md:px-6">
            <div className="mb-8 md:mb-12 text-center">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">Просмотр по специализации</h2>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground mb-6 md:mb-8 px-4">
                Каждая категория представляет уникальные проекты, демонстрирующие нашу экспертизу в этой конкретной
                области
              </p>
            </div>
            <ProjectGallery projects={projects} />
          </div>
        </section>

        {/* Portfolio Stats Section */}
        <section className="py-8 md:py-12 lg:py-16 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 text-center">
              <div className="p-4">
                <div className="text-xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 md:mb-2">100+</div>
                <div className="text-xs md:text-sm lg:text-base text-muted-foreground">Уникальных проектов</div>
              </div>
              <div className="p-4">
                <div className="text-xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 md:mb-2">10</div>
                <div className="text-xs md:text-sm lg:text-base text-muted-foreground">
                  Специализированных категорий
                </div>
              </div>
              <div className="p-4">
                <div className="text-xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 md:mb-2">50+</div>
                <div className="text-xs md:text-sm lg:text-base text-muted-foreground">Обслуживаемых городов</div>
              </div>
              <div className="p-4">
                <div className="text-xl md:text-3xl lg:text-4xl font-bold text-primary mb-1 md:mb-2">5★</div>
                <div className="text-xs md:text-sm lg:text-base text-muted-foreground">Средний рейтинг</div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-8 md:py-12 lg:py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-center">
                Наши портфолио специализации
              </h2>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                <div className="p-4">
                  <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-2 md:mb-3">ТВ и медиа стены</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Кастомные развлекательные решения со скрытым кабель-менеджментом, встроенным хранением и
                    современными парящими дизайнами.
                  </p>
                </div>
                <div className="p-4">
                  <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-2 md:mb-3">Board & Batten</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Классическая обшивка и полностенные инсталляции в столовых, прихожих и спальнях с вневременной
                    привлекательностью.
                  </p>
                </div>
                <div className="p-4">
                  <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-2 md:mb-3">Облицовка каминов</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Каменные, кирпичные и плиточные облицовки каминов от традиционных каминных полок до современных
                    линейных дизайнов.
                  </p>
                </div>
                <div className="p-4">
                  <h3 className="text-base md:text-lg lg:text-xl font-semibold mb-2 md:mb-3">Артизанские покрытия</h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    Ручная нанесенная лаймвош, римская штукатурка и специальные покрытия, привносящие европейское
                    мастерство в ваш дом.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-4 md:py-6 lg:py-8 border-t">
        <div className="container px-4 md:px-6 text-center">
          <p className="text-xs md:text-sm text-muted-foreground">
            © {new Date().getFullYear()} Accent Walls Pro. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  )
}
