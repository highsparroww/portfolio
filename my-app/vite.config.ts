import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    cssMinify: true,          // Minify CSS
    minify: 'esbuild',        // Use fast minification
    sourcemap: false,         // Disable sourcemaps for smaller builds
    chunkSizeWarningLimit: 1000, // Optional: Avoid warnings for large files
  },
})
