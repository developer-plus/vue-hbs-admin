/**
 *  Coonfigure and register global directives
 */

import { App } from 'vue'
import { setupLazyImgDirectives } from './lazyImg'
export function setupGlobDirectives (app: App) {
  setupLazyImgDirectives(app)
}
