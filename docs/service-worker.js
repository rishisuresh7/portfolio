if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let o=Promise.resolve();return r[e]||(o=new Promise(async o=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=o}else importScripts(e),o()})),o.then(()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]})},o=(o,r)=>{Promise.all(o.map(e)).then(e=>r(1===e.length?e[0]:e))},r={require:Promise.resolve(o)};self.define=(o,s,i)=>{r[o]||(r[o]=Promise.resolve().then(()=>{let r={};const a={uri:location.origin+o.slice(1)};return Promise.all(s.map(o=>{switch(o){case"exports":return r;case"module":return a;default:return e(o)}})).then(e=>{const o=i(...e);return r.default||(r.default=o),r})}))}}define("./service-worker.js",["./workbox-c4c61989"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/portfolio/assets/icons/android-chrome-192x192.png",revision:"4a698621db6fcfad77e3c6bfff589587"},{url:"/portfolio/assets/icons/android-chrome-256x256.png",revision:"82ce09864defe56be8eff3bce415e804"},{url:"/portfolio/assets/icons/android-chrome-512x512.png",revision:"0d49ac02688b4de6c5cebd95800e2918"},{url:"/portfolio/assets/icons/apple-touch-icon.png",revision:"6f5274803a7e87df41c3135f0054b345"},{url:"/portfolio/assets/icons/favicon-32x32.png",revision:"7b2a63a4337e8626a21c99c8a3010795"},{url:"/portfolio/assets/icons/favicon.png",revision:"86465920570798d6f92be7ca1f435e25"},{url:"/portfolio/assets/icons/mstile-150x150.png",revision:"98a08947352c8d0072708a981dd643a3"},{url:"/portfolio/assets/icons/safari-pinned-tab.svg",revision:"35ee4dbcf127ecfde059c5492464597f"},{url:"/portfolio/assets/img/ajax_football.png",revision:"3ff04b8b34cf3870adeccbab80669748"},{url:"/portfolio/assets/img/avatar.jpg",revision:"64b069464ed6a41055a8772598af2777"},{url:"/portfolio/assets/img/compressed-removebg.png",revision:"cef1ab016fe60b404e22f5f824d4ba01"},{url:"/portfolio/assets/img/css-avatar.png",revision:"35c67bfb523d7067418548ba5095ddca"},{url:"/portfolio/assets/img/docker-avatar.png",revision:"3ccfce858db83059fe02b7b29c2b1800"},{url:"/portfolio/assets/img/docker-compose-avatar.png",revision:"b3c2388c15b628a3faf3b2ea5a1dceb5"},{url:"/portfolio/assets/img/git-avatar.png",revision:"3e8c4810351728e3ee8e382338eac914"},{url:"/portfolio/assets/img/go-avatar.png",revision:"4c40eb298523b77fc3d5a619ca6ab56c"},{url:"/portfolio/assets/img/go-watcher.png",revision:"22b5c312cc5b327f3f5b95891077a115"},{url:"/portfolio/assets/img/grpc-docker.png",revision:"1ce1685f3ae899baa37e8e7571811e44"},{url:"/portfolio/assets/img/grpc-grpc.png",revision:"09f6c1254ce97399dfadc39c56bcea5f"},{url:"/portfolio/assets/img/grpc-http.png",revision:"fdd014275976bb5b6d6058f92e0fcbe2"},{url:"/portfolio/assets/img/html-avatar.png",revision:"817a688380d07c891278eb1d4a978307"},{url:"/portfolio/assets/img/java-avatar.png",revision:"393e7d9fab03418eed23fbcc82463a49"},{url:"/portfolio/assets/img/jenkins-avatar.png",revision:"bb04496cbeafb34f0d44dcce8f6e1631"},{url:"/portfolio/assets/img/js-avatar.png",revision:"773ee751fd4700ab1cff00612ad5247b"},{url:"/portfolio/assets/img/k8s-avatar.png",revision:"78acc8b5e220a341374372d636e6b669"},{url:"/portfolio/assets/img/linux-avatar.png",revision:"7ed8a808420a41cc91afa6236e7a1dd4"},{url:"/portfolio/assets/img/neo4j-avatar.png",revision:"903b6a86f1d8f8034be32ab85deb463b"},{url:"/portfolio/assets/img/overview.png",revision:"d21f9961622706ff338cfcc5cec3041a"},{url:"/portfolio/assets/img/portfolio.png",revision:"9d186845bd69595bc03e09beda3e5c53"},{url:"/portfolio/assets/img/python-avatar.png",revision:"dc199ecc9e90e4bc7e9ed9b31e3c2b5f"},{url:"/portfolio/assets/img/react-avatar.png",revision:"49fc877dfce26bb4d0c08ae546719218"},{url:"/portfolio/assets/img/react-avatar.svg",revision:"4009eef3b3e291f296e71962c70895c5"},{url:"/portfolio/assets/img/redux-avatar.png",revision:"97ffbaa6506c96adc60032d4c1751bb2"},{url:"/portfolio/assets/img/reuse_store.png",revision:"ea094490d8bd149a835b5048cc80f8c5"},{url:"/portfolio/assets/img/reuse_store_backend.png",revision:"7d4e4c80612bbe3dae722719a08e7ed3"},{url:"/portfolio/favicon.ico",revision:"fa34568635da583dab00b533e4544453"},{url:"/portfolio/index.html",revision:"966f2c69d847294a8e85319b2e0169f1"},{url:"/portfolio/main.bundle.7ae06145cd17165de2ed.js",revision:"f3952aeb121f7734c3cc225a9990237a"},{url:"/portfolio/manifest.json",revision:"69808bf6a4dc7b950fd294b9db08c8f8"}],{}),e.registerRoute(/https:\/\/rishisuresh7.github.io\/portfolio/,new e.StaleWhileRevalidate,"GET")}));
