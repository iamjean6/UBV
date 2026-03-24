import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
   server: {
    host: true,
    allowedHosts: true
  },
  optimizeDeps: {
    exclude: ['backend']
  },
  build: {
    rollupOptions: {
      external: ['backend/**']
    }
  },
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    tailwindcss(),
  ],
})
