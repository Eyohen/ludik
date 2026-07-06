import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const noStoreHeaders = {
  'Cache-Control': 'no-store, max-age=0, must-revalidate',
}

const env = globalThis.process?.env || {}
const buildVersion =
  env.VITE_BUILD_VERSION ||
  env.VERCEL_GIT_COMMIT_SHA ||
  env.GITHUB_SHA ||
  new Date().toISOString()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.VITE_BUILD_VERSION': JSON.stringify(buildVersion),
  },
  server: {
    headers: noStoreHeaders,
  },
  preview: {
    headers: noStoreHeaders,
  },
})
