import { defineStore } from 'pinia'
import { TOKEN_KEY, USER_INFO_KEY } from '~/enums/cacheEnum'
import localCache from '~/utils/cache'
import type { UserInfo } from '#/store'

interface UserState {
  token?: string
  userInfo: Nullable<UserInfo>
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    token: '',
    userInfo: null
  }),

  getters: {
    getToken(): string {
      return this.token || localCache.getCache(TOKEN_KEY)
    },

    getUserInfo(): UserInfo {
      return this.userInfo || localCache.getCache(USER_INFO_KEY) || {}
    }
  },

  actions: {
    setToken(token: string | undefined): void {
      this.token = token || ''
      localCache.setCache(TOKEN_KEY, token)
    },

    setUserInfo(userInfo: UserInfo | null) {
      this.userInfo = userInfo
      localCache.setCache(USER_INFO_KEY, userInfo)
    }
  }
})
