import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://accentwallspro.com"
  const currentDate = new Date()

  // High priority pages
  const mainPages = [
    { url: "", priority: 1.0, changeFreq: "weekly" as const },
    { url: "/services", priority: 0.9, changeFreq: "weekly" as const },
    { url: "/portfolio", priority: 0.9, changeFreq: "weekly" as const },
    { url: "/contact", priority: 0.8, changeFreq: "monthly" as const },
  ]

  // Service pages - high priority for SEO
  const servicePages = [
    { url: "/services/accent-walls", priority: 0.9 },
    { url: "/services/accent-walls/wood-slat", priority: 0.8 },
    { url: "/services/accent-walls/geometric", priority: 0.8 },
    { url: "/services/board-and-batten", priority: 0.9 },
    { url: "/services/board-and-batten/traditional", priority: 0.8 },
    { url: "/services/board-and-batten/modern", priority: 0.8 },
    { url: "/services/roman-plaster", priority: 0.9 },
    { url: "/services/roman-plaster/smooth", priority: 0.8 },
    { url: "/services/roman-plaster/textured", priority: 0.8 },
    { url: "/services/roman-plaster/marmorino", priority: 0.8 },
    { url: "/services/fireplace-buildouts", priority: 0.8 },
    { url: "/services/media-walls", priority: 0.8 },
    { url: "/services/limewash-walls", priority: 0.7 },
    { url: "/services/brick-walls", priority: 0.7 },
  ].map((page) => ({
    ...page,
    changeFreq: "monthly" as const,
  }))

  // Location pages - critical for local SEO
  const locationPages = [
    { url: "/locations", priority: 0.8 },
    { url: "/locations/bethesda", priority: 0.9 },
    { url: "/locations/silver-spring", priority: 0.9 },
    { url: "/locations/rockville", priority: 0.9 },
    { url: "/locations/montgomery-county", priority: 0.8 },
    { url: "/locations/washington-dc", priority: 0.8 },
  ].map((page) => ({
    ...page,
    changeFreq: "monthly" as const,
  }))

  const allPages = [...mainPages, ...servicePages, ...locationPages]

  return allPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: currentDate,
    changeFrequency: page.changeFreq,
    priority: page.priority,
  }))
}
