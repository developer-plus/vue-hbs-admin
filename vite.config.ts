import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`
    }
  },

  plugins: [
    vue(),

    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core'
      ],
      resolvers: [ElementPlusResolver()],
      dts: 'src/auto-imports.d.ts'
    }),

    Components({
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/components.d.ts',
      resolvers: [ElementPlusResolver()]
    })
  ]
})
