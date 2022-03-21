import path from 'path'
import type { UserConfig, ConfigEnv } from 'vite'
import setupVitePlugins from './build/plugins'
import { createProxy } from './build/proxy'

export default ({ command }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build'

  return {
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`
      }
    },

    server: {
      host: true,
      proxy: createProxy()
    },

    plugins: setupVitePlugins(isBuild)
  }
}
