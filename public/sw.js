const CACHE_NAME = "accent-walls-pro-v1"
const urlsToCache = [
  "/",
  "/services",
  "/portfolio",
  "/contact",
  "/logo.png",
  "/wood-slat-living-room.png",
  "/modern-fireplace-buildout.png",
  "/tv-media-wall.png",
]

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)))
})

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response
      }
      return fetch(event.request)
    }),
  )
})
