/**
 *  Coonfigure and register global directives
 */

import type { App } from 'vue'
import { setupLazyImgDirectives } from './lazyImg'
export function setupGlobDirectives(app: App) {
  setupLazyImgDirectives( app )
}
