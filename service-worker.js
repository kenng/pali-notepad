if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return s[e]||(c=new Promise(async c=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=c}else importScripts(e),c()})),c.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},c=(c,s)=>{Promise.all(c.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(c)};self.define=(c,r,f)=>{s[c]||(s[c]=Promise.resolve().then(()=>{let s={};const i={uri:location.origin+c.slice(1)};return Promise.all(r.map(c=>{switch(c){case"exports":return s;case"module":return i;default:return e(c)}})).then(e=>{const c=f(...e);return s.default||(s.default=c),s})}))}}define("./service-worker.js",["./workbox-e170c028"],(function(e){"use strict";e.setCacheNameDetails({prefix:"pali-easy-input"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"css/2.6e84bd4a.css",revision:"baf32d29dd5221c30ecf8a5497c11cd8"},{url:"css/3.db6cd848.css",revision:"c21845a2b93b6a7513f644804c380707"},{url:"css/app.b0f81036.css",revision:"eaa84d0f5f3a4d3a96fea2f70f51e0a4"},{url:"css/vendor.7e58dabd.css",revision:"eac8010b0b4182cec4d33b03df4b2b98"},{url:"favicon.ico",revision:"be608816280f2d2a98d3444bc2cd70e9"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.a45108d3.woff",revision:"5cb7edfceb233100075dc9a1e12e8da3"},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.cea99d3e.woff",revision:"87284894879f5b1c229cb49c8ff6decc"},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.865f928c.woff",revision:"b00849e00f4c2331cddd8ffb44a6720b"},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.2267169e.woff",revision:"adcde98f1d584de52060ad7b16373da3"},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.bac8362e.woff",revision:"bb1e4dc6333675d11ada2e857e7f95d7"},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.49ae34d4.woff",revision:"60fa3c0614b8fb2f394fa29944c21540"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.4ad3ff04.woff",revision:"57d7c5f1564284b8704b641ecb899e01"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.7a292951.woff2",revision:"7df112be03585591874096e3254cdf34"},{url:"icons/apple-touch-icon.png",revision:"6120c90090a9cfa1da8c45cfbc9fed1b"},{url:"icons/favicon-16x16.png",revision:"696e1de5123a1539dc6dae7e2f7cea78"},{url:"icons/favicon-192x192.png",revision:"b1f426acdeb6ae4782a82295010042df"},{url:"icons/favicon-32x32.png",revision:"35b0b0536057420b219796e9f7f52cb6"},{url:"icons/favicon-512x512.png",revision:"14d96fdc1a2b57fedd0692e2fb73be8a"},{url:"icons/ms-icon-150x150.png",revision:"358c493a012ead07f18d8c8573f5372d"},{url:"icons/safari-pinned-tab.svg",revision:"8e520fba10dc2c7d998810eccd2eee24"},{url:"index.html",revision:"156a3e69a8bcab24c5cb9d1a155ae90f"},{url:"js/2.68a77cad.js",revision:"a203e6bf46be2088a40c0fec7b537855"},{url:"js/3.c0074082.js",revision:"e78a0ee14b825536ffa76b255d4abde4"},{url:"js/4.255c4206.js",revision:"7b59b0b109e1e4366b1a915f6a1dada7"},{url:"js/app.f7922933.js",revision:"4ed2961d0e7d1a9fae2f6eb2dfc734aa"},{url:"js/vendor.a9a1702e.js",revision:"b8b392970cc3c9649aeee9489fdaa5c0"},{url:"manifest.json",revision:"b55bf28f20f4de65ca33dd2456273620"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
