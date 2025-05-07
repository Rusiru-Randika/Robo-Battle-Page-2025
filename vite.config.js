import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // <-- This is the magic
    port: 5174, // optional, just to fix the port if you want
  }
})
