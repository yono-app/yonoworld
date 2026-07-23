const CACHE_VERSION = 'v1.1.0';
const STATIC_CACHE = `yono-static-${CACHE_VERSION}`;
const DYNAMIC_CACHE = `yono-dynamic-${CACHE_VERSION}`;
const IMAGE_CACHE = 'image-cache-v1'; // Dedicated Image Cache as requested
const API_CACHE = `yono-api-${CACHE_VERSION}`;

const MAX_IMAGE_ENTRIES = 500;
const MAX_IMAGE_AGE_MS = 30 * 24 * 60 * 60 * 1000; // 30 Days

const PRECACHE_ASSETS = [
  '/',
  '/all-yono-games',
  '/offline',
  '/offline-placeholder.svg',
  '/logo.jpg',
  '/favicon.ico',
  '/site.webmanifest',
  '/android-chrome-192x192.png',
  '/android-chrome-512x512.png',
];

// Helper: Trim cache to max entries limit
async function trimCache(cacheName, maxItems) {
  try {
    const cache = await caches.open(cacheName);
    const keys = await cache.keys();
    if (keys.length > maxItems) {
      await cache.delete(keys[0]);
      await trimCache(cacheName, maxItems);
    }
  } catch (err) {
    console.warn('[SW Cache Trim Error]', err);
  }
}

// Helper: Clean up expired cache entries older than 30 days
async function cleanExpiredCache(cacheName) {
  try {
    const cache = await caches.open(cacheName);
    const keys = await cache.keys();
    const now = Date.now();

    for (const request of keys) {
      const response = await cache.match(request);
      if (response) {
        const dateHeader = response.headers.get('date');
        if (dateHeader) {
          const fetchTime = new Date(dateHeader).getTime();
          if (now - fetchTime > MAX_IMAGE_AGE_MS) {
            await cache.delete(request);
          }
        }
      }
    }
  } catch (err) {
    console.warn('[SW Expired Cache Error]', err);
  }
}

// Install Event - Pre-cache essential app shell assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS).catch((err) => {
        console.warn('[PWA SW] Pre-cache warning:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// Activate Event - Clean up stale caches & expire old images
self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => (name.startsWith('yono-') && !name.endsWith(CACHE_VERSION)) || (name.startsWith('image-cache-') && name !== IMAGE_CACHE))
            .map((name) => caches.delete(name))
        );
      }),
      cleanExpiredCache(IMAGE_CACHE),
      self.clients.claim(),
    ])
  );
});

// Message Event - Support instant SW update trigger
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// Helper: Check if request is an image
function isImageRequest(request, url) {
  if (request.destination === 'image') return true;
  if (url.pathname.startsWith('/_next/image')) return true;
  if (url.pathname.match(/\.(png|jpg|jpeg|webp|avif|svg|gif|ico)(\?.*)?$/i)) return true;
  return false;
}

// Fetch Event - Apply caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // 1. Never cache non-GET requests (POST, PUT, DELETE, Auth, Payments)
  if (request.method !== 'GET') {
    return;
  }

  // Bypass non-http protocols or chrome-extension URLs
  if (!url.protocol.startsWith('http')) {
    return;
  }

  // 2. Production Image Caching Strategy (Cache First with Background Update & Offline Placeholder)
  if (isImageRequest(request, url)) {
    event.respondWith(
      caches.open(IMAGE_CACHE).then((cache) => {
        return cache.match(request).then((cachedResponse) => {
          // If cached, return immediately & update in background when online
          if (cachedResponse) {
            fetch(request)
              .then((networkResponse) => {
                if (networkResponse && (networkResponse.status === 200 || networkResponse.type === 'opaque' || networkResponse.status === 0)) {
                  cache.put(request, networkResponse.clone());
                  trimCache(IMAGE_CACHE, MAX_IMAGE_ENTRIES);
                }
              })
              .catch(() => {});
            return cachedResponse;
          }

          // If not cached, fetch from network and cache
          return fetch(request)
            .then((networkResponse) => {
              if (networkResponse && (networkResponse.status === 200 || networkResponse.type === 'opaque' || networkResponse.status === 0)) {
                cache.put(request, networkResponse.clone());
                trimCache(IMAGE_CACHE, MAX_IMAGE_ENTRIES);
              }
              return networkResponse;
            })
            .catch(() => {
              // Return SVG Placeholder image if offline and image was never cached
              return caches.match('/offline-placeholder.svg');
            });
        });
      })
    );
    return;
  }

  // 3. API GET Requests -> Stale-While-Revalidate strategy
  if (url.pathname.includes('/get-all-game') || url.pathname.includes('/api/')) {
    event.respondWith(
      caches.open(API_CACHE).then((cache) => {
        return cache.match(request).then((cachedResponse) => {
          const fetchPromise = fetch(request)
            .then((networkResponse) => {
              if (networkResponse && networkResponse.status === 200) {
                cache.put(request, networkResponse.clone());
              }
              return networkResponse;
            })
            .catch(() => cachedResponse);

          return cachedResponse || fetchPromise;
        });
      })
    );
    return;
  }

  // 4. Static Assets (_next/static, CSS, JS, Fonts) -> Cache-First strategy
  if (
    url.pathname.includes('/_next/static/') ||
    request.destination === 'script' ||
    request.destination === 'style' ||
    request.destination === 'font'
  ) {
    event.respondWith(
      caches.open(STATIC_CACHE).then((cache) => {
        return cache.match(request).then((cachedResponse) => {
          if (cachedResponse) return cachedResponse;

          return fetch(request).then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              cache.put(request, networkResponse.clone());
            }
            return networkResponse;
          });
        });
      })
    );
    return;
  }

  // 5. Page Navigations (HTML) -> Network-First with Cache fallback & Offline fallback
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const copy = networkResponse.clone();
            caches.open(DYNAMIC_CACHE).then((cache) => cache.put(request, copy));
          }
          return networkResponse;
        })
        .catch(() => {
          return caches.match(request).then((cachedResponse) => {
            if (cachedResponse) return cachedResponse;
            return caches.match('/offline');
          });
        })
    );
    return;
  }

  // Default Fallback
  event.respondWith(
    caches.match(request).then((cached) => cached || fetch(request))
  );
});
