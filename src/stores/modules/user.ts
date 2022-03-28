import { defineStore } from 'pinia'
import { router } from '~/router'
import { TOKEN_KEY, USER_INFO_KEY, ROLES_KEY } from '~/enums/cacheEnum'
import localCache from '~/utils/cache'
import { loginRequest, getUserInfo, getMenuList } from '~/api/user'
import { isArray } from '~/utils/is'
import { mapMenuToRoutes } from '~/utils/map-menu'

import type { RoleEnum } from '~/enums/roleEnum'
import type { UserInfo } from '#/store'

interface UserState {
  token?: string
  userInfo: Nullable<UserInfo>
  roleList: RoleEnum[]
  menuList: any[]
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    token: '',
    userInfo: null,
    roleList: [],
    menuList: []
  }),

  getters: {
    getToken(): string {
      return this.token || localCache.getCache(TOKEN_KEY)
    },

    getUserInfo(): UserInfo {
      return this.userInfo || localCache.getCache(USER_INFO_KEY) || {}
    },

    getRoleList(): RoleEnum[] {
      return this.roleList.length > 0 ? this.roleList : localCache.getCache(ROLES_KEY)
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
    },

    setRoleList(roleList: RoleEnum[]) {
      this.roleList = roleList
      localCache.setCache(ROLES_KEY, roleList)
    },

    setMenuList(menuList: any[]) {
      this.menuList = menuList

      // map menu to routes
      const routes = mapMenuToRoutes(menuList)
      routes.forEach((route) => {
        router.addRoute(route)
      })
    },

    async loginAction(account: { username: string; password: string }) {
      try {
        const result = await loginRequest(account)
        const { token } = result

        // save token
        this.setToken(token)
        this.afterLoginAction()
      }
      catch (error) {
        return Promise.reject(error)
      }
    },

    async afterLoginAction() {
      if (!this.getToken) return null

      // get user info
      await this.getUserInfoAction()

      // get menu list
      await this.getMenuListAction()

      router.push('/main')
    },

    async getUserInfoAction(): Promise<UserInfo | null> {
      if (!this.getToken) return null

      const userInfo = await getUserInfo()
      const { roles = [] } = userInfo
      if (isArray(roles)) {
        const roleList = roles.map(item => item.value) as RoleEnum[]
        this.setRoleList(roleList)
      }
      else {
        userInfo.roles = []
        this.setRoleList([])
      }
      this.setUserInfo(userInfo)
      return userInfo
    },

    async getMenuListAction(): Promise<any> {
      if (!this.getToken) return null

      const menuList = await getMenuList()

      this.setMenuList(menuList)
    }
  }
})
