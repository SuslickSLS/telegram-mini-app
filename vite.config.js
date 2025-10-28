import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // или '/telegram-mini-app/' если хотите в подпапке
  build: {
    outDir: 'dist',
    sourcemap: false,
    emptyOutDir: true
  }
})