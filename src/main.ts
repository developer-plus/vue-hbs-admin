import { createApp } from 'vue'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import '~/styles/index.less'
import 'uno.css'

import { setupStore } from '~/stores'
import { setupRouter } from '~/router'
import { setupDirectives } from '~/directives'

function setupApp() {
  const app = createApp(App)

  // Configure store
  setupStore(app)

  // Configure router
  setupRouter(app)

  // Configure directives
  setupDirectives(app)
  app.mount('#app')
}

setupApp()
