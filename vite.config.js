import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/socket.io': {
        target: 'https://trashtalk-be-gas-production.up.railway.app',
        ws: true,
        changeOrigin: true,
      }
    }
  }
})


