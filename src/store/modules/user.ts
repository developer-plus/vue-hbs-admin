import { defineStore } from 'pinia'
import { store } from '~/store'

interface UserState {
  token?: string
  userInfo: any
}

export const useUserStore = defineStore({
  id: 'app-user',
  state: (): UserState => ({
    token: '',
    userInfo: {}
  })
})

export function useUserStoreWithOut() {
  return useUserStore(store)
}
