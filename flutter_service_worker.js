'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "81aba3f59d20455dc50037c4cf97e28b",
"favicon.ico": "fa5bcd04f0b45e3eda53eeac8d435110",
"index.html": "b0b0da38395e147d59f45a116dfe0020",
"/": "b0b0da38395e147d59f45a116dfe0020",
"main.dart.js": "6fd468142781f79399ee04f808c47d46",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ef406b7f7ad0328e0fe3de1fa1aa8b8f",
"assets/AssetManifest.json": "bb0bb24f680282cd15d3d23c80ef7e53",
"assets/NOTICES": "031efc9795d3747fe07a2902160bacba",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "132e4cb7bd4ba33f9052cd3ce0a66e4c",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/assets/background2.png": "559be3098922f5a041375e775cdce3e6",
"assets/assets/background3.png": "c81ba8bbf8f6d882180d89630084518f",
"assets/assets/background1.png": "5ce6664f10bc536d529a6b0027e74bd7",
"assets/assets/logo1.png": "8700592c74acbc2c1613f32b016ad320",
"assets/assets/horizontal2.png": "4eb32789e51eabd27c6e7e2034be67a7",
"assets/assets/sushi/amaebitruffle.jpg": "6286084fc90bf33ac2112b6bba6684ca",
"assets/assets/sushi/spicysalmon.jpg": "e768369c23c2429593cddbfda5cebdf3",
"assets/assets/sushi/amondo.jpg": "39d4cba46c0338d58bb61ed9cee0e738",
"assets/assets/sushi/rbiunaghi.jpg": "400d9f37c95345531ce98874526f19ed",
"assets/assets/sushi/nigiritonno.jpg": "d1dbb110a5d33db2160cd3b35c980c17",
"assets/assets/sushi/nigirisuzuki.jpg": "b48c1c339c29daa12964592a5a4d4d17",
"assets/assets/sushi/rainbow_special.jpg": "f5f9abeb389a427ac75a9539e00c5991",
"assets/assets/sushi/spicytunna.jpg": "8c182c87542db015254302b49568b6ed",
"assets/assets/sushi/uramaki.JPG": "23a9d796e38ee5c097217e1f169a8ddf",
"assets/assets/sushi/nigirimisti.jpg": "d1bc479d7ed8b2da14258575c32a5637",
"assets/assets/sushi/nigirisake.jpg": "2b6810a9ba31340fc1b6e8c1c606ceaf",
"assets/assets/sushi/sakemaki.JPG": "3b91d1f79936a4cb064512c0c3699426",
"assets/assets/sushi/dragon.jpg": "086d1e99615a826ac1e2cd54a2f8560b",
"assets/assets/sushi/lobster.jpg": "8bf62a422467632cd899bae529d10bea",
"assets/assets/sushi/snow.jpg": "c40c9aa429a06cfa05d45d642b30ea42",
"assets/assets/sushi/ebiflo.jpg": "a54db01c28e0870849b60b6ae0a3713b",
"assets/assets/sushi/tartar_astice.jpg": "1c235abf20203bc817fb2c8be0f7033e",
"assets/assets/sushi/mangothai.jpg": "4be488f426737474cdaf08498d703fd4",
"assets/assets/sushi/salmonebiten.jpg": "6108a381a298a448e810f07efa2d1b09",
"assets/assets/sushi/meiroll.jpg": "5b90a536cbeafe9c544fd1b50464e67d",
"assets/assets/sushi/sake_carpaccio.jpg": "602f8245f5f5c5d593e952d020244a51",
"assets/assets/sushi/eby_tartar.jpg": "9584c5f5330b1098b8fcecd58a631a24",
"assets/assets/sushi/sakemaki-1.JPG": "3b91d1f79936a4cb064512c0c3699426",
"assets/assets/sushi/philadelphia.jpg": "c8c603650771c12f71a118e56c1d8b22",
"assets/assets/sushi/sashimi_misto.jpg": "25748470eb93f895d8c2fd651e672c04",
"assets/assets/sushi/imperialebiten.jpg": "7c7f433551d96f7b4c5eb96616381770",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
