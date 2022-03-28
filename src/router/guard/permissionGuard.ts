import type { Router } from 'vue-router'
import localCache from '~/utils/cache'
import { TOKEN_KEY } from '~/enums/cacheEnum'
import { PageEnum } from '~/enums/pageEnum'

export function createPermissionGuard(router: Router) {
  router.beforeEach((to) => {
    if (to.path !== PageEnum.BASE_LOGIN) {
      const token = localCache.getCache(TOKEN_KEY)
      if (!token) {
        return PageEnum.BASE_LOGIN
      }
    }
  })
}
