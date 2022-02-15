// service 统一出口
import HRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const hRequest = new HRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('成功')
      return config
    },
    requestInterceptorsCatch: (err) => {
      console.log('失败')
      return err
    },
    responseInterceptor: (res) => {
      console.log('响应成功')
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log('响应失败')
      return err
    }
  }
})

export default hRequest
