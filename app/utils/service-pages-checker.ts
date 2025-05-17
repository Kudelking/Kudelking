// This utility helps verify all service pages and images

export const serviceStructure = {
  "accent-walls": {
    title: "Accent Walls",
    subpages: ["wood-slat", "geometric"],
  },
  "board-and-batten": {
    title: "Board & Batten",
    subpages: ["traditional", "modern"],
  },
  "roman-plaster": {
    title: "Roman Plaster",
    subpages: ["smooth", "textured", "marmorino"],
  },
  "limewash-walls": {
    title: "Limewash Walls",
    subpages: ["smooth", "textured"],
  },
  "fireplace-buildouts": {
    title: "Fireplace Build-Outs",
    subpages: ["modern", "traditional"],
  },
  "media-walls": {
    title: "Media Walls",
    subpages: ["floating", "built-in"],
  },
  "brick-walls": {
    title: "Brick Walls",
    subpages: ["real", "faux"],
  },
  "decorative-ceilings": {
    title: "Decorative Ceilings",
    subpages: [],
  },
  "wallpaper-installation": {
    title: "Wallpaper Installation",
    subpages: ["feature", "full-room"],
  },
  "custom-projects": {
    title: "Custom Projects",
    subpages: [],
  },
}

// Critical images to verify across the site
export const criticalImages = [
  { path: "/logo.png", description: "Logo" },
  { path: "/modern-fireplace-buildout.png", description: "Modern Fireplace" },
  { path: "/tv-media-wall.png", description: "TV Media Wall" },
  { path: "/bedroom-wood-slat-wall.png", description: "Bedroom Wood Slat" },
  { path: "/geometric-accent-wall.png", description: "Geometric Accent Wall" },
  { path: "/full-wall-board-and-batten.png", description: "Full Wall Board & Batten" },
  { path: "/elegant-board-and-batten.png", description: "Elegant Board & Batten" },
  { path: "/modern-wood-slat-wall.png", description: "Modern Wood Slat Wall" },
  // Roman Plaster images with direct blob URLs
  {
    path: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kudelking_spacious_living_room_with_Roman_Plaster_accent_wall_d4cd77c5-8280-419f-88fb-d7d072386205_0-XQj2uA0B1VrryP5JYu61A7g0JqJlBS.png",
    description: "Roman Plaster Hero",
  },
  {
    path: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kudelking_spacious_living_room_with_Roman_Plaster_accent_wall_d4cd77c5-8280-419f-88fb-d7d072386205_0%C2%A0%E2%80%94%20%D1%81%D1%80%D0%B5%D0%B4%D0%BD%D0%B8%D0%B8%CC%86%20%D1%80%D0%B0%D0%B7%D0%BC%D0%B5%D1%80-hw7g92CrqO9AyqTwtXOht9IeTmFcU9.jpeg",
    description: "Roman Plaster Card Image",
  },
]
