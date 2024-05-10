import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  server: {
    proxy: {
      "/api": "http://localhost:5173/app",
    },
  },
  plugins: [react()],
  base: "/",
});
