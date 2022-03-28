import type { MockMethod } from 'vite-plugin-mock'
import type { requestParams } from '../_util'
import { resultSuccess, resultError, getRequestToken } from '../_util'
import { createFakeUserList } from './user'

export default [
  {
    url: '/api/menu/list',
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request)
      if (!token) {
        return resultError('Invalid token!')
      }
      const checkUser = createFakeUserList().find(item => item.token === token)
      if (!checkUser) {
        return resultError('Invalid user token!')
      }

      const menu: Object[] = [

      ]

      return resultSuccess(menu)
    }
  }
] as MockMethod[]
