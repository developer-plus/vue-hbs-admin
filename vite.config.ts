import path from 'path'
import { defineConfig } from 'vite'
import createVitePlugins from './vite/plugins'

export default defineConfig(() => {
  return {
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`
      }
    },

    plugins: createVitePlugins()
  }
})
