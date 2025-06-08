import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vercel from 'vite-plugin-vercel';

export default defineConfig({
  server: {
    hmr: false,
  },
  build: {
    target: 'es2022',
    modulePreload: {
      resolveDependencies: false,
    },
  },
  plugins: [react(), vercel()],
});
