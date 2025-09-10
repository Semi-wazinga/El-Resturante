import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     "/menu": "http://127.0.0.1:3000",
  //     "/auth": "http://127.0.0.1:3000",
  //     "/reservation": "http://127.0.0.1:3000",
  //     "/uploads": "http://127.0.0.1:3000",
  //   },}
})
