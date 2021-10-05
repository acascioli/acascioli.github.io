'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "b1d0bba5626dcf60862b0d456a6181e2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "26c2d8a2e60ec17f2ea242e193a2044a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "77ebbef49654f851a29cecd61f223330",
".git/logs/refs/heads/main": "80c9c8529480d6ae6906bb647adbac78",
".git/logs/refs/remotes/origin/main": "2df3a9b469bf945232459bf988e2f5a3",
".git/objects/03/91b51bc28bea90f22452f63e45e6ea65fe5162": "fa91d009cbf4e0aac6873fd17924150f",
".git/objects/05/f94280741be2ccd47743aba62d6cafccc4dd3d": "27a4d617743c50593c8e6dc9894998c3",
".git/objects/07/5d7b57384a8905710dad75969f9a550a83ac30": "001375cb9efb9c39770f950a51c77f24",
".git/objects/07/a460c6f57147168c7156cfd0b35877d1f3940f": "a454105e28b91f562f30a4c1b56e9f0e",
".git/objects/08/19264144d6a189aac54036e2a359fdb7696dbf": "92a1272697ebd8e8828980bccd9688af",
".git/objects/0c/1955c8789d15bc2d056a2c885c4d3cee00c97a": "e404b7ea1ae42c2786f842ef12527c3d",
".git/objects/14/2cfbe27338aa5fa68bb6d8ee734a6bdbfd3487": "d6a5393e24f4f48fcfb04d6a5af057a1",
".git/objects/14/9df1ca3be6e52e64c2b93337f2fb94a8a4882e": "dd57d1ae039d95bdbca4abaed1a461aa",
".git/objects/18/326c6420a322769dd56872c71656ce304bdc1f": "9e666080f58f46dd7269f13c49f7e882",
".git/objects/19/6e37e6d5429a3de6d1cd08dac215bfae0b1698": "d7362ddb8d7392040a4277e9ca3c204e",
".git/objects/1f/ef3558e993b76e3d11bb32938ca73d82ca1100": "f2e1851bc7c535cbfae7dae31d6148b2",
".git/objects/24/9a0ff993165f7b03d4211a6c1fdd2571c0da19": "918410d76c3a0afe437777bca0446e8c",
".git/objects/25/7fa00ee5eb7f4bf59f33ac564e8bf2c9a422ee": "179e4529536d8bb9f7f9bd825654ebc7",
".git/objects/25/89135088f99c3122a7a949d4b1ea04af618701": "61c6e26c70b8734e0d7e539ac5ac0cb8",
".git/objects/2d/9c4dfd9910a2d9844664c43294f7ce6a7120d2": "5c977ab5345018cc6e76210910c72e0a",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/5e2e3fbb7f96b9f5660d7ebb37151b50bb1bc8": "2f712d577e342be9b01376021b7abf10",
".git/objects/38/79fab710bfcd95cb4bd1f80292541579e50fa3": "7ed41d08e786513b24483e9ae66973ce",
".git/objects/3a/6e7bd14f7888cb4cd9df59b9a669c7da9b4923": "df4d2fba61ccc8d381cc91e190323702",
".git/objects/3b/cb0a723ff9e5400d5dad570913d946b628cf27": "afc0dc7d618ff72d7fd4137ec27ab8c3",
".git/objects/3c/fec4099da9c34afa9a37d99618bed4143ac83e": "5628e59a56c0465abefe39dac1cbc69e",
".git/objects/42/dc67a208e78b65a99657f54da5b4b3563723cd": "783e2538f7fdc5e8001ee1272c511e45",
".git/objects/4a/a4b6927800e3bff25bc38deebf61a1e4d72a07": "a7b70f7d9ec5fd871dc52e73b7da3f92",
".git/objects/4b/4203a0c541e9421c218857de6e11615563750d": "b7d6121c85697264717c4482f11f151d",
".git/objects/4f/a8cc76e0e964bfa8100424b85ad163db8f7776": "257f6f57a2905fb44079273010553f18",
".git/objects/56/4b20b8dfa6c6582af241e9b2ef642d101cc4f5": "3bc37b353bc41d7c1f137debb7feeb0b",
".git/objects/57/21170583f87f8247628daad035789ce9dda4b4": "83f0cc27df8d1b431da66679dcc9fd9d",
".git/objects/59/d3bad29d5932ab71a047eec0a11acda521fe5c": "2c9eed4adc6aa0367cc51c0c82b3c4df",
".git/objects/5a/99e6f7d3de1f0ad6473d4fac7fe4453ffb9010": "3800b5efa5288ba6f988ae0c25b46a65",
".git/objects/61/6426f9e381055aeb804f3ed45ec41950819f4c": "a37b64f3579632e41407373d0894fa03",
".git/objects/63/4236bfa7092ada9409add9eda0991e68dc4692": "efad19fd5dbccb564246ddd4937900e7",
".git/objects/63/46cfa6a203b3a02c3029f7b48294ed9fd46d03": "20a8174c5eb47222921c08ea78e05998",
".git/objects/67/ddffb233dd09d8ee1d9334c660096168b92c45": "24d3dc9e10601b1fe9c76d8700019a3a",
".git/objects/68/56a2f24aa4e37752972eb81383efa5ac7b5d69": "015b6543808c13d6608506082e8e260d",
".git/objects/6a/80e375152480326544cbb24be56a662b721c06": "6bf6ba06c76443771cb3057cf7393cef",
".git/objects/6b/f6779d93eec86e244450592cd10a8c778dc679": "933e193f3a27860666b362c16199743e",
".git/objects/75/ed78a99cb3348f874175106da082c037d3d61d": "ba9cc739af7d2b13f1f93d8681433289",
".git/objects/76/455c47871ac54ffd14cc53abe61d380c69cc57": "94054b7b64ce47aeaf0881b323111d98",
".git/objects/77/27abe478efadcc3902f835486f458c6b89a4f2": "01e8a6ffe339fd65c5e2d9df4e0a70e4",
".git/objects/78/5fa841a8b773fdaa639f9ec24380c88a866bc9": "0a24d8742ad00f71d6ae74d7d9502c0f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/ca5ad54540c6e1b55416e1a524bc26a016e5d3": "41228ff72dc3a0e2c887e2600c182879",
".git/objects/7f/6eaec7570c19452b091336106dd5aff7e75ff3": "68f9de062ee8fb9043e4ea2e3969b133",
".git/objects/82/726a65546e5f7b58b5dfe4fa8f641679768442": "c7cb43116911123623109dfabc3d5545",
".git/objects/84/f9768863c9b8db377a559b884ea9b94424faf3": "9d214eff39fefcd4b000f6569224f8bf",
".git/objects/87/632314945512979b60651cfdf58ec1540d3150": "fa15ba70fa0b3b494baad2b3f3e72304",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/0a39086232b1ff7effafd0f869e03438d988db": "5924a56042cd582501f472057ac7a27b",
".git/objects/91/bffd148ea60082ee2fa47cae22bd3cc5dff7db": "e098ea30a8bad7c88b739095890a9e42",
".git/objects/93/c5c2b43408097cd0731725f64b830326e4aba4": "be1bc3e11d0c0b656515e7f4197a90d5",
".git/objects/93/eb6acffe5839c8669a695af22137e8017e727e": "f29b203493d74349b44db0b4391cb52f",
".git/objects/94/8732a686fe852a16a1bdc27bc44d7cc80677db": "9057ee1bdeda6680072886f33ff75bc0",
".git/objects/98/40bd5af4d0e9da549ec75710ee7dd5dd8db34c": "7d38c3d8dac409a172f4de00e1815dc6",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/972a88d37dc987a4329bdd6bf3ab4512e957b8": "9c8862d007df4edd099ae2aeefcd4f6b",
".git/objects/a5/84ac45114938ed96d854cca7300472b5983d1b": "780e507d0f8e2a3a1a0efad00e30b794",
".git/objects/a5/d2901a0572d8e8658ffacbe1aa63c1fda3d7b3": "2dc536caaa2daf911268097747e0f97f",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/240813a26113449558a34d10e8bcd8e1499b68": "18e2cdd59f1af280dee9a6b0eafdecd7",
".git/objects/ab/e8674eb409fbe45a68f767556ccb559363b0b8": "6f6e1a9c0b4cf2743149a8b63e1f4cf8",
".git/objects/ac/b571564a8c3b98cd081d600f95b2389b3095f8": "cba3ee5f29bc6e78db6b68005a485876",
".git/objects/af/6a332ebf81f5ebd2edf2abfe13fc6fdaff92a6": "9a0016f4a3d03fa67135b88190ef71cd",
".git/objects/b3/22eff98b3552def23a34c281107139efc5fb30": "cc663dae3326ba380ae587f7ce306a07",
".git/objects/b5/7efc97e16aa44f84a3235e88f3cf72a609ee18": "31462877e2b6afe27b69843ecafa219a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/2044897cb4ca7276c62cdd31b4642639861d7b": "7632aefdc3d9f020d7b2725c48622a3c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c8/9116a092cfae529115ca898b5981f53cbca2f7": "953572bd0bb780498420fda235e8be37",
".git/objects/cb/c62b9e305a2f8d941a5d841c4b77e12d749909": "53b871a2b3f8398c55b8ba05395d5320",
".git/objects/cc/3a11bec4aae66ce931daba53b8efd20a90d73f": "9a541e2362d2570d35520cc1074e3050",
".git/objects/cc/c6cd82d1a68d820502ff60f57095192ba937a7": "e96f96a6941aeae74366875f450c7680",
".git/objects/cd/3171aa62d06302b3d4ec32951803e835975db2": "f1a6474127e0912f10af5b3f4e484bcc",
".git/objects/cd/ed460cf8e4514f1903688e1a4ed4f3cc4250bc": "4f385fb31793a8f617548a7644e8dcfa",
".git/objects/d4/62a6649a1e94022aebb53b5645861aae5c9b64": "53cbb2b439ddffb183156fe21e53d6d1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/c1b9dcb0ae0863a1e8cf3ec5b41367a3f554ce": "312e163aca2bce81904d50e70880d380",
".git/objects/e5/5d49642b85d0696852c7cfdc25d395fc0a9dd6": "560cde046f0e365616f5d783eaf4710e",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/ea8f837a31a79719be3499f418c9d8f300a256": "7093a854174458af10319d4a8623144a",
".git/objects/eb/082548b0d600072028069d86a88b08c4552304": "d87cdb134801eef5e3d96d80b0bbd7d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f4/9a139cfd312fcc44f5b8a68790527897c65f16": "6890c545e23ac85d382cdd9899e0e7c0",
".git/objects/f8/756d970005759c2e7d87966119703ee7ee00e8": "39f73e0ee8e7ec95af33b2f1b8d8de7a",
".git/objects/fa/4fe203c5567cf13a27db76488e958412be3933": "ad9b392a0379a8f5474921449977429b",
".git/objects/fb/dcc7731cd109ec5e9ad819dfac5e50925fdef1": "b8ce98ec65dcd147260107f147b24778",
".git/objects/ff/76644e0f4e66cbfbcb5c384dfa2f75fd4041fd": "e68d46ffd32a1065381419e423251ccb",
".git/refs/heads/main": "9b0c0fad975a178f5be8cbdee3e40f11",
".git/refs/remotes/origin/main": "9b0c0fad975a178f5be8cbdee3e40f11",
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
"index.html": "2c34894f258885d6d55adae90c3cb818",
"/": "2c34894f258885d6d55adae90c3cb818",
"main.dart.js": "5d188411e08e7672fc7fde66e989b0ab",
"manifest.json": "e42c149b8393aeca04ffb7b491cbb824",
"Qlogo2.png": "823864c38a7b1bd15c02d206f7a72097",
"README.md": "6c7beba257a7b0f596f1d1e1543369b2",
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
