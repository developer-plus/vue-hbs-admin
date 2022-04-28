import type { App } from 'vue'
import directives from './fearture_dir'
export function setupDirectives(app: App<Element>) {
  app.use(directives)
}
