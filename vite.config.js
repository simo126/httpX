import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        chunkSizeWarningLimit: 800, // Adjust this value as needed
      },
    },
  },
  server: {
    proxy: {
      "/api": "http://localhost:5173/app",
    },
  },
  plugins: [react()],
  base: "./",
});
