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
      <a-menu-item key="5" @click="handleClick('/demo/count-to')">
        CountTo
      </a-menu-item>
    </a-sub-menu>
    <a-menu-item key="7" @click="handleClick('/about')">
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
  SettingOutlined
} from '@ant-design/icons-vue'

import { useCollapsed } from '~/layouts/default/useCollapsed'

const { getCollapsed } = useCollapsed()

const selectedKeys = ref(['1'])
const openKeys = ref(['sub1'])

const router = useRouter()

const handleClick = (path: string) => {
  router.push(path)
}
</script>
