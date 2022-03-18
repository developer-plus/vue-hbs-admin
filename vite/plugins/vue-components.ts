import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default function createVueComponents() {
  return Components({
    extensions: ['vue'],
    include: [/\.vue$/, /\.vue\?vue/],
    dts: 'src/components.d.ts',
    resolvers: [AntDesignVueResolver()]
  })
}
