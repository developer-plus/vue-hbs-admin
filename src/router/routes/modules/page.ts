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
        sort: 1
      }
    },
    {
      path: 'testHide',
      name: 'testHide',
      component: () => import('~/views/about/index.vue'),
      meta: {
        title: '测试隐藏菜单',
        sort: 2,
        isHide: true
      }
    }
  ]
}

export default route
