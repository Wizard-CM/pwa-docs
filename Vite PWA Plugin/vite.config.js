import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),

    // PWA Setup starts
    VitePWA({
      registerType: "autoUpdate",
      // registerType: "prompt",

      includeAssets: ["vite.svg"],
      manifest: {
        name: "My Vite React App",
        short_name: "ViteReact",
        start_url: "/",
        display: "standalone",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/vite.svg",
            sizes: "192x192",
            type: "image/svg+xml",
          },
        ],
      },
      workbox: {
        cleanupOutdatedCaches: true,
        runtimeCaching: [
          // Table Data API Cache
          {
            urlPattern: /^https:\/\/jsonplaceholder\.typicode\.com\/users/,
            handler: "NetworkFirst",
            options: {
              cacheName: "table-api-cache",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 24 * 60 * 60,
              },
            },
          },

          // Products Data API Cache
          {
            urlPattern: /^https:\/\/fakestoreapi\.com\/products/,
            handler: "NetworkFirst",
            options: {
              cacheName: "images-api-cache",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 24 * 60 * 60,
              },
            },
          },

          // Images Cache
          {
            urlPattern:/^https:\/\/fakestoreapi\.com\/img\/.*\.(jpg|jpeg|png|gif)$/i,
            handler: "NetworkFirst",
            options: {
              cacheName: "images-cache",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 24 * 60 * 60,
              },
            },
          },
        ],
      },
    }),
  ],
});
