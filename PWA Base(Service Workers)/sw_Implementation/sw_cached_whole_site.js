const cacheName = "v2";

self.addEventListener("install", (e) => {
  console.log("Service worker installed");
});

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

self.addEventListener("fetch", (e) => {
  console.log("Fetch Event running");

  // Caching All resources
  e.respondWith(
    fetch(e.request)
      .then((res) => {
        // make the copy/clone of the response
        const resClone = res.clone();
        // console.log(e.request)
        // open cache
        caches.open(cacheName).then((cache) => {
          cache.put(e.request, resClone);
        });
        return res;
      })
      .catch((err) => caches.match(e.request).then(res => res))
  );
});
