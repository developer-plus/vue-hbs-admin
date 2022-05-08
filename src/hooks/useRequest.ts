import type { AxiosResponse } from 'axios'
import { isArray } from '~/utils/is'
import { noop } from '~/utils'

/**
 * @author: tick
 * @description: 发起请求，判断请求回来的参数是否为空从而作出提示。请求结束后赋值变量
 * @param {UseLoadingRequestParameters<T[]>} options 必须 函数参数配置
 * @param {Ref<T[]> | undefined | Ref<T>} [options.state] 非必需 请求时想要赋值的参数ref类型
 * @param {AxiosPromise<ResProps<T[]>>} options.axios 必须  axios请求
 * @return {AxiosResponse<ResProps<T | T[]>, any>} res 请求接口返回的数据
 */
const useIsNullRequest = async <T>({
  axios,
  state
}: UseIsNullRequestParameters<T>) => {
  // todo 信息提示的来源
  // <->
  const res = await axios
  const response = (
    isArray(res.data.data) ? res.data.data : Object.keys(res.data.data)
  ) as string[] | any[]
  if (response.length === 0) {
    // todo 信息提示
  }
  if (state && res.data) {
    state.value = res.data.data
  }
  return res
}

const setArrayValue = (arr: Ref<Boolean>[], value: boolean) =>
  arr.forEach(item => (item.value = value))

/**
 * @author: tick
 * @description: 拥有控制loading,赋值ref变量的请求工具
 * @param {UseLoadingRequestParameters<T[]>} options 必须- 函数参数配置
 * @param {Ref<T[]> | undefined | Ref<T>} [options.state] 非必需- 请求时想要赋值的参数ref类型
 * @param {Ref<boolean> | Ref<boolean>[]} options.loadings 必须- ref设置的关于按钮loading的变量
 * @param {AxiosPromise<ResProps<T[] | T>>} options.axios 必须-  axios请求
 * @return {T} 根据函数的泛型决定返回的类型
 */
const useLoadingRequest = async <T>({
  state,
  axios,
  loadings = [],
  scheduler
}: UseLoadingRequestParameters<T>) => {
  const loadingStates: Ref<boolean>[] = Array.isArray(loadings)
    ? loadings
    : [loadings]
  setArrayValue(loadingStates, true)
  const res = await axios

  if (!!scheduler && scheduler !== noop) {
    scheduler(res, state)
  }
  else if ((!scheduler || scheduler === noop) && state && res.data) {
    state.value = res.data.data
  }

  setArrayValue(loadingStates, false)

  return res
}

/**
 * @author: tick
 * @description: 拥有控制loading,赋值ref变量的请求工具，同时可以判断值数组是否为空
 * @param {UseLoadingRequestParameters<T[]>} options 必须 函数参数配置
 * @param {Ref<T[]> | undefined | Ref<T>} [options.state] 非必需 请求时想要赋值的参数ref类型
 * @param {Ref<boolean> | Ref<boolean>[]} options.loadings 必须 ref设置的关于按钮loading的变量
 * @param {AxiosPromise<ResProps<T[]>>} options.axios 必须  axios请求
 * @return {T} 根据函数的泛型决定返回的类型
 */
const useLoadingRequestOrIsNull = async <T>({
  state,
  axios,
  loadings,
  scheduler
}: UseLoadingRequestParameters<T>) => {
  // todo 信息提示的来源
  // <->
  const res = await useLoadingRequest({
    axios,
    state,
    loadings,
    scheduler
  })
  if (!res.data.data) return res
  const dara = res.data.data
  const response = (isArray(dara || []) ? dara : Object.keys(dara)) as
    | string[]
    | T[]
  if (response.length === 0) {
    // todo 数据为空时 信息提示
  }

  return res
}

const useMessageRequest = async <T>({
  state,
  axios,
  loadings = [],
  errorMessage,
  successCode = 0,
  errorCode = 500,
  scheduler
}: UseMessageRequest<T>) => {
  // todo 信息提示的来源
  // <->

  try {
    const res = await useLoadingRequest({ state, axios, loadings, scheduler })
    if (successCode === res.data.code) {
      // todo 成功的信息提示
      // message("success", successMessage || res.data.msg);
    }
    else if (errorCode === res.data.code) {
      // todo 失败的信息提示
      // message("error", errorMessage || res.data.msg);
    }
    return res
  }
  catch (error) {
    if (errorMessage) {
      // todo 失败的信息提示
      // message("error", errorMessage);
    }
  }
}

type RequestTools =
  | typeof useLoadingRequest
  | typeof useLoadingRequestOrIsNull
  | typeof useMessageRequest

/**
 * @author: tick
 * @description: 使用具有分页功能的接口时调用的函数
 * @param {PaginationAxios<Y, T>} options.axios 封装好的axios请求函数
 * @param {Ref<Y>} options.state 要赋值的变量
 * @param {T} options.data 封装好的axios请求函数的参数
 * @param {Ref<boolean> | Ref<boolean>[]} [options.loadings] ref设置的关于按钮loading的变量
 * @param {boolean} [options.isNull] 请求完成后自动判断数据是否为kong并作出提示
 * @param {boolean} [options.pageSize] 每页的个数
 * @return {PaginationRequestReturn} prev 返回上一页 next 前往下一页 to 前往指定页
 */
const usePaginationRequest = <Y, T = {}>({
  data,
  axios,
  state,
  loadings,
  isNull,
  pageSize = 10,
  isMessage,
  allCount,
  successMessage,
  errorMessage,
  successCode = '200',
  errorCode = '400',
  scheduler = noop,
  page
}: PaginationRequestParams<Y, T>): PaginationRequestReturn => {
  const pagination = shallowReactive({
    pageSize,
    pageNum: 1
  })
  const _data = computed(() => {
    if (!data) {
      data = {} as T
    }
    return {
      ...data,
      pageSize: pagination.pageSize,
      pageNum: pagination.pageNum
    }
  })
  const su = patchRequest(isNull, isMessage)
  const stopWatch = watch(
    pagination,
    async() => {
      if (!axios || !su) return
      if (page) {
        page.value = _data.value.pageNum
      }

      const res = (await su({
        axios: axios(_data.value),
        state,
        loadings: loadings || [],
        scheduler,
        successMessage,
        errorMessage,
        successCode,
        errorCode
      })) as AxiosResponse<ResponseData<Y | Y[]>>
      if (allCount && res && res.data && res.data.total) {
        allCount.value = res.data.total
      }
    },
    { immediate: true }
  )

  tryOnScopeDispose(() => {
    stopWatch()
  })
  return {
    prev: () => (pagination.pageNum -= 1),
    next: () => (pagination.pageNum += 1),
    to: (num: number) => {
      return (pagination.pageNum = num)
    },
    ...toRefs(pagination)
  }
}
function patchRequest(
  isNull: boolean | undefined,
  isMessage: boolean | undefined
) {
  let su: RequestTools | null = null
  if (isNull) {
    su = useLoadingRequestOrIsNull
  }
  else if (!isNull && isMessage) {
    su = useMessageRequest
  }
  else {
    su = useLoadingRequest
  }
  return su
}

const useAddPagination = (
  key: string,
  pagination: Map<string, PaginationRequestReturn>,
  value: PaginationRequestReturn
) => {
  pagination.set(key, value)
}

/**
 * @description: 请求hooks的工具包
 * @return {Object} 返回所有请求的hooks函数
 */
function useRequest() {
  return {
    useLoadingRequest,
    useIsNullRequest,
    useLoadingRequestOrIsNull,
    usePaginationRequest,
    useAddPagination,
    useMessageRequest
  }
}

export default useRequest
