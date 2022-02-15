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
  }

  request(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default HRequest
