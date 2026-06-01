const CACHE_NAME = "metar-entrenador-cache-v1";
const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./style.css",
  "./app.js",
  "./logo.png",
  "./manifest.json"
];

// Instalar Service Worker y precachear archivos estáticos
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[Service Worker] Precaching app shell");
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// Activar Service Worker y limpiar cachés antiguas
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("[Service Worker] Clearing old cache:", cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Interceptar peticiones para manejo offline inteligente
self.addEventListener("fetch", (event) => {
  const requestUrl = new URL(event.request.url);

  // Lógica especial para las APIs en tiempo real (NOAA y proxies CORS) -> Network-First
  if (
    requestUrl.hostname.includes("aviationweather.gov") ||
    requestUrl.hostname.includes("codetabs.com") ||
    requestUrl.hostname.includes("allorigins.win")
  ) {
    event.respondWith(
      fetch(event.request)
        .catch(() => {
          // Si falla la red en tiempo real, devolvemos una respuesta offline amigable
          console.log("[Service Worker] Real-time request failed, network offline");
          return new Response(
            JSON.stringify([{
              rawOb: "METAR XXXX 000000Z 00000KT 0000 // //////// 00/00 Q0000 = OFFLINE - Reclama conexión para consultar aeródromos reales."
            }]),
            { headers: { "Content-Type": "application/json" } }
          );
        })
    );
  } else {
    // Para recursos estáticos y fuentes de Google -> Cache-First
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        // Si no está en caché, buscar en red y guardar en caché para la próxima vez
        return fetch(event.request).then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== "basic") {
            return networkResponse;
          }

          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return networkResponse;
        }).catch(() => {
          // Fallback en caso de que todo falle y sea una navegación HTML
          if (event.request.headers.get("accept").includes("text/html")) {
            return caches.match("./index.html");
          }
        });
      })
    );
  }
});
