self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('playflix-cache').then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/styles.css',
                '/logo.jpg',
                '/si.jpg',
                '/movie.html'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
