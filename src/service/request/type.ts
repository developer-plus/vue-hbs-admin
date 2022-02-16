import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface HRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (error: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

export interface HRequestConfig extends AxiosRequestConfig {
  interceptors?: HRequestInterceptors
}
