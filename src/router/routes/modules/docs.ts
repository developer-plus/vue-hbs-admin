import type { RouteRecordRaw } from 'vue-router'
import {
  CompassOutlined
} from '@ant-design/icons-vue'
import { DefaultLayout } from '~/layouts'

const route: RouteRecordRaw = {
  path: '/docs',
  name: 'docs',
  component: DefaultLayout,
  redirect: '/docs/project/inline',
  meta: {
    title: '外部页面',
    icon: CompassOutlined,
    sort: 3
  },
  children: [
    {
      path: 'inline/project',
      name: 'projectInline',
      component: () => import('~/views/docs/inline/index.vue'),
      props: true,
      meta: {
        title: '项目文档 (内嵌)',
        frameSrc: 'https://vue-hbs-admin-docs.netlify.app/',
        sort: 1
      }
    },
    {
      path: 'inline/ant',
      name: 'antInline',
      component: () => import('~/views/docs/inline/index.vue'),
      props: true,
      meta: {
        title: 'antVue文档 (内嵌)',
        frameSrc: 'https://antdv.com/components/overview-cn',
        sort: 2
      }
    },
    {
      path: 'https://vue-hbs-admin-docs.netlify.app/',
      name: 'projectInline',
      component: () => import('~/views/demo/excel/import.vue'),
      meta: {
        title: '项目文档 (外链)',
        external: true,
        sort: 3
      }
    }
  ]
}

export default route
