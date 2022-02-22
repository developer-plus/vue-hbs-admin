import hRequest from '../index'

import { IAccount, ILoginResult } from './types'
import { IDataType } from '../types'

enum LoginApi {
  AccountLogin = '/login', // login
  LoginUserInfo = '/users/', // users/1
  UserMenus = '/role/' // role/1/menu
}

export function accountLoginRequest(account: IAccount) {
  return hRequest.post<IDataType<ILoginResult>>({
    url: LoginApi.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return hRequest.get<IDataType>({
    url: LoginApi.LoginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenusByRoleId(id: number) {
  return hRequest.get<IDataType>({
    url: LoginApi.UserMenus + id + '/menu',
    showLoading: false
  })
}
