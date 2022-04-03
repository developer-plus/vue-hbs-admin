<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    mode="inline"
    theme="dark"
    :inline-collapsed="getCollapsed"
  >
    <a-menu-item key="1">
      <template #icon>
        <MailOutlined />
      </template>
      Navigation One
    </a-menu-item>
    <a-menu-item key="2">
      <template #icon>
        <CalendarOutlined />
      </template>
      Navigation Two
    </a-menu-item>
    <a-sub-menu key="sub1">
      <template #icon>
        <AppstoreOutlined />
      </template>
      <template #title>
        Navigation Three
      </template>
      <a-menu-item key="3">
        Option 3
      </a-menu-item>
      <a-menu-item key="4">
        Option 4
      </a-menu-item>
      <a-sub-menu key="sub1-2" title="Submenu">
        <a-menu-item key="5">
          Option 5
        </a-menu-item>
        <a-menu-item key="6">
          Option 6
        </a-menu-item>
      </a-sub-menu>
    </a-sub-menu>
    <a-sub-menu key="sub2">
      <template #icon>
        <SettingOutlined />
      </template>
      <template #title>
        Navigation Four
      </template>
      <a-menu-item key="7">
        Option 7
      </a-menu-item>
      <a-menu-item key="8">
        Option 8
      </a-menu-item>
      <a-menu-item key="9">
        Option 9
      </a-menu-item>
      <a-menu-item key="10">
        Option 10
      </a-menu-item>
    </a-sub-menu>
  </a-menu>
</template>
<script setup lang="ts">
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined
} from '@ant-design/icons-vue'

import { useCollapsed } from '~/layouts/default/useCollapsed'

const { getCollapsed } = useCollapsed()

const selectedKeys = ref(['1'])
const openKeys = ref(['sub1'])
</script>
