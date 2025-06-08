import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vercel from 'vite-plugin-vercel';

export default defineConfig({
  root: './src',
  publicDir: '../public',
  server: {
    hmr: false,
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    target: 'es2022',
    modulePreload: {
      resolveDependencies: false,
    },
  },
  plugins: [react(), vercel()],
});
