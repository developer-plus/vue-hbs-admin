import AutoImport from 'unplugin-auto-import/vite'

export default function createAutoImport() {
  return AutoImport({
    imports: [
      'vue',
      'vue-router',
      '@vueuse/core'
    ],
    dts: 'src/auto-imports.d.ts'
  })
}
