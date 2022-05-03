import type { RouteRecordRaw } from 'vue-router'
import { SettingOutlined } from '@ant-design/icons-vue'
import { DefaultLayout } from '~/layouts'

const route: RouteRecordRaw = {
  path: '/about',
  name: 'about',
  component: DefaultLayout,
  redirect: '/about',
  meta: {
    icon: SettingOutlined,
    single: true,
    title: '关于',
    sort: 4,
    hideBreadcrumb: true
  },
  children: [
    {
      path: '',
      name: 'about-page',
      meta: {
        title: '关于'
      },
      component: () => import('~/views/about/index.vue')
    }
  ]
}

export default route
