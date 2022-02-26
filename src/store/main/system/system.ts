import { IRootState } from '@/store/types'
import { Module } from 'vuex'
import { ISystemState } from './types'

import { getPageListData } from '@/service/main/system/system'

const systemModule: Module<ISystemState, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0
    }
  },

  mutations: {
    changeUsersList(state, list: any[]) {
      state.usersList = list
    },

    changeUsersCount(state, count: number) {
      state.usersCount = count
    },

    changeRoleList(state, list: any[]) {
      state.roleList = list
    },

    changeRoleCount(state, count: number) {
      state.roleCount = count
    },

    changeGoodsList(state, list: any[]) {
      state.goodsList = list
    },

    changeGoodsCount(state, count: number) {
      state.goodsCount = count
    }
  },

  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]
      }
    },

    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]
      }
    }
  },

  actions: {
    async getPageListAction({ commit }, payload: any) {
      // 1. 获取 pageUrl
      const pageName = payload.pageName
      const pageUrl = `/${pageName}/list`

      // 2. 对页面发送请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)

      // 3. 将数据存储到 state 中
      const { list, totalCount } = pageResult.data
      const changePageName = pageName.slice(0, 1).toUpperCase() + pageName.slice(1)
      commit(`change${changePageName}List`, list)
      commit(`change${changePageName}Count`, totalCount)
    }
  }
}

export default systemModule
