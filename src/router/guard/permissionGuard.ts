import type { Router } from 'vue-router'
import localCache from '~/utils/cache'
import { EnumCache, EnumPath } from '~/enums'

export function createPermissionGuard(router: Router) {
  router.beforeEach((to) => {
    if (to.path !== EnumPath.LOGIN) {
      const token = localCache.getCache(EnumCache.TOKEN_KEY)
      if (!token) {
        return EnumPath.LOGIN
      }
    }
  })
}
