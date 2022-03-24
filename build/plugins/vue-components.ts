import Components from 'unplugin-vue-components/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default function setupVueComponents() {
  return Components({
    dirs: ['src/global-components'],
    extensions: ['vue'],
    include: [/\.vue$/, /\.vue\?vue/],
    dts: 'src/components.d.ts',
    resolvers: [
      AntDesignVueResolver(),
      IconsResolver({
        customCollections: ['my-icons']
      })
    ]
  })
}
