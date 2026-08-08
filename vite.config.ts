import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // This allows you to use @/ instead of ../../../
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  server: {
    // Development server configuration
    port: 3000,
    proxy: {
      // Forward API calls to backend during development
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    // Production build configuration
    outDir: 'dist',
    sourcemap: false, // Set to true for debugging in production
  },
})