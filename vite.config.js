import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

console.log(process.env.NODE_ENV)

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [vue()]
})
