if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return f[e]||(i=new Promise((async i=>{if("document"in self){const f=document.createElement("script");f.src=e,document.head.appendChild(f),f.onload=i}else importScripts(e),i()}))),i.then((()=>{if(!f[e])throw new Error(`Module ${e} didn’t register its module`);return f[e]}))},i=(i,f)=>{Promise.all(i.map(e)).then((e=>f(1===e.length?e[0]:e)))},f={require:Promise.resolve(i)};self.define=(i,r,a)=>{f[i]||(f[i]=Promise.resolve().then((()=>{let f={};const o={uri:location.origin+i.slice(1)};return Promise.all(r.map((i=>{switch(i){case"exports":return f;case"module":return o;default:return e(i)}}))).then((e=>{const i=a(...e);return f.default||(f.default=i),f}))})))}}define("./service-worker.js",["./workbox-f7715658"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"archives/2021/07/index.html",revision:"2887f4a6811babfffd1aea1d79ff92b4"},{url:"archives/2021/index.html",revision:"cd27c00440a5d4eb46b75df2bb1a70fa"},{url:"archives/index.html",revision:"1dfea29a1b003b43d8f044be41a812db"},{url:"css/rtl.css",revision:"371213dab93de3d1fc0ca1949afcb10f"},{url:"css/style.css",revision:"e3de20fb7e61b5132d8e79e4f772bad1"},{url:"hello-world/index.html",revision:"b25b4be8c4dfb88678798ef6021e1ab2"},{url:"images/apple-touch-icon.png",revision:"0f3687ddb31c8d4f3f57db5904514471"},{url:"images/favicon-192x192.png",revision:"22cbbf3723cf35de562d84f43b2d47c4"},{url:"images/logo.png",revision:"3a523a218d45942792b375bee59382ca"},{url:"index.html",revision:"af176d0b14cd348f3260a0ac6a901620"},{url:"js/main.js",revision:"45cfb0ce3d16a8b6d6775c61d347022f"},{url:"js/search.js",revision:"4e1a28c572dd9464786da7f7e8a8981e"},{url:"lib/clipboard/clipboard.min.js",revision:"9de9f70b0468760fb7ea4f2d670fdbfe"},{url:"lib/font-awesome/css/all.min.css",revision:"6a1b5933f8692e60c8337c0d68255ec1"},{url:"lib/font-awesome/webfonts/fa-brands-400.eot",revision:"088a34f78f530102fd9661173b4a4f26"},{url:"lib/font-awesome/webfonts/fa-brands-400.svg",revision:"d72293118cda50ec50c39957d9d836d0"},{url:"lib/font-awesome/webfonts/fa-brands-400.ttf",revision:"273dc9bf9778fd37fa61357645d46a28"},{url:"lib/font-awesome/webfonts/fa-brands-400.woff",revision:"f4920c94c0861c537f72ba36590f6362"},{url:"lib/font-awesome/webfonts/fa-brands-400.woff2",revision:"822d94f19fe57477865209e1242a3c63"},{url:"lib/font-awesome/webfonts/fa-regular-400.eot",revision:"3ac49cb33f43a6471f21ab3df40d1b1e"},{url:"lib/font-awesome/webfonts/fa-regular-400.svg",revision:"d2e53334c22a9a4937bc26e84b36e1e0"},{url:"lib/font-awesome/webfonts/fa-regular-400.ttf",revision:"ece54318791c51b52dfdc689efdb6271"},{url:"lib/font-awesome/webfonts/fa-regular-400.woff",revision:"a57bcf76c178aee452db7a57b75509b6"},{url:"lib/font-awesome/webfonts/fa-regular-400.woff2",revision:"9efb86976bd53e159166c12365f61e25"},{url:"lib/font-awesome/webfonts/fa-solid-900.eot",revision:"7fb1cdd9c3b889161216a13267b55fe2"},{url:"lib/font-awesome/webfonts/fa-solid-900.svg",revision:"7a5de9b08012e4da40504f2cf126a351"},{url:"lib/font-awesome/webfonts/fa-solid-900.ttf",revision:"2aa6edf8f296a43b32df35f330b7c81c"},{url:"lib/font-awesome/webfonts/fa-solid-900.woff",revision:"93f284548b42ab76fe3fd03a9d3a2180"},{url:"lib/font-awesome/webfonts/fa-solid-900.woff2",revision:"f6121be597a72928f54e7ab5b95512a1"},{url:"lib/jquery/jquery.min.js",revision:"8fb8fee4fcc3cc86ff6c724154c49c42"},{url:"lib/justified-gallery/css/justifiedGallery.min.css",revision:"ceaa86fef1d6491660adf7244265affb"},{url:"lib/justified-gallery/js/jquery.justifiedGallery.min.js",revision:"b3c16bcda205ebe084ee04f4900b7dbc"},{url:"lib/meslo-LG/MesloLGL-Bold.ttf",revision:"6c475ed9d73a90d62c666b3d94f350d2"},{url:"lib/meslo-LG/MesloLGL-BoldItalic.ttf",revision:"1c5a059e12b5e0993699481455cf8b74"},{url:"lib/meslo-LG/MesloLGL-Italic.ttf",revision:"17ab93d9e2493a279171fa183279decc"},{url:"lib/meslo-LG/MesloLGL-Regular.ttf",revision:"265d62d86941c398f07704a80911ac92"},{url:"lib/meslo-LG/MesloLGM-Bold.ttf",revision:"4174a16af8cfe61e45d1ec4758227443"},{url:"lib/meslo-LG/MesloLGM-BoldItalic.ttf",revision:"33e53ff2022c98c3f3caa5c4682a1939"},{url:"lib/meslo-LG/MesloLGM-Italic.ttf",revision:"259bbc1d62105f728101523e3295ddd1"},{url:"lib/meslo-LG/MesloLGM-Regular.ttf",revision:"93e2fae291d0da752d78dc0b113591d9"},{url:"lib/meslo-LG/MesloLGS-Bold.ttf",revision:"a31874e50f29681640f88e00f2343c25"},{url:"lib/meslo-LG/MesloLGS-BoldItalic.ttf",revision:"2e752bcf18165adadef20e83389eb9a7"},{url:"lib/meslo-LG/MesloLGS-Italic.ttf",revision:"526d28c1d73dedca45091a1530541908"},{url:"lib/meslo-LG/MesloLGS-Regular.ttf",revision:"d20aa15f5ce240b12b2475042c6ead8e"},{url:"lib/vazir-font/font-face.css",revision:"830c89c12712a902ad9f8f007a6b64c6"},{url:"lib/vazir-font/Vazir-Black.eot",revision:"817f917ca1bd73fdafb73c8780633cdb"},{url:"lib/vazir-font/Vazir-Black.ttf",revision:"78fc370174609c35b98e3dcd38f53bfc"},{url:"lib/vazir-font/Vazir-Black.woff",revision:"65678ca9d6bca0505488538c49efa85f"},{url:"lib/vazir-font/Vazir-Black.woff2",revision:"53dea81209d52200d04acd7bf4fe04aa"},{url:"lib/vazir-font/Vazir-Bold.eot",revision:"6b4258266f6cc8ebe9c599e1a52591a1"},{url:"lib/vazir-font/Vazir-Bold.ttf",revision:"bff5dfbc9bea8d538bf7fb4579ec4f32"},{url:"lib/vazir-font/Vazir-Bold.woff",revision:"1dc06ca075e3e867a9a9253810983c69"},{url:"lib/vazir-font/Vazir-Bold.woff2",revision:"eb2e0810074169c14d979f723516e575"},{url:"lib/vazir-font/Vazir-Light.eot",revision:"4ccde095698e572025b49813ce57bf23"},{url:"lib/vazir-font/Vazir-Light.ttf",revision:"f949c9c6e0a78ca311d4f3bcc53222bc"},{url:"lib/vazir-font/Vazir-Light.woff",revision:"5aa1dcde9af46e421829e908db25dd75"},{url:"lib/vazir-font/Vazir-Light.woff2",revision:"f27550a062965ccf8614d6daed9fb37f"},{url:"lib/vazir-font/Vazir-Medium.eot",revision:"a8b87e489e09fd35814d4fe85d42e364"},{url:"lib/vazir-font/Vazir-Medium.ttf",revision:"f30326eff40bdab923a1de08cb394567"},{url:"lib/vazir-font/Vazir-Medium.woff",revision:"4308d08acc3cc132f457edfe36fb047c"},{url:"lib/vazir-font/Vazir-Medium.woff2",revision:"a88d0b18bd96794f94c006c4cd052622"},{url:"lib/vazir-font/Vazir-Thin.eot",revision:"7cb5ce0d4cbc438e3ef77535d84d4a0d"},{url:"lib/vazir-font/Vazir-Thin.ttf",revision:"a4b0ba433552c6442b0a312c4c42345f"},{url:"lib/vazir-font/Vazir-Thin.woff",revision:"47715ef73613e8f18aa5031b0a602539"},{url:"lib/vazir-font/Vazir-Thin.woff2",revision:"d580da1fc55f6253356ca89229532104"},{url:"lib/vazir-font/Vazir.eot",revision:"1f15de7bca7ce47b0e6a99fdc3f98272"},{url:"lib/vazir-font/Vazir.ttf",revision:"29d3b94592bc65baaa0c368ea99fbecd"},{url:"lib/vazir-font/Vazir.woff",revision:"525eba78808492d95b2e7a16881ce663"},{url:"lib/vazir-font/Vazir.woff2",revision:"2dfb8895f5d7884ddf3113972e03aaff"},{url:"search/index.html",revision:"794cc46205379273c9e06f2ddcec31d3"}],{})}));
//# sourceMappingURL=service-worker.js.map
