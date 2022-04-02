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
      name: 'import-excel',
      component: () => import('~/views/demo/excel/import.vue')
    },
    {
      path: 'excel/export',
      name: 'export-excel',
      component: () => import('~/views/demo/excel/export.vue')
    }
  ]
}

export default route
