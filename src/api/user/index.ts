import request from '../index'

import type { Account, LoginInfo } from './types'

enum API {
  Login = '/login'
}

export function loginRequest(account: Account) {
  return request.post<LoginInfo>({
    url: API.Login,
    data: account
  })
}
