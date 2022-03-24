import request from '../index'

import type { Account, LoginInfo } from './types'

enum API {
  Login = '/login',
  UserInfo = '/user/info'
}

export function loginRequest(account: Account) {
  return request.post<LoginInfo>({
    url: API.Login,
    data: account
  })
}

export function getUserInfo() {
  return request.get({
    url: API.UserInfo
  })
}
