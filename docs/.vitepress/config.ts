import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'vue-hbs-admin',
  description: '一个基于 Vue3.0、Vite、TypeScript、Ant-Design-Vue 的后台解决方案，目标是为中小型项目开发，提供现成的开箱解决方案及丰富的示例。',
  base: '/vue-hbs-admin/',
  srcDir: 'src',

  head: [],

  themeConfig: {
    repo: 'Hongbusi/vue-hbs-admin',
    docsDir: 'docs/src',
    docsBranch: 'master',

    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    nav: [
      { text: '教程', link: '/', activeMatch: '^/$|^/guide/' },
      { text: '贡献指南', link: '/contribution-guide' }
    ],

    sidebar: {
      '/': getGuideSidebar(),
      '/guide/': getGuideSidebar()
    }
  }
})

function getGuideSidebar() {
  return [
    {
      text: '介绍',
      children: [
        { text: 'vue-hbs-admin', link: '/' }
      ]
    }
  ]
}
