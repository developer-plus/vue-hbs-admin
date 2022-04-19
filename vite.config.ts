import { resolve } from 'path'
import type { UserConfig, ConfigEnv } from 'vite'
import { loadEnv } from 'vite'
import dayjs from 'dayjs'
import pkg from './package.json'
import { wrapperEnv } from './build/utils'
import setupVitePlugins from './build/plugins'
import { createProxy } from './build/proxy'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

const { dependencies, devDependencies, name, version } = pkg
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: dayjs().format('YYYY-MM-DD HH:mm:ss')
}

export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()

  const env = loadEnv(mode, root)

  // The boolean type read by loadEnv is a string. This function can be converted to boolean type
  const viteEnv = wrapperEnv(env)

  const { VITE_PUBLIC_PATH, VITE_PORT, VITE_PROXY, VITE_DROP_CONSOLE } = viteEnv

  const isBuild = command === 'build'

  return {
    base: VITE_PUBLIC_PATH,
    root,
    resolve: {
      alias: [
        {
          find: /~\//,
          replacement: `${pathResolve('src')}/`
        },
        {
          find: /#\//,
          replacement: `${pathResolve('types')}/`
        }
      ]
    },

    server: {
      // Listening on all local IPs
      host: true,
      open: true,
      port: VITE_PORT,
      // Load proxy configuration from .env
      proxy: createProxy(VITE_PROXY)
    },

    esbuild: {
      pure: VITE_DROP_CONSOLE ? ['console.log', 'debugger'] : []
    },

    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__)
    },

    // The vite plugin used by the project. The quantity is large, so it is separately extracted and managed
    plugins: setupVitePlugins(viteEnv, isBuild)
  }
}
