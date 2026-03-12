import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        howItWorks: 'how-it-works.html',
        pricing: 'pricing.html',
        aboutDrTony: 'about-dr-tony.html',
        services: 'services.html',
      },
    },
  },
});
