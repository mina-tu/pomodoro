if(!self.define){let e,i={};const s=(s,r)=>(s=new URL(s+".js",r).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(r,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(i[n])return;let a={};const b=e=>s(e,n),d={module:{uri:n},exports:a,require:b};i[n]=Promise.all(r.map((e=>d[e]||b(e)))).then((e=>(c(...e),a)))}}define(["./workbox-3e911b1d"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"android-chrome-192x192.png",revision:"84569e7313c6be7bb617bf9af87eaf7b"},{url:"android-chrome-512x512.png",revision:"cd87200b47f432cf59dbad777163b0b7"},{url:"apple-touch-icon.png",revision:"c58544356ab9aa3f2990abe720365a17"},{url:"assets/index-B5Qt9EMX.js",revision:null},{url:"favicon-16x16.png",revision:"3a8982740c01c519243d367b16cc895f"},{url:"favicon-32x32.png",revision:"71ff740da7b8f55f954a937428377417"},{url:"favicon.ico",revision:"8d08b4244284a833eaf79f67fdbb911a"},{url:"index.html",revision:"386725733814deb967a0acb7adae8236"},{url:"jsconfig.json",revision:"7bc9ed80d32278ddc2263d762df14b4a"},{url:"mstile-150x150.png",revision:"aff603737d48ad6f4b5a1db08b572c7d"},{url:"package-lock.json",revision:"6ef38353663a56a3bc7f985bea529b51"},{url:"package.json",revision:"ee49a4fe473be54560fc208e7958137f"},{url:"public/android-chrome-192x192.png",revision:"84569e7313c6be7bb617bf9af87eaf7b"},{url:"public/android-chrome-512x512.png",revision:"cd87200b47f432cf59dbad777163b0b7"},{url:"public/apple-touch-icon.png",revision:"c58544356ab9aa3f2990abe720365a17"},{url:"public/favicon-16x16.png",revision:"3a8982740c01c519243d367b16cc895f"},{url:"public/favicon-32x32.png",revision:"71ff740da7b8f55f954a937428377417"},{url:"public/favicon.ico",revision:"8d08b4244284a833eaf79f67fdbb911a"},{url:"public/mstile-150x150.png",revision:"aff603737d48ad6f4b5a1db08b572c7d"},{url:"public/safari-pinned-tab.svg",revision:"0f32d91aa0e0afe204832bc521c130b4"},{url:"public/splashscreens/ipad_splash.png",revision:"f72431bb83a6a6f7bcf072c3f4f54e35"},{url:"public/splashscreens/ipadpro1_splash.png",revision:"7e08c658806960e0b9063216635f7c2a"},{url:"public/splashscreens/ipadpro2_splash.png",revision:"c4fd41c914f3757805688084d88ec13c"},{url:"public/splashscreens/ipadpro3_splash.png",revision:"d5e9d88e08949cd55c12ce3b46938d1d"},{url:"public/splashscreens/iphone5_splash.png",revision:"9e51db455d9ca2601e1801bd7fab3cc2"},{url:"public/splashscreens/iphone6_splash.png",revision:"ee2a56329304bf2267705c51a65b7a1f"},{url:"public/splashscreens/iphoneplus_splash.png",revision:"223b44620f7e15425c8f4d6d6de851ec"},{url:"public/splashscreens/iphonex_splash.png",revision:"3e89d406d8022b1a2dee90085c6d7389"},{url:"public/splashscreens/iphonexr_splash.png",revision:"310ec57bf8838ba3ff5dd68e720b5471"},{url:"public/splashscreens/iphonexsmax_splash.png",revision:"4bfb111e7e1c558b26140670ef03ae92"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"safari-pinned-tab.svg",revision:"0f32d91aa0e0afe204832bc521c130b4"},{url:"src/assets/tomato.png",revision:"0a4d9835a29943fa6592d84a5c4c0f3b"},{url:"src/main.js",revision:"608e8520cd902717fc30c94ef7532c02"},{url:"src/plugins/index.js",revision:"219d33ca65b96fd6ee040cf42515b394"},{url:"src/plugins/vuetify.js",revision:"bb133438502b57b8b159b1b79545fa61"},{url:"src/router/index.js",revision:"67d4a7d17ccff1b5bf344a1d596c9695"},{url:"src/stores/index.js",revision:"89d5901583c25adf7b79c6eaa8c10d41"},{url:"src/stores/list.js",revision:"992bd8bd404eb408d55d84f2d92f29af"},{url:"src/stores/settings.js",revision:"ad5866e52e494e08cdd41cb90477df3f"},{url:"android-chrome-192x192.png",revision:"84569e7313c6be7bb617bf9af87eaf7b"},{url:"android-chrome-512x512.png",revision:"cd87200b47f432cf59dbad777163b0b7"},{url:"manifest.webmanifest",revision:"5e6cbc3a8e81827d4f41472d64ab5080"}],{ignoreURLParametersMatching:[/.*/]}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
