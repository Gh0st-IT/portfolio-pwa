var cacheName = 'itst-pwa';
var filesToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/main.js',
  '/images/anime.png',
  '/images/fb.png',
  '/images/gaming.png',
  '/images/history.png',
  '/images/mp.png',
  '/images/profile.jpg',
  '/images/gmail.png',
  '/images/lang/c.png',
  '/images/lang/js.png',
  '/images/lang/php.png',
  '/images/movies/al.jpg',
  '/images/movies/f13.jfif',
  '/images/movies/id.jpg',
  '/images/movies/pr.jpg',
  '/images/movies/rb.jpg',
  '/images/movies/st.jpg'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
