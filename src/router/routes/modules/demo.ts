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
    },
    {
      path: 'watermark',
      name: 'watermark',
      component: () => import('~/views/demo/watermark/index.vue')
    },
    {
      path: 'count-to',
      name: 'count-to',
      component: () => import('~/views/demo/count-to/index.vue')
    },
    {
      path: 'rich-text',
      name: 'rich-text',
      component: () => import('~/views/demo/rich-text/index.vue')
    },
    {
      path: 'cropper',
      name: 'cropper',
      component: () => import('~/views/demo/cropper/index.vue')
    },
    {
      path: 'md-editor',
      name: 'md-editor',
      component: () => import('~/views/demo/md-editor/index.vue')
    }
  ]
}

export default route
