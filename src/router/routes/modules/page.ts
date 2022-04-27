import type { RouteRecordRaw } from 'vue-router'
import { DefaultLayout } from '~/layouts'

const route: RouteRecordRaw = {
  path: '/page',
  name: 'page',
  component: DefaultLayout,
  redirect: '/page/404',
  children: [
    {
      path: '404',
      name: '404',
      component: () => import('~/views/page/not-found/index.vue')
    },
    {
      path: 'inline',
      name: 'inline',
      component: () => import('~/views/page/inline/index.vue'),
      props: true
    }
  ]
}

export default route
