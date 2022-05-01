import type { App } from 'vue'

import { createRouter, createWebHashHistory } from 'vue-router'
import { basicRoutes, asyncRoutes } from './routes'
import { setupRouterGuard } from './guard'
import { setupDynamicRoutes } from './routes/plugins/dynamicRoutes'

export const router = createRouter({
  routes: [...basicRoutes, ...asyncRoutes],
  history: createWebHashHistory(),
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export function setupRouter(app: App) {
  app.use(router)

  // Router guard
  setupRouterGuard(router)

  setupDynamicRoutes(asyncRoutes)
}
