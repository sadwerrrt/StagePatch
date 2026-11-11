const CACHE="stagepatch-v2";
const ASSETS=["./","./index.html","./manifest.webmanifest","./icon-192.png","./icon-512.png","./icon-maskable-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
 if(e.request.method!=="GET")return;
 e.respondWith(caches.match(e.request).then(hit=>{
  const net=fetch(e.request).then(r=>{if(r&&r.ok){const x=r.clone();caches.open(CACHE).then(c=>c.put(e.request,x))}return r}).catch(()=>hit||caches.match("./index.html"));
  return hit||net;
 }));
});
