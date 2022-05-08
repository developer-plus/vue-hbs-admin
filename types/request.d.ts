declare interface ResponseData<T> {
  code: string
  msg: string
  data: T
  total?: number
}
