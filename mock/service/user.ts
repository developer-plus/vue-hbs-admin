import type { MockMethod } from 'vite-plugin-mock'
import type { requestParams } from '../_util'
import { resultSuccess, resultError, checkRequestToken } from '../_util'
import { createFakeUserList } from '../_fake-data'

export default [
  {
    url: '/api/login',
    timeout: 200,
    method: 'post',
    response: ({ body }: requestParams) => {
      const { username, password } = body
      const checkUser = createFakeUserList().find(
        item => item.username === username && password === item.password
      )

      if (!checkUser) {
        return resultError('Incorrect account or password！')
      }

      const { id, username: _username, token, realName, desc, roles } = checkUser

      return resultSuccess({
        roles,
        id,
        username: _username,
        token,
        realName,
        desc
      })
    }
  },
  {
    url: '/api/user/info',
    method: 'get',
    response: (request: requestParams) => {
      const { state, error, user } = checkRequestToken(request)
      return state ? resultSuccess(user) : error
    }
  }
] as MockMethod[]
