import type { RouteRecordRaw } from 'vue-router'
import {
  ChromeOutlined
} from '@ant-design/icons-vue'
import { DefaultLayout } from '~/layouts'

const route: RouteRecordRaw = {
  path: '/page',
  name: 'page',
  component: DefaultLayout,
  redirect: '/page/404',
  meta: {
    title: '页面',
    isMenu: true,
    icon: ChromeOutlined,
    sort: 2
  },
  children: [
    {
      path: '404',
      name: '404',
      component: () => import('~/views/page/not-found/index.vue'),
      meta: {
        title: '404 页面',
        isMenu: true,
        sort: 1
      }
    }
  ]
}

export default route
