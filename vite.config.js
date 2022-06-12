const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
  assetsInclude: ['**/*.hdr'],
  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        lab: resolve(__dirname, 'lab.html'),
        crypto: resolve(__dirname, 'crypto.html')
      }
    }
  }
})