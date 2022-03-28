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
        {
          id: '1',
          name: '系统总览',
          type: '1',
          url: '/main/analysis',
          icon: 'dashboard',
          children: [
            {
              id: '2',
              name: '核心技术',
              type: '2',
              url: '/main/analysis/overvie',
              children: null
            }
          ]
        }
      ]

      return resultSuccess(menu)
    }
  }
] as MockMethod[]
