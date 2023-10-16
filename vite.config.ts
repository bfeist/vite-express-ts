import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api/v1": {
        target: "http://localhost:5000/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/v1/, ""),
      },
    },
    port: 5100,
  },
  plugins: [react()],
  root: "./src",
  build: {
    outDir: "../dist",
    assetsDir: "assets",
    sourcemap: true,
    manifest: true,
    rollupOptions: {
      input: "index.html",
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
        },
      },
    },
  },
});
