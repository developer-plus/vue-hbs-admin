import request from '../index'

import type { Account, LoginInfo } from './types'

enum LoginAPI {
  AccountLogin = '/login',
  UserInfo = '/users/',
  UserMenus = '/role/'
}

export function accountLoginRequest(account: Account) {
  return request.post<LoginInfo>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function getUserById(id: number) {
  return request.get({
    url: LoginAPI.UserInfo + id
  })
}

export function getUserMenus(id: number) {
  return request.get({
    url: `${LoginAPI.UserMenus + id}/menu`
  })
}
