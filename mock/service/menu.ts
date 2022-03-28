import type { MockMethod } from 'vite-plugin-mock'
import type { requestParams } from '../_util'
import { resultSuccess, checkRequestToken } from '../_util'

export default [
  {
    url: '/api/menu/list',
    method: 'get',
    response: (request: requestParams) => {
      const { state, error, user } = checkRequestToken(request)

      return state ? resultSuccess(user) : error
    }
  }
] as MockMethod[]
