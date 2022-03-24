import type { Router } from 'vue-router'
import nProgress from 'nprogress'

export function setupRouterGuard(router: Router) {
  createProgressGuard(router)
}

function createProgressGuard(router: Router) {
  router.beforeEach(() => {
    nProgress.start()
  })

  router.afterEach(() => {
    nProgress.done()
  })
}
