import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface HRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface HRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HRequestInterceptors<T>
  showLoading?: boolean
}
