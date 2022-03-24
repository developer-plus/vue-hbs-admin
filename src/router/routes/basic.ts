
import type { RouteRecordRaw } from 'vue-router'

export const RootRoute: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: '/main'
}

export const MainRoute: RouteRecordRaw = {
  path: '/main',
  name: 'Main',
  component: () => import('~/views/main/index.vue')
}

export const LoginRoute: RouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('~/views/login/index.vue')
}

export const NotFoundRoute: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: () => import('~/views/not-found.vue')
}
