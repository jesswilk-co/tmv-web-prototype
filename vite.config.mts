import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/tmv-web-prototype/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        howItWorks: 'how-it-works.html',
        pricing: 'pricing.html',
        aboutDrTony: 'about-dr-tony.html',
        services: 'services.html',
        endOfLife: 'end-of-life.html',
        terms: 'terms.html',
        booking: 'booking.html',
      },
    },
  },
});
