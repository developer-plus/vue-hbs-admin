import path from 'path'
import { defineConfig } from 'vite'
import setupVitePlugins from './build/plugins'
import { createProxy } from './build/proxy'

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`
      }
    },

    server: {
      https: true,
      host: true,
      proxy: createProxy()
    },

    plugins: setupVitePlugins()
  }
})
