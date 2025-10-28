import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/telegram-mini-app/', // для GitHub Pages
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})