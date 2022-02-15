import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { HRequestInterceptors, HRequestConfig } from './type'

class HRequest {
  instance: AxiosInstance
  interceptors?: HRequestInterceptors

  constructor(config: HRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorsCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有的实例都有的拦截器: 请求拦截成功')
        return config
      },
      (err) => {
        console.log('所有的实例都有的拦截器: 请求拦截失败')
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有的实例都有的拦截器: 响应拦截成功')
        return res
      },
      (err) => {
        console.log('所有的实例都有的拦截器: 响应拦截失败')
        return err
      }
    )
  }

  request(config: HRequestConfig): void {
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config)
    }
    this.instance.request(config).then((res) => {
      if (config.interceptors?.responseInterceptor) {
        res = config.interceptors.responseInterceptor(res)
      }
      console.log(res)
    })
  }
}

export default HRequest
