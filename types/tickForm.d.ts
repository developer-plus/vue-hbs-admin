
declare interface TickFormItem {
  label: string
  key: string
  type: string
  cops?: object
  path?: string
  message?: string
  trigger?: string
  required?: boolean
  rules?: object[]
  naive?: boolean
  proxyKey?: string | string[]
  watchKey?: string[] | string
  defaultValue?: any
  axiosOptions?: () => Promise<any[]>
  reconfiguration?: (value: any) => { key: string; value: any }[]
  update?: (row: any) => any
  reset?: (formItem: TickFormData) => any
  // naiveValidator?: (rule: FormItemRule, value: any) => boolean | Error
  naiveValidator?: () => boolean | Error
  // validator?: (value: FormPlusData, message: MessageApi) => boolean
  validator?: () => boolean
  watchCallBack?: (params: TickFormData[], value: string[], self: TickFormData) => Promise<any[]>
}
declare interface TickFormData extends TickFormItem {
  value: any | null
  options: { label: string; value: string }[]
  _watch?: WatchStopHandle
  _loading: boolean
  _isWatchUpdate: boolean
}

declare type TickFormType = InstanceType<typeof TickFrom>
