import { createApp } from 'vue'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/index.less'
import 'uno.css'

import { setupRouter } from './router'

function bootstrap() {
  const app = createApp(App)

  // Configure router
  setupRouter(app)

  app.mount('#app')
}

bootstrap()
