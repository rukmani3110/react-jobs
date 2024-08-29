import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      "/apis": {
        target: "https://backend-main-10lfjwz2a-rukmanis-projects.vercel.app",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/apis/, ""),
      },
    },
  },
});
