import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { HRequestInterceptors, HRequestConfig } from './type'

import { ElLoading } from 'element-plus'
import type { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

const DEFAULT_LOADING = true

class HRequest {
  instance: AxiosInstance
  interceptors?: HRequestInterceptors
  showLoading: boolean
  loading?: LoadingInstance

  constructor(config: HRequestConfig) {
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
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
        console.log('所有的实例都有的拦截器: 请求成功拦截')
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据...',
            background: 'rgba(0, 0, 0, 0.5)'
          })
        }
        return config
      },
      (err) => {
        console.log('所有的实例都有的拦截器: 请求失败拦截')
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        console.log('所有的实例都有的拦截器: 响应成功拦截')

        // 将 loading 移除
        this.loading?.close()

        const data = res.data
        if (data.returnCode === '-1001') {
          console.log('请求失败')
        } else {
          return data
        }
      },
      (err) => {
        console.log('所有的实例都有的拦截器: 响应失败拦截')
        this.loading?.close()
        // 例子：判断不同的 HttpErrorCode 显示不同的错误信息
        if (err.response.status === 404) {
          console.log('404 的错误')
        }
        return err
      }
    )
  }

  request<T>(config: HRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 1. 单个请求对请求 config 的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      // 2. 判断是否需要显示 loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 1. 单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }

          // 2. 将 showLoading 设置为 true, 这样不会影响下一个请求
          this.showLoading = DEFAULT_LOADING

          // 3. 将结果 resolve 返回出去
          resolve(res)
        })
        .catch((err) => {
          // 将 showLoading 设置为 true, 这样不会影响下一个请求
          this.showLoading = DEFAULT_LOADING
          reject(err)
          return err
        })
    })
  }

  get<T>(config: HRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: HRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: HRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: HRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default HRequest
