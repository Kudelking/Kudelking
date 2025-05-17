import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://accentwallspro.com"

  // Main pages
  const routes = ["", "/services", "/portfolio", "/about", "/blog", "/contact", "/locations", "/faq"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  // Service pages
  const serviceRoutes = [
    "/services/accent-walls",
    "/services/board-and-batten",
    "/services/limewash-walls",
    "/services/brick-walls",
    "/services/fireplace-buildouts",
    "/services/media-walls",
    "/services/decorative-ceilings",
    "/services/wallpaper-installation",
    "/services/custom-projects",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Blog posts
  const blogRoutes = [
    "/blog/accent-walls-montgomery-county",
    "/blog/accent-wall-trends-2025",
    "/blog/media-wall-living-room-upgrade",
    "/blog/board-batten-vs-limewash",
    "/blog/fireplace-buildouts-home-value",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  // Location-specific pages
  const locationRoutes = [
    "/locations/montgomery-county",
    "/locations/anne-arundel-county",
    "/locations/howard-county",
    "/locations/frederick-county",
    "/locations/washington-dc",
    "/locations/bethesda",
    "/locations/silver-spring",
    "/locations/rockville",
    "/locations/chevy-chase",
    "/locations/north-bethesda",
    "/locations/gaithersburg",
    "/locations/annapolis",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...routes, ...serviceRoutes, ...blogRoutes, ...locationRoutes]
}
