/* Sillon — service worker pour les notifications push.
   Reçoit le push depuis le serveur Supabase et affiche la notification. */

self.addEventListener("install", (e) => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));

self.addEventListener("push", (event) => {
  let payload = {};
  try { payload = event.data ? event.data.json() : {}; } catch { payload = { title: "Sillon", body: event.data?.text() || "" }; }
  const title = payload.title || "Sillon";
  const options = {
    body: payload.body || "",
    icon: "/icon.svg",
    badge: "/icon.svg",
    image: payload.image,
    data: { url: payload.url || "/" },
    tag: payload.tag || "sillon",
    renotify: true,
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  const url = event.notification.data?.url || "/";
  event.waitUntil((async () => {
    const all = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
    for (const c of all) { if (c.url.includes(self.location.origin)) { c.focus(); c.navigate(url); return; } }
    await self.clients.openWindow(url);
  })());
});
