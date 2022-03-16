import { createApp } from 'vue'
import App from './App.vue'

import 'normalize.css'
import './styles/index.css'

import router from './router'

const app = createApp(App)

app.use(router).mount('#app')
