export function IsIE(): string | boolean {
  const UA = navigator.userAgent
  if (/msie/i.test(UA)) {
    return UA.match(/msie (\d+\.\d+)/i)![1]
  }
  else if (~UA.toLowerCase().indexOf('trident') && ~UA.indexOf('rv')) {
    return UA.match(/rv:(\d+\.\d+)/)![1]
  }
  return false
}
