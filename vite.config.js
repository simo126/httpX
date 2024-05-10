import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Check if the module is inside node_modules
          if (id.includes("node_modules")) {
            // Extract the name of the module from its path
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
  server: {
    proxy: {
      "/api": "http://localhost:5173/httpx/app",
    },
  },
  plugins: [react()],
  base: "/httpX/",
});
