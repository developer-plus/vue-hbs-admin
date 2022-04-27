import type { RouteRecordRaw } from 'vue-router'
import { DefaultLayout } from '~/layouts'

const route: RouteRecordRaw = {
  path: '/docs',
  name: 'docs',
  component: DefaultLayout,
  redirect: '/docs/inline',
  children: [
    {
      path: 'inline',
      name: 'inline',
      component: () => import('~/views/docs/inline/index.vue'),
      props: true
    }
  ]
}

export default route
