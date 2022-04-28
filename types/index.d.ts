declare interface Fn<T = any, R = T> {
  (...arg: T[]): R
}

declare type GetArrayItemType<T extends unknown[]> = T extends S[] ? S : never

declare type TargetContext = '_self' | '_blank'
