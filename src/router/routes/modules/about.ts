import type { RouteRecordRaw } from 'vue-router'
import {
  SettingOutlined
} from '@ant-design/icons-vue'
import { DefaultLayout } from '~/layouts'

const route: RouteRecordRaw = {
  path: '/about',
  name: 'about',
  component: DefaultLayout,
  redirect: '/about',
  meta: {
    title: '关于',
    isMenu: true,
    icon: SettingOutlined,
    single: true,
    sort: 3
  },
  children: [
    {
      path: '',
      name: 'about-page',
      component: () => import('~/views/about/index.vue')
    }
  ]
}

export default route
