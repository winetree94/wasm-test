import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  build: {
    target: 'esnext',
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: path.resolve(__dirname, '../wasm/dist/wasm.wasm'),
          dest: './',
        },
      ],
    }),
  ],
});
