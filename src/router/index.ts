import type { App } from 'vue'

import { createRouter, createWebHashHistory } from 'vue-router'
import { basicRoutes } from './routes'

const router = createRouter({
  routes: basicRoutes,
  history: createWebHashHistory(),
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export function setupRouter(app: App) {
  app.use(router)
}
