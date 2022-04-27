import type { RouteRecordRaw } from 'vue-router'
import {
  AppstoreOutlined
} from '@ant-design/icons-vue'
import { DefaultLayout } from '~/layouts'

const route: RouteRecordRaw = {
  path: '/demo',
  name: 'demo',
  component: DefaultLayout,
  redirect: '/demo/excel/import',
  meta: {
    title: 'Demo',
    isMenu: true,
    icon: AppstoreOutlined,
    sort: 1
  },
  children: [
    {
      path: 'excel/import',
      name: 'import-excel',
      component: () => import('~/views/demo/excel/import.vue'),
      meta: {
        title: 'Import Excel',
        isMenu: true,
        sort: 1
      }
    },
    {
      path: 'excel/export',
      name: 'export-excel',
      component: () => import('~/views/demo/excel/export.vue'),
      meta: {
        title: 'Export Excel',
        isMenu: true,
        sort: 2
      }
    },
    {
      path: 'watermark',
      name: 'watermark',
      component: () => import('~/views/demo/watermark/index.vue'),
      meta: {
        title: '水印',
        isMenu: true,
        sort: 3
      }
    },
    {
      path: 'count-to',
      name: 'count-to',
      component: () => import('~/views/demo/count-to/index.vue'),
      meta: {
        title: 'CountTo',
        isMenu: true,
        sort: 4
      }
    },
    {
      path: 'rich-text',
      name: 'rich-text',
      component: () => import('~/views/demo/rich-text/index.vue'),
      meta: {
        title: '富文本编辑器',
        isMenu: true,
        sort: 5
      }
    },
    {
      path: 'cropper',
      name: 'cropper',
      component: () => import('~/views/demo/cropper/index.vue'),
      meta: {
        title: '图片裁剪',
        isMenu: true,
        sort: 6
      }
    },
    {
      path: 'md-editor',
      name: 'md-editor',
      component: () => import('~/views/demo/md-editor/index.vue'),
      meta: {
        title: 'Markdown 编辑器',
        isMenu: true,
        sort: 7
      }
    },
    {
      path: 'fullscreen',
      name: 'fullscreen',
      component: () => import('~/views/demo/fullscreen/index.vue'),
      meta: {
        title: '全屏',
        isMenu: true,
        sort: 8
      }
    }
  ]
}

export default route
