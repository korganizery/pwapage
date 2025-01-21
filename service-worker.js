self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("v1")
      .then((cache) => {
        const urlsToCache = [
          "./",
          "./icon-192x192.png",
          "./icon-512x512.png",
          "./manifest.json",
        ];
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.error("Failed to cache:", error);
      }),
  );
});
