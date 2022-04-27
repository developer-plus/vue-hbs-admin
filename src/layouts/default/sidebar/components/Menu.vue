<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    mode="inline"
    theme="dark"
    :inline-collapsed="getCollapsed"
  >
    <a-sub-menu key="sub1">
      <template #icon>
        <AppstoreOutlined />
      </template>
      <template #title>
        Demo
      </template>
      <a-menu-item key="3" @click="handleClick('/demo/excel/import')">
        Import Excel
      </a-menu-item>
      <a-menu-item key="4" @click="handleClick('/demo/excel/export')">
        Export Excel
      </a-menu-item>
      <a-menu-item key="5" @click="handleClick('/demo/watermark')">
        水印
      </a-menu-item>
      <a-menu-item key="6" @click="handleClick('/demo/count-to')">
        CountTo
      </a-menu-item>
      <a-menu-item key="7" @click="handleClick('/demo/rich-text')">
        富文本编辑器
      </a-menu-item>
      <a-menu-item key="9" @click="handleClick('/demo/cropper')">
        图片裁剪
      </a-menu-item>
      <a-menu-item key="10" @click="handleClick('/demo/md-editor')">
        Markdown 编辑器
      </a-menu-item>
      <a-menu-item key="11" @click="handleClick('/demo/fullscreen')">
        全屏
      </a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub2">
      <template #icon>
        <ChromeOutlined />
      </template>
      <template #title>
        页面
      </template>
      <a-menu-item key="21" @click="handleClick('/page/404')">
        404页面
      </a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub3">
      <template #icon>
        <CompassOutlined />
      </template>
      <template #title>
        外部页面
      </template>
      <a-menu-item key="22" @click="inlineClick('inline', docSrc.projectDocumentation)">
        项目文档（内嵌）
      </a-menu-item>
      <a-menu-item key="23" @click="inlineClick('inline', docSrc.componentDocumentation)">
        组件库文档（内嵌）
      </a-menu-item>
      <a-menu-item key="24" @click="externalLinkClick(docSrc.projectDocumentation)">
        项目文档（外链）
      </a-menu-item>
    </a-sub-menu>
    <a-menu-item key="sub4" @click="handleClick('/about')">
      <template #icon>
        <SettingOutlined />
      </template>
      关于
    </a-menu-item>
  </a-menu>
</template>
<script setup lang="ts">
import {
  AppstoreOutlined,
  ChromeOutlined,
  SettingOutlined,
  CompassOutlined
} from '@ant-design/icons-vue'

import { useCollapsed } from '~/layouts/default/useCollapsed'

const { getCollapsed } = useCollapsed()

const selectedKeys = ref(['1'])
const openKeys = ref(['sub1'])

const router = useRouter()
const docSrc = {
  projectDocumentation: 'https://vue-hbs-admin-docs.netlify.app/',
  componentDocumentation: 'https://antdv.com/components/overview-cn'
}
const handleClick = (path: string) => {
  router.push(path)
}
const inlineClick = (path: string, data: string) => {
  router.push({ name: path, params: { src: data } })
}
const externalLinkClick = (path: string) => {
  window.open(path)
}
</script>
