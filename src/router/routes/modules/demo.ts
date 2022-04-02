import type { RouteRecordRaw } from 'vue-router'
import { DefaultLayout } from '~/layouts'

const route: RouteRecordRaw = {
  path: '/demo',
  name: 'demo',
  component: DefaultLayout,
  redirect: '/demo/excel/import',
  children: [
    {
      path: 'excel/import',
      name: 'excel-import',
      component: () => import('~/views/demo/excel/import-excel.vue')
    }
  ]
}

export default route
