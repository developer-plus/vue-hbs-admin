import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface InterceptorHooks {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any

  responseInterceptor?: (response: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

export interface RequestConfig extends AxiosRequestConfig {
  interceptorHooks?: InterceptorHooks
}

export interface Result<T> {
  code: number
  data: T
}
