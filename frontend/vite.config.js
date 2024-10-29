import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Tambahkan ini
    port: 3001, // Sesuaikan port jika perlu
  },
})
