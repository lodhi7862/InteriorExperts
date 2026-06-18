import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
  build: {
    rollupOptions: {
      output: {
        // Split large dependencies into separate chunks
        manualChunks: {
          gsap: ['gsap', '@gsap/react'],
          framer: ['framer-motion'],
          vendor: ['react', 'react-dom', 'lenis'],
        },
      },
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 700,
    // Enable source maps for debugging
    sourcemap: false,
    // Minify CSS and JS
    minify: 'terser',
  },
});
