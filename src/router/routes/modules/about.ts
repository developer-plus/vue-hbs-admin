import type { RouteRecordRaw } from 'vue-router'

export const AboutRoute: RouteRecordRaw = {
  path: '/about',
  name: 'About',
  component: () => import('~/views/about/index.vue')
}
