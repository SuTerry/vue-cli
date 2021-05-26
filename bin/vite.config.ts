import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
const path = require('path')
const alias = require('./config/alias')
const extensions = require('./config/extensions')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias,
    extensions,
  },
  plugins: [
    vue(),
  ],
  root: path.resolve(__dirname, '../src'),
  server: {
    host: 'localhost.ccopyright.com.cn',
    port: 9090,
    open: true,
  },
})
