const CACHE_NAME = 'salam-cache-v1';
const ASSETS_TO_CACHE = [
    'site.webmanifest',

    // style
    'style/style.css',

    // script
    'script/script.js',

    // salam
    'salam/salam-wa.js',
    'salam/salam-wa.wasm',

    // images
    'images/android-chrome-192x192.png',
    'images/android-chrome-512x512.png',
    'images/apple-touch-icon.png',
    'images/favicon-16x16.png',
    'images/favicon-32x32.png',
    'images/favicon.ico',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(ASSETS_TO_CACHE);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(cachedResponse => {
            return cachedResponse || fetch(event.request);
        })
    );
});
