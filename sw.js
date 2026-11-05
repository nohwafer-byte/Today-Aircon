const CACHE = 'today-aircon-v1';
const SHELL = ['./', './index.html', './manifest.json', './icon.svg'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)));
  self.skipWaiting();
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  const req = e.request;
  const url = new URL(req.url);
  if (req.method !== 'GET') return;
  // Firebase data/auth calls are never cached
  if (/googleapis\.com|firebaseio\.com|identitytoolkit/.test(url.hostname)) return;
  // App pages: network first, fall back to cache
  if (req.mode === 'navigate' || url.origin === location.origin) {
    e.respondWith(fetch(req).then(r => {
      const copy = r.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return r;
    }).catch(() => caches.match(req).then(m => m || caches.match('./index.html'))));
    return;
  }
  // CDN libraries: cache first
  e.respondWith(caches.match(req).then(m => m || fetch(req).then(r => {
    const copy = r.clone(); caches.open(CACHE).then(c => c.put(req, copy)); return r;
  })));
});
