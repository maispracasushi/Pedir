self.addEventListener("install", function(event) {
  console.log("Service Worker instalado");
});

self.addEventListener("activate", function(event) {
  console.log("Service Worker ativo");
});

self.addEventListener("fetch", function(event) {
});
