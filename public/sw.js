console.log("global", self);

self.addEventListener("message", (e) => {
  console.log("pong message");
  console.log(e.data);
});

self.addEventListener('install', function (event) {
  event.waitUntil(
    self.skipWaiting()
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});