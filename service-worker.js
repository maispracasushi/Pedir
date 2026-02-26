const CACHE_NAME = "maispracasusshi-v1";

const urlsToCache = [
  "/Pedir/",
  "/Pedir/index.html",
  "/Pedir/manifest.json",
  "/Pedir/icon-192.png",
  "/Pedir/icon-512.png"
];

// instala
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// ativa
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(names => {
      return Promise.all(
        names.map(name => {
          if (name !== CACHE_NAME) return caches.delete(name);
        })
      );
    })
  );
  self.clients.claim();
});

// fetch
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
