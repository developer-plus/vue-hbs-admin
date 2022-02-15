import type { AxiosRequestConfig, AxiosResponse } from 'axios'

interface HRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (error: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

interface HRequestConfig extends AxiosRequestConfig {
  interceptors?: HRequestInterceptors
}

export { HRequestInterceptors, HRequestConfig }
