import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate', // Auto updates the service worker
      manifest: {
        name: 'Portfolio',
        short_name: 'Portfolio',
        description: 'PWA for Portfolio',
        theme_color: '#000000',
        background_color: '#000000',
        display: 'standalone',
        icons: [
          {
            "src": "/icon-192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/icon-512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,png,svg}'],
      },
    }),
  ],
});
