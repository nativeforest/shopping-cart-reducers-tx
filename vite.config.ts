import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@models': path.resolve(__dirname, './src/models'),
    },
  },
  plugins: [react()],
  server: {
    host: true,
  },
});
