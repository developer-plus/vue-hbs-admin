export interface requestParams {
  method: string
  body: any
  headers?: { authorization?: string }
  query: any
}

export function resultSuccess<T = Recordable>(data: T, { message = 'ok' } = {}) {
  return {
    code: 0,
    data,
    message,
    type: 'success'
  }
}

export function resultError(message = 'Request failed', { code = -1, result = null } = {}) {
  return {
    code,
    result,
    message,
    type: 'error'
  }
}

export function getRequestToken({ headers }: requestParams): string | undefined {
  return headers?.authorization
}
