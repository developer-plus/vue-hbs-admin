import type { App } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

import { createRouter, createWebHashHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('~/views/login/index.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('~/views/main/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('~/views/about/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('~/views/not-found.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export function setupRouter(app: App) {
  app.use(router)
}
