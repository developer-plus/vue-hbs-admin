import type { Module } from 'vuex'

import { ILoginState } from './types'
import { IRootState } from '../types'

const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  mutations: {},
  getters: {},
  actions: {
    accountLoginAction({ commit }, payload: any) {
      console.log('accountLoginAction')
      console.log(payload)
    }
  }
}

export default loginModule
