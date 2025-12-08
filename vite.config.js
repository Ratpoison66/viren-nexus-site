import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: 'src/pages',
  publicDir: 'src/assets',
  build: {
    outDir: resolve(__dirname, 'dist'),
    emptyOutDir: true,
    assetsDir: 'assets'
  },
  server: {
    port: 5173
  }
})
