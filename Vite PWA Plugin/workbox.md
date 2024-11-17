# What is Workbox?
- Workbox is a library created by Google that helps developers manage caching with service workers in a more declarative and easier way. 
- Workbox uses the same service workers internally(application build garesi , we can see multiple sw files created by workbox).
- It provides a set of pre-configured strategies to help developers convert their website into PWA easily.
**Workbox automatically caches the static assests like HTML,CSS && JS etc files (without any manuall setup) ,but API , images and other assets must be manually cached**


# Caching through workbox
workbox: {
  runtimeCaching: [
    {
      urlPattern:  REGEX EXP for handling all APIS
      handler: "NetworkFirst"
      options: {
        cacheName: 'api-cache',
        cacheableResponse:[status:[0,200]],
        maxEntries: 100, // Limit the cache size
        maxAgeSeconds: 24 * 60 * 60, // Expire after a day
      },
    },
    {
      urlPattern:  REGEX EXP for handling all Images,videos (static assest)
      handler: "CacheFirst"
      options: {
        cacheName: 'assets-cache',
        cacheableResponse:[status:[0,200]],
        maxEntries: 100, // Limit the cache size
        maxAgeSeconds: 24 * 60 * 60, // Expire after a day
      },
    },
  ],
},

### Predefined Caching Strategies
- Cache First: Serves the cached response if available; otherwise, fetches from the network.
- Network First: Tries to fetch from the network first and uses the cache only if the network request fails.
- Stale While Revalidate: Serves from cache immediately but revalidates the cache in the background with a fresh request.