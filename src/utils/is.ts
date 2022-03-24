export function isArray(val: any): val is Array<any> {
  return val && Array.isArray(val)
}
