'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "7ba166c8e1b7008d7b695ae6bcaaf757",
"assets/assets/fonts/Raleway/Raleway-Bold.ttf": "7802d8b27fcb19893ce6b38c0789268e",
"assets/assets/fonts/Raleway/Raleway-Italic.ttf": "f73026bcd64e5a5265ab616e5083cd48",
"assets/assets/fonts/Raleway/Raleway-Regular.ttf": "75b4247fdd3b97d0e3b8e07b115673c2",
"assets/assets/images/bgs/antarctica.jpg": "71e86242fca831839833d1caa23f107e",
"assets/assets/images/bgs/background.png": "0614a717659df3fd409c60ff04fac983",
"assets/assets/images/bgs/bg_img_2.png": "8257ef89b2dfeab767578260965a7e2d",
"assets/assets/images/bgs/Blue-Wave.png": "c0188b3a1d4ae2e4270c2cf1d0158d6d",
"assets/assets/images/bgs/blue_shape.png": "32b40619dcde03eb3141f90ff9204e29",
"assets/assets/images/bgs/cover.jpg": "e1e4b2e46b8d6eabb7330afb0c0d30ff",
"assets/assets/images/bgs/cover1.jpg": "302bb2cce0d8da449963bc7aaaebcf68",
"assets/assets/images/bgs/grey_shape.png": "83cda9585f1ce3259cc0c9b7e13e2de4",
"assets/assets/images/bgs/mountain.jpg": "423dc1031a07e210070c4796fcffd61a",
"assets/assets/images/bgs/red_shape.png": "2db58c720e9503ad12ce3ab66c42d0e5",
"assets/assets/images/bgs/services.jpg": "35f3a09648e7dc6e1f236f592fadb77f",
"assets/assets/images/bgs/south_america.jpg": "1920c86e11a06921b339f00ff1d0ddea",
"assets/assets/images/bgs/trekking.jpg": "6e43ca0e213b51a9226124353e402750",
"assets/assets/images/brands/aboca.png": "5f1b04ba460e60f7a58f2183139f00a3",
"assets/assets/images/brands/cocacola.png": "8513d7d9b23ce980f510a8a0bbe2ec2b",
"assets/assets/images/brands/colussi.jpg": "99e9796c0297e5ee2ba163204ee0e835",
"assets/assets/images/brands/danone.png": "324704f04fd8b3342b2d500a5ac34fa1",
"assets/assets/images/brands/faist.jpg": "d839f4de4a5c725728d5033bd569e5ac",
"assets/assets/images/brands/galbani.jpg": "2957b5c4a57b6374305578c9366b92e0",
"assets/assets/images/brands/gucci.png": "32053449a85429a29863e80dcde2f88e",
"assets/assets/images/brands/sgs.jpg": "ff6d9e537812ce20d4ffd3f1ed481ced",
"assets/assets/images/brands/StockX.jpg": "72d58c4410707c4c92d218c8cefba116",
"assets/assets/images/brands/zte.jpg": "e6656a1f4573ef67adff80945be03f86",
"assets/assets/images/logo/favicon.ico": "d081aa549132bb2dfc30b6e25bc870a6",
"assets/assets/images/logo/Qlogo.png": "edf45b17fc27598c7cd3dda92ab91c9f",
"assets/assets/images/logo/Qlogo1.png": "edf45b17fc27598c7cd3dda92ab91c9f",
"assets/assets/images/logo/Qlogo2.png": "823864c38a7b1bd15c02d206f7a72097",
"assets/assets/images/logo/rce.png": "e6584cd9675488e8ac46e867a192660e",
"assets/assets/images/logo/SGS.jpg": "8ce86cf2463a441a61195fc507007322",
"assets/assets/images/logo/stone.png": "5bb8ac9abb6a1b0d487502b8db531c04",
"assets/assets/images/method/PDCA.jpg": "228cbe5421187a7ff332185174accb70",
"assets/assets/images/services/consulting.png": "8cd8b4821312a7a96bbd7639700bde7f",
"assets/assets/images/services/hr.jpg": "5f3f1a7136e89ca26e2a723f6db974ab",
"assets/assets/images/services/OeP.png": "8e7f787628e872caa8e2f68ac1141c07",
"assets/assets/images/services/sdg.jpg": "9a6b1d546236b73d567d9ffac36dff6b",
"assets/assets/images/staff/staff.jpg": "6074e74650b45e85805c6ffb2fa091c7",
"assets/assets/images/stats/box_cover_blue.png": "48cf2e8d62665493303e906b7b238671",
"assets/assets/images/stats/box_cover_dark.png": "34f90bdba46732221c608605016c40d5",
"assets/assets/images/stats/box_cover_gold.png": "a58f0270c1fd04d7eae1217c7e5645b9",
"assets/assets/images/who/project1.jpg": "acb28abb725048a1abda78cbc7fab415",
"assets/assets/images/who/project2.jpg": "85dee06470fc86cd2dd8bc9da6d3fa5c",
"assets/assets/images/who/project3.jpg": "96ac83eea93dc210fa1d4c30044e7f87",
"assets/FontManifest.json": "b44fe43c1f1c20f47e553ec9f8bbbb4a",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "47373006a9f7c7fe41baddae59c96d13",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "0e4bf9b8fa799afdc59fd207839a1dfd",
"/": "0e4bf9b8fa799afdc59fd207839a1dfd",
"main.dart.js": "5e2403739e4e62039afe454553a2213e",
"manifest.json": "e42c149b8393aeca04ffb7b491cbb824",
"Qlogo2.png": "823864c38a7b1bd15c02d206f7a72097",
"version.json": "68644e869d417bc5c790a7e1cac67ee8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
