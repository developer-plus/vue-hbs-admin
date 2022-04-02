import type { RouteRecordRaw } from 'vue-router'
import { DefaultLayout } from '~/layouts'

const route: RouteRecordRaw = {
  path: '/demo',
  name: 'demo',
  component: DefaultLayout,
  redirect: '/demo/excel',
  children: [
    {
      path: 'excel',
      name: 'excel-page',
      component: () => import('~/views/demo/excel/index.vue')
    }
  ]
}

export default route
