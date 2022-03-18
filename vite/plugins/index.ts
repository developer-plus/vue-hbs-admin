import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import createAutoImport from './auto-import'
import createVueComponents from './vue-components'

export default function createVitePlugins() {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    vue()
  ]

  // unplugin-auto-import
  vitePlugins.push(createAutoImport())

  // unplugin-vue-components
  vitePlugins.push(createVueComponents())

  return vitePlugins
}
