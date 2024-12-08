/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "./src")}]
  },
  base: "/",
  build: {
    outDir: "./dist"
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: './setupTests.ts',
  }
})
