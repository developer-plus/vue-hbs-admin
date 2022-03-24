import { createApp } from 'vue'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/index.less'
import 'uno.css'

import { router, setupRouter } from './router'
import { setupRouterGuard } from '~/router/guard'

function bootstrap() {
  const app = createApp(App)

  // Configure router
  setupRouter(app)

  // Router guard
  setupRouterGuard(router)

  setTimeout(() => {
    app.mount('#app')
  }, 10000)
}

bootstrap()
