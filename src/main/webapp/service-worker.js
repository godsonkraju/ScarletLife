var cacheName = 'the-scarlet-life';
var filesToCache = [
	'/',
	'/index.html',
	'/css/style.css',
	'/css/materialdesignicons.min.css',
	'/css/GameOfLife.css',
	'/css/progressbars.css',
	'/css/modal.css',
	'/materialize-src/sass/materialize.css',
	'/materialize-src/sass/style.css',
	'/materialize-src/sass/earth2.gif',
	'/images/guest.png',
	'/images/galaxy.jpg',
	'/js/LevelBuilder.js',
	'/js/Game.js',
	'/js/Hammer.js',
	'/js/Music.js',
	'/js/init.js',
	'/js/controllers/route.js',
	'/js/controllers/mainController.js',
	'/js/controllers/exploreController.js',
	'/js/controllers/favoritesController.js',
	'/js/controllers/myLevelsController.js',
	'/js/controllers/levelSelectController.js',
	'/js/controllers/googleLoginController.js',
	'/js/controllers/levelFormsController.js',
	'/js/controllers/contactController.js',
	'/js/modal.js',
	'/manifest.json',
	'/materialize-src/fonts/roboto/Roboto-Medium.woff2',
	'/materialize-src/fonts/roboto/Roboto-Regular.woff2',
	'/materialize-src/fonts/roboto/Roboto-Light.woff2',
	'/materialize-src/fonts/roboto/Roboto-Thin.woff2',
	'/materialize-src/fonts/roboto/Roboto-Thin.woff',
	'/materialize-src/fonts/roboto/Roboto-Thin.ttf',
	'/node_modules/angular-route/angular-route.js',
	'/pages/middle-card-about.html',
	'/pages/middle-card-admin.html',
	'/pages/middle-card-build.html',
	'/pages/middle-card-contact.html',
	'/pages/middle-card-create.html',
	'/pages/middle-card-explore.html',
	'/pages/middle-card-favorites.html',
	'/pages/middle-card-help.html',
	'/pages/middle-card-index.html',
	'/pages/middle-card-level-select.html',
	'/pages/middle-card-login.html',
	'/pages/middle-card-my-levels.html',
	'/pages/middle-card-play.html',
	'/pages/middle-card-terms.html',
	'/data/reviews.json',
	'/images/us2.png',
	'/music/ScarletOne.mp3'
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});



self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});



self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});