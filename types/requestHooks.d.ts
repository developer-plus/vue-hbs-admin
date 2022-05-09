import type { AxiosPromise, AxiosResponse } from 'axios'
import type { Ref } from 'vue'
declare global {
  interface BaseParams<T> {
    state?: Ref<T>
    axios: AxiosPromise<ResponseData<T>>
    key?: string
  }

  interface UseLoadingRequestParameters<T> extends BaseParams<T> {
    loadings?: Ref<boolean> | Ref<boolean>[]
    scheduler?: (
      res: AxiosResponse<ResponseData<T>, any>,
      refSeta?: Ref<T>
    ) => any
  }
  type UseIsNullRequestParameters<T> = BaseParams<T>

  interface UseMessageRequest<T> extends UseLoadingRequestParameters<T> {
    successMessage?: string
    errorMessage?: string
    successCode?: string | number
    errorCode?: string | number
  }

  interface UseOptionsRequestParameters<T> {
    axios?: AxiosPromise<ResponseData<T>>
    scheduler?: (
      res: AxiosResponse<ResponseData<T>, any>,
      refSeta?: Ref<any>
    ) => void
  }

  type Pagination<T> = T & { pageSize: number; pageNum: number }

  /**
   * @description usePaginationRequest函数的返回值
   */
  interface PaginationRequestReturn {
    prev: () => number
    next: () => number
    to: (num: number) => number
    pageSize: Ref<number>
    pageNum: Ref<number>
  }
  type PaginationRequestReturnRes = Promise<PaginationRequestReturn>

  type PaginationTool = Record<string, PaginationRequestReturn>

  type PaginationAxios<Y, T = {}> = (
    data: Pagination<T>
  ) => AxiosPromise<ResponseData<Y>>

  interface PaginationRequestParams<Y, T> {
    successMessage?: string
    errorMessage?: string
    successCode?: string
    errorCode?: string
    axios?: PaginationAxios<Y, T>
    state?: Ref<Y>
    data?: T
    loadings?: Ref<boolean> | Ref<boolean>[]
    isNull?: boolean
    isMessage?: boolean
    pageSize?: number
    allCount?: Ref<number>
    scheduler?: (res: AxiosResponse<ResponseData<Y>>, refSeta?: Ref<Y>) => void
    page?: Ref<number>
  }

  type PaginationAxiosCache = (data: any) => AxiosPromise<ResponseData<any>>
  interface UseCacheRequestParameters {
    key: string
  }
}
