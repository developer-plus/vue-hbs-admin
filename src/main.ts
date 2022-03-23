import { createApp } from 'vue'
import App from './App.vue'

import router from './router'

const app = createApp(App)

setTimeout(() => {
  app.use(router).mount('#app')
}, 10000)
