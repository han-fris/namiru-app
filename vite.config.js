import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vercel from 'vite-plugin-vercel';

const vercelConfig = {
  rewrites: [
    {
      source: '/(.*)',
      destination: '/index.html',
    },
  ],
};

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
  plugins: [react(), vercel(vercelConfig)],
});
