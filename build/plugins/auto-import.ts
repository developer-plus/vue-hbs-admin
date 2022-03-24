import AutoImport from 'unplugin-auto-import/vite'

export default function setupAutoImport() {
  return AutoImport({
    imports: [
      'vue',
      'vue-router',
      '@vueuse/core'
    ],
    dts: 'types/auto-imports.d.ts'
  })
}
