import Request from '../utils/request'
import { BASE_URL, TIME_OUT } from './config'
import localCache from '~/utils/cache'
import { TOKEN_KEY } from '~/enums/cache-enum'

const request = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptorHooks: {
    requestInterceptor: (config) => {
      const token = localCache.getCache(TOKEN_KEY)
      if (token) {
        config.headers.Authorization = token
      }
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
