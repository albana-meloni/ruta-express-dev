// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    server: {
      fs: {
        strict: false
      }
    },
    define: {
      'process.env.NODE_ENV': '"development"'
    }
  },
  build: {
    inlineStylesheets: 'auto'
  }
});