import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "./",
  resolve: { alias: { "@": path.resolve(import.meta.dirname, "src") } },
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "dist",
    emptyOutDir: false,
    assetsInlineLimit: 0,
    cssCodeSplit: false,
    rollupOptions: {
      input: path.resolve(import.meta.dirname, "connected.html"),
      output: {
        entryFileNames: "connected-assets/[name]-[hash].js",
        chunkFileNames: "connected-assets/[name]-[hash].js",
        assetFileNames: "connected-assets/[name]-[hash][extname]",
      },
    },
  },
});
