import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/socket.io': {
        target: `${process.env.VITE_SOCKET_URL}` || `${process.env.VITE_SOCKET_URL2}`,
        ws: true,
        changeOrigin: true
      }
    }
  }
})
