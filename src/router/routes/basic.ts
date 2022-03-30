
import type { RouteRecordRaw } from 'vue-router'
import { EnumPath } from '~/enums'

export const basicRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    redirect: EnumPath.HOME
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('~/views/login/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('~/views/not-found.vue')
  }
]
