import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: 'IKF BCA 2026 - Product Catalog',
        short_name: 'IKF Catalog',
        description: 'Interactive Digital Product Catalog for IKF BCA 2026 Booth',
        theme_color: '#0B5FA5',
        background_color: '#0B5FA5',
        display: 'fullscreen',
        orientation: 'any',
        icons: [
          { src: '/pwa-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: '/pwa-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          // Logo scaled into the 80% safe zone on a full-bleed background so Android's mask never clips it
          { src: '/maskable-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,woff,woff2}'],
        maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
        // Videos are too large to precache and are played via Range requests,
        // so they live in their own cache (filled by warmVideoCache in main.tsx)
        // and are served back as 206 slices when offline.
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.pathname.endsWith('.mp4'),
            handler: 'CacheFirst',
            options: {
              cacheName: 'videos',
              rangeRequests: true,
              cacheableResponse: { statuses: [200] },
            },
          },
        ],
      }
    })
  ],
  server: {
    host: true, // sama kayak 0.0.0.0
    port: 5173,
    allowedHosts: true,
  },
})
