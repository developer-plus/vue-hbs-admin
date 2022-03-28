import type { Router } from 'vue-router'
import nProgress from 'nprogress'
import { createPermissionGuard } from './permissionGuard'

export function setupRouterGuard(router: Router) {
  createProgressGuard(router)
  createPermissionGuard(router)
}

function createProgressGuard(router: Router) {
  router.beforeEach(() => {
    nProgress.start()
  })

  router.afterEach(() => {
    nProgress.done()
  })
}
