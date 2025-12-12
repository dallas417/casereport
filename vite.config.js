import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['testing.warn.live'],
  },
  base: './',
  build: {
    outDir: 'docs',
  },
});
