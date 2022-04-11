export function is(val: unknown, type: string) {
  return toString.call(val) === `[object ${type}]`
}

export function isArray(val: any): val is Array<any> {
  return val && Array.isArray(val)
}

export function isFunction(val: unknown): val is Function {
  return typeof val === 'function'
}

export function isString(val: unknown): val is string {
  return is(val, 'String')
}

export function isNumber(val: unknown): val is number {
  return is(val, 'Number')
}
