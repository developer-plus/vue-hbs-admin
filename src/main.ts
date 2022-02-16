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

// hRequest.request({
//   url: '/home/multidata',
//   method: 'GET',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独请求的 config')
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单独响应的 res')
//       return res
//     }
//   }
// })

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

hRequest
  .request<DataType>({
    url: '/home/multidata',
    method: 'GET',
    showLoading: false
  })
  .then((res) => {
    console.log(res.data)
    console.log(res.returnCode)
    console.log(res.success)
  })
