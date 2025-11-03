import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/testedeeestilomasc/', // caminho do seu repo no GitHub Pages
  plugins: [react()],
})
