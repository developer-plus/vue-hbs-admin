import type { RouteRecordRaw } from 'vue-router'
import { DefaultLayout } from '~/layouts'

const route: RouteRecordRaw = {
  path: '/about',
  name: 'about',
  component: DefaultLayout,
  redirect: '/about',
  children: [
    {
      path: '',
      name: 'about-page',
      component: () => import('~/views/about/index.vue')
    }
  ]
}

export default route
