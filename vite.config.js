import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const noStoreHeaders = {
  'Cache-Control': 'no-store, max-age=0',
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    headers: noStoreHeaders,
  },
  preview: {
    headers: noStoreHeaders,
  },
})
