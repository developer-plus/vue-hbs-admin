<template>
  <a-layout class="h-full">
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible width="240">
      <slot name="sider" />
    </a-layout-sider>

    <a-layout>
      <a-layout-header class="border-b border-gray-100">
        <div class="flex items-center h-full">
          <div
            class="flex justify-center items-center w-40px h-full text-base cursor-pointer transition-color hover:bg-gray-100"
            @click="toggleCollapsed"
          >
            <menu-unfold-outlined v-if="collapsed" />
            <menu-fold-outlined v-else />
          </div>
          <slot name="header-left" />
        </div>
        <div><slot name="header-right" /></div>
      </a-layout-header>

      <a-layout-content class="p-16px">
        <slot name="content" />
      </a-layout-content>

      <footer class="flex justify-center items-center h-48px text-gray-600">
        <slot name="footer">
          Copyright (c) 2022 Hongbusi
        </slot>
      </footer>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'

const collapsed = ref<boolean>(false)

const toggleCollapsed = () => {
  collapsed.value = !collapsed.value
}
</script>

<style scoped lang="less">
.ant-layout-header {
  @apply flex justify-between items-center px-0 h-56px bg-white;
}
</style>
