import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import viteImagemin from 'vite-plugin-imagemin';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteImagemin({
      gifsicle: {
        optimizationLevel: 1,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 1,
      },
      mozjpeg: {
        quality: 10,
      },
      pngquant: {
        quality: [0.1, 0.1],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
  ],
  build: {
    minify: true,
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src/'),
      },
    ],
  },
  base: process.env.NODE_ENV === 'production' ? '/studio-web/' : '/',
})
