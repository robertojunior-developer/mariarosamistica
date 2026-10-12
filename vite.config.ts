import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Publicado em https://robertojunior-developer.github.io/mariarosamistica/
  base: '/mariarosamistica/',
  plugins: [react(), tailwindcss()],
})
