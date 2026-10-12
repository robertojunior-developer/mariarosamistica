import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Hospedado na Vercel com domínio próprio, servido a partir da raiz.
  base: '/',
  plugins: [react(), tailwindcss()],
})
