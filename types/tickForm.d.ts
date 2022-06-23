
declare interface TickFormItem {
  label: string
  key: string
  type: string
  cops?: object
  name?: string
  message?: string
  trigger?: string
  required?: boolean
  rules?: object[]
  ant?: boolean
  proxyKey?: string | string[]
  watchKey?: string[] | string
  defaultValue?: any
  valueType?: string
  axiosOptions?: () => Promise<any[]>
  reconfiguration?: (value: any) => { key: string; value: any }[]
  update?: (row: any) => any
  reset?: (formItem: TickFormData) => string | boolean | number | object
  // naiveValidator?: (rule: FormItemRule, value: any) => boolean | Error
  antValidator?: () => boolean | Error
  // validator?: (value: FormPlusData, message: MessageApi) => boolean
  validator?: () => boolean
  watchCallBack?: (params: TickFormData[], value: string[], self: TickFormData) => void
}
declare interface TickFormData extends TickFormItem {
  value: any | null
  options: { label: string; value: string }[]
  _watch?: WatchStopHandle
  _loading: boolean
  _isWatchUpdate: boolean
}

declare interface TickFormType {
  antValidator: (callBack: Function) => void
  generatorParams: () => object
  validator: () => boolean
  reset: () => void
  update: (value: object) => void
}
