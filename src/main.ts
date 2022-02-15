import { createApp } from 'vue'
import { globalRegister } from './global'

import hRequest from './service'

import App from './App.vue'

import router from './router'
import store from './store'

const app = createApp(App)

app.use(globalRegister)
app.use(router)
app.use(store)
app.mount('#app')

console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)

hRequest.request({
  url: '/home/multidata',
  method: 'GET'
})
