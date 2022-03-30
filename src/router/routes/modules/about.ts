import type { RouteRecordRaw } from 'vue-router'
import { DefaultLayout } from '~/layouts'

const route: RouteRecordRaw = {
  path: '/about',
  name: 'About',
  component: DefaultLayout,
  redirect: '/about',
  children: [
    {
      path: '',
      name: 'AboutPage',
      component: () => import('~/views/about/index.vue')
    }
  ]
}

export default route
