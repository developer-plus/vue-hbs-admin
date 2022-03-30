import type { RouteRecordRaw } from 'vue-router'

const route: RouteRecordRaw = {
  path: '/about',
  name: 'About',
  component: () => import('~/views/about/index.vue')
}

export default route
