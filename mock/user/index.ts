import type { MockMethod } from 'vite-plugin-mock'
import type { requestParams } from '../_util'
import { resultSuccess, resultError, getRequestToken } from '../_util'

export function createFakeUserList() {
  return [
    {
      id: '1',
      username: 'Hongbusi',
      realName: 'Hongbusi',
      avatar: 'https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640',
      desc: 'zhe',
      password: 'admin',
      token: 'fakeToken1',
      homePath: '/dashboard/analysis',
      roles: [
        {
          roleName: 'Super Admin',
          value: 'super'
        }
      ]
    },
    {
      id: '2',
      username: 'test',
      password: 'admin',
      realName: 'test user',
      avatar: 'https://q1.qlogo.cn/g?b=qq&nk=339449197&s=640',
      desc: 'tester',
      token: 'fakeToken2',
      homePath: '/dashboard/workbench',
      roles: [
        {
          roleName: 'Tester',
          value: 'test'
        }
      ]
    }
  ]
}

export default [
  {
    url: '/api/login',
    timeout: 200,
    method: 'post',
    response: ({ body }) => {
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
      const token = getRequestToken(request)
      if (!token) return resultError('Invalid token')
      const checkUser = createFakeUserList().find(item => item.token === token)
      if (!checkUser) {
        return resultError('The corresponding user information was not obtained!')
      }
      return resultSuccess(checkUser)
    }
  },
  {
    url: '/api/menu/list',
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request)
      if (!token) return resultError('Invalid token')
      const checkUser = createFakeUserList().find(item => item.token === token)
      if (!checkUser) {
        return resultError('The corresponding user information was not obtained!')
      }
      return resultSuccess(checkUser)
    }
  }
] as MockMethod[]
