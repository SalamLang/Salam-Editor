const CACHE_NAME = 'salam-cache-v1';

const ASSETS_TO_CACHE = [
    'site.webmanifest',

    // style
    'style/style.css',

    // script
    'script/script.js',

    // salam
    'salam-wa.js',
    'salam-wa.wasm',

    // images
    'images/android-chrome-192x192.png',
    'images/android-chrome-512x512.png',
    'images/apple-touch-icon.png',
    'images/favicon-16x16.png',
    'images/favicon-32x32.png',
    'images/favicon.ico',
];

// Install Event - Cache the defined assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(ASSETS_TO_CACHE);
            })
            .then(() => self.skipWaiting())
    );
});

// Activate Event - Clean up old caches
self.addEventListener('activate', event => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// Fetch Event - Serve cached assets, update cache when online
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            const fetchPromise = fetch(event.request).then(networkResponse => {
                if (networkResponse && networkResponse.status === 200) {
                    caches.open(CACHE_NAME).then(cache => {
                        cache.put(event.request, networkResponse.clone());
                    });
                }
                return networkResponse;
            }).catch(() => cachedResponse);
            
            return cachedResponse || fetchPromise;
        })
    );
});
