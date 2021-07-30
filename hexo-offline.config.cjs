// offline config passed to workbox-build.
module.exports = {
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/.*/,
      handler: "CacheFirst"
    },
    {
      urlPattern: /^https:\/\/cdnjs\.cloudflare\.com\/.*/,
      handler: "CacheFirst"
    }
  ]
},
