import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'

export default function setupIcons() {
  return Icons({
    compiler: 'vue3',
    customCollections: {
      'my-icons': FileSystemIconLoader(
        'src/assets/icons',
        svg => svg.replace(/^<svg /, '<svg fill="currentColor" ')
      )
    }
  })
}
