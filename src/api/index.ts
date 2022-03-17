import Request from '../utils/request'
import { BASE_URL, TIME_OUT } from './config'

const request = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptorHooks: {
    requestInterceptor: (config) => {
      return config
    },
    requestInterceptorCatch: (error) => {
      return error
    },
    responseInterceptor: (response) => {
      return response.data
    },
    responseInterceptorCatch: (error) => {
      return error
    }
  }
})

export default request
