
import type { RouteRecordRaw } from 'vue-router'
import { EnumPath } from '~/enums'
import { BlankLayout } from '~/layouts'

export const basicRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    redirect: EnumPath.HOME
  },
  {
    path: '/login',
    name: 'login',
    component: BlankLayout,
    redirect: '/login',
    children: [
      {
        path: '',
        name: 'login-page',
        component: () => import('~/views/login/index.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: BlankLayout,
    children: [
      {
        path: '/:pathMatch(.*)*',
        name: 'not-found-page',
        component: () => import('~/views/not-found/index.vue')
      }
    ]
  }
]
