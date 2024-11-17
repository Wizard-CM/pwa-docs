const cacheName = "v1";
const cacheAssets = ["index.html", "about.html", "/style/style.css"];

// attach "install" eventListener to the serviceWorker itself
self.addEventListener("install", (e) => {
  console.log("Service worker installed");

  // caching some resources
  e.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        console.log("cache opened");
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

// attach "activate" eventListener to the serviceWorker itself
self.addEventListener("activate", function (e) {
  console.log("Service worker activated");
  // Removing un-used Cache Logic
  e.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (cache) {
          if (cache != cacheName) return caches.delete(cache);
        })
      );
    })
  );
});

// each fetch requests that happens in the root level , goes through this "fetch" event acts as a middleware
self.addEventListener("fetch", (e) => {
  console.log("Fetch Event running");

  if (!navigator.onLine) {
    e.respondWith(
      fetch(e.request)
        // when there is no network , then ".catch" will be called
        .catch(() => caches.match(e.request))
    );
  }
});
