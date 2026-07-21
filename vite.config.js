import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  server: {
    host: true,
    port: 5173
  },

  preview: {
    host: true,
    port: 4173
  },

  build: {
    target: "esnext",
    sourcemap: false,
    minify: "esbuild",
    chunkSizeWarningLimit: 1500
  },

  resolve: {
    alias: {
      "@": "/src"
    }
  }
});
