import { createApp } from 'vue'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import '~/styles/index.less'
import 'uno.css'

import { setupStore } from '~/stores'
import { setupRouter } from '~/router'
import { setupGlobDirectives } from '~/directives'
import { setupMutationObserver } from '~/utils/useMutationObserver'

function setupApp() {
  const app = createApp(App)

  // Configure store
  setupStore(app)

  // Configure router
  setupRouter(app)

  // Configure directives
  setupGlobDirectives(app)
  app.mount('#app')

  // setup mutation observer
  setupMutationObserver()
}

setupApp()
