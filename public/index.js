navigator.serviceWorker.ready.then(e => {
  e.update().then(() => {
    const channel = new MessageChannel();
    navigator.serviceWorker.controller?.postMessage("test", [channel.port2]);
  });
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/public/sw.js")
    .then(e => console.log(`service worker regist success`, e))
    .catch(e => console.error(`service worker regist failed`, e));
}