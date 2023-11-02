import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Server options go here
    port: 3000, // Specify the port number
    open: true, // Automatically open the default browser when the server starts
  },
})
