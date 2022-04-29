import type { RouteRecordRaw } from 'vue-router'
import {
  CompassOutlined
} from '@ant-design/icons-vue'
import { DefaultLayout } from '~/layouts'

const route: RouteRecordRaw = {
  path: '/docs',
  name: 'docs',
  component: DefaultLayout,
  meta: {
    title: '外部页面',
    icon: CompassOutlined,
    sort: 3
  },
  children: [
    {
      path: 'inline/project/:src',
      name: 'InlineProject',
      component: () => import('~/views/docs/hbs-admin/index.vue'),
      props: true,
      meta: {
        title: '项目文档 (内嵌)',
        sort: 1,
        routeParams: {
          src: 'https://vue-hbs-admin-docs.netlify.app/'
        }
      }
    },
    {
      path: 'inline/antdv/:src',
      name: 'InlineAntVue',
      component: () => import('~/views/docs/antdv/index.vue'),
      props: true,
      meta: {
        title: 'antVue文档 (内嵌)',
        sort: 2,
        routeParams: {
          src: 'https://antdv.com/docs/vue/introduce-cn'
        }
      }
    },
    {
      path: 'https://vue-hbs-admin-docs.netlify.app/',
      name: 'projectExternalLink',
      component: () => import('~/views/about/index.vue'),
      meta: {
        title: '项目文档 (外链)',
        sort: 3
      }
    }
  ]
}

export default route
