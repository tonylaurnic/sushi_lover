'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "81aba3f59d20455dc50037c4cf97e28b",
"favicon.ico": "fa5bcd04f0b45e3eda53eeac8d435110",
"index.html": "f15a5f7f6df144f68ea51c03b831d2f2",
"/": "f15a5f7f6df144f68ea51c03b831d2f2",
"main.dart.js": "c291f9a1e78e943ccca0f3a544716b71",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ef406b7f7ad0328e0fe3de1fa1aa8b8f",
".git/config": "a4a3f59cf5a5558ecfcb0099b1e09f8c",
".git/objects/61/40f05d9c40a65787cd1b2594108b942986786f": "47d2880f7ab2fd1d0aec39ef3da5646a",
".git/objects/0c/3107c79168cf6035967707553ea3a5b15bdb3c": "9b56455ce3b7c69cc06dee1c9f9660cd",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/3b/6483db7d982e1c5ac8b8385984a3b0e3e1020d": "aa7d12c2bc1987c1f163d56daf5914a5",
".git/objects/6f/e2e2d86e4ef08b492e92c732a0f1b96d5ec912": "b9f2a9dc3da1da6ae173ab071145275a",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/9b/5b4e07ac90840150e95319bc2d5184d1bc9656": "d9fb1d509afae8dd7c65bb6ae09308bd",
".git/objects/04/81dab2975a2c062ff888628d8f9eb6ad9e0290": "f6382cc610f15252503e6027a31ba9f0",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3c/533d564e6759e3153024d3e22a88f961a1df0e": "6b751ed0aad2077448a44f520db2e95b",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/05/8680d39453841118cf253a18d2f912de02d936": "ca88e362cffdca2ebb5bb349ca8773f2",
".git/objects/02/9efcdfd31ca9275990ef8f5595187553a44afe": "2613b629040ee4e1b56dad37509300d3",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/df/8e64b2e04791f8c1ba49adbbad764acbc52199": "17a2408cf440ba97ea68dc3ab524cee4",
".git/objects/da/3852616c58f402a1ca964ee295854d6f5debc6": "018795df849401403b5670d0610210f6",
".git/objects/bd/8c39e5ef09c560a0727ad00f9138a7d52904b1": "658c75d269fbf9bf60b25f4f7eb78602",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/b16b97af8d8ee4ef0582a5a9a55eb5bdfe0059": "c57de7abe6453937101939c19ec9a7b5",
".git/objects/ae/fa94b4bc3f5a7fb003a6671ef41aaa567edd30": "7735a62607338c74be63fcc62eb4218d",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ab/ebaa36712359976890890508067b20b5d93d8f": "125103d8640fa9c27e0a927af6931324",
".git/objects/e5/0a6c19bee8d3d25b1e3578a07a017d4ecd5311": "c82e96dd14346c4182c707b1dff2eea8",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fd/b95aef9dcb700eb975e8047c3a54316c8d7d3d": "577046124e7cf14ce1f8872b3f94bf8a",
".git/objects/e4/8043c297dfef6b4626d18000e700997d2b86ea": "aa70c46b5fa20123cca5726f1f537a07",
".git/objects/e4/51a28786b599dbeaf16d22cfc6d7455bcfc93f": "3aef99b2457eeba6dfef2a345969b56c",
".git/objects/c6/6fb7890cf3c0ad848836e076435f61407cec41": "3f911dd3cac8764635b6c23557a43dab",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/7c/a759b8f8c90d8b8f86d2e66efdf69fb66fd555": "78948e052f1b0db63ed9714dafac5a18",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/a93ae36346352fcc4f95b3aa53b1093b5d4908": "a92c25694e0733c41dd355f45b6a8f5d",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/86/fd6560ae4267ff7771e96308e7440d926d74c1": "326a117af07229da83c9cfad9ed05e6c",
".git/objects/86/0ee6653a6989b5d9468baef5d9b86f182d7441": "ddc887887dd8880d6b726b5a9057cdc9",
".git/objects/44/c1b121543ba02db2e3a1176acdaa847d37be1b": "6c353c7f5a7ab7c287780d72199926a3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5c/4d1162113a7643f11dc921ea1866f2537539f9": "12c846387bd59c51b279d267fd3777bc",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/53/ef9587d2894b40c02edbcfd84809a278388377": "0d8ff61c448b73c2e05d451c851fabef",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/6c/a4bb15b21b29c80dece021a01ba0fb8e0f41d9": "a8879ba213366c50c5b7a72fc483a546",
".git/objects/39/eb1ae534a7c13003691cca465abc217d3db9e9": "8bedd3d71fb7e6515262402b08bdb799",
".git/objects/52/563bc935563999d3955852754f15562099e908": "b9fbe54e349746c9dfb484800ea3c278",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/aa/799de08b42c13d7f7bbecf6c4743e228d24341": "3459c8558912db8df5585285a137cc18",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/e34d46ecb42e49ee842473ef2068488c64b0ab": "4d206494723c1265974e298bfadab624",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/19003b2e4968af1406a35ebf7194c44c374af2": "aba5f87a4f1922a8150688c1bb8b102b",
".git/objects/cc/41943e903d3680e5c5315529634f175c5c6afc": "51bd95e8c44ab6dbb9f973beac280cca",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2d/a51dc1922e84016a2a77c3d967cc9df1b4b8af": "b5ea8c3c4db99015eb6f544444e6bd64",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/4a/ad56611d37c9d3ca692a415a3a3408c38d3953": "f9c7ac0e6a16122acccd5a9f9709924e",
".git/objects/4a/7261f648e84486111647c71875103d3bb48ffb": "2b66d6583923164dcfe8d64b1c4194cf",
".git/objects/23/401e6fc6e62095c81f787f3890960b7a23b3aa": "da13a59ccfb5d590a456300cd2daf16a",
".git/objects/15/02819588a3f99e44cc80144205705bdeebe19a": "7a40a5aec94f00e0d35005301013d933",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/76/77f1ca3d3225f5521fe76db8023ef05a1c3d74": "bdb8f445366a1029778ad28aaf9a9c31",
".git/objects/82/6e3286183a6468a3b6a67deb0e4f8bf8fc0a8c": "111d2bc6fc5946036b3d69337aa79496",
".git/objects/47/e38bbb7722e5a54fd7eeeb05ac0f281c44ed78": "8c2538a02f610c08c724b902036c75b0",
".git/objects/78/dc58c09394689ddc5553a836a1f9e3122aa837": "0bbc37e904c05cdeaaad930b2e787e82",
".git/objects/7a/d9ba9ab0db577a9d92a2d18b57d83417c7abd2": "fcc12ed44630dd01472328ea6cc69b3a",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8e/5ad045b19b548b3274479237bfd9e63cdb2d12": "6af637a137e7fc04bab60f6c45674780",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ce0250292bd2f9bb91d521e6651c2d29",
".git/logs/refs/heads/master": "ce0250292bd2f9bb91d521e6651c2d29",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "370f8296a9604c453eb4ec1cee88eb7c",
".git/index": "4a6e8e5332e7423cc262addc745c4479",
".git/COMMIT_EDITMSG": "a669b6be08b82f3909eb7e3d2917dfa9",
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
