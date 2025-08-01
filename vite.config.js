import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    fs: {
      strict: false
    }
  },
  define: {
    'process.env.NODE_ENV': '"development"'
  }
}); 