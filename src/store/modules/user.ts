import { defineStore } from 'pinia'
import { store } from '~/store'
import { TOKEN_KEY, USER_INFO_KEY } from '~/enums/cacheEnum'
import localCache from '~/utils/cache'
import type { UserInfo } from '#/store'

interface UserState {
  token?: string
  userInfo: Nullable<UserInfo>
}

export const useUserStore = defineStore({
  id: 'app-user',

  state: (): UserState => ({
    token: '',
    userInfo: null
  }),

  getters: {
    getUserInfo(): UserInfo {
      return this.userInfo || localCache.getCache(USER_INFO_KEY) || {}
    },
    getToken(): string {
      return this.token || localCache.getCache(TOKEN_KEY)
    }
  }
})

export function useUserStoreWithOut() {
  return useUserStore(store)
}
