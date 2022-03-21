import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import setupAutoImport from './auto-import'
import setupVueComponents from './vue-components'
import setupMockServer from './mock'

export default function setupVitePlugins(isBuild: boolean) {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    vue()
  ]

  // unplugin-auto-import
  vitePlugins.push(setupAutoImport())

  // unplugin-vue-components
  vitePlugins.push(setupVueComponents())

  // vite-plugin-mock
  vitePlugins.push(setupMockServer(isBuild))

  return vitePlugins
}
