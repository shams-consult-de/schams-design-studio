import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import fs from "node:fs";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "copy-htaccess",
      closeBundle() {
        const src = path.resolve(__dirname, "public/.htaccess");
        const dest = path.resolve(__dirname, "dist/.htaccess");
        if (fs.existsSync(src)) {
          fs.copyFileSync(src, dest);
        }
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: false,
  },
});

