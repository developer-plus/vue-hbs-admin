<template>
  <a-layout>
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible width="240">
      <slot name="sider" />
    </a-layout-sider>

    <a-layout>
      <a-layout-header :style="{ paddingLeft: collapsed ? '80px' : '240px' }">
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
        <div class="h-full">
          <slot name="header-right" />
        </div>
      </a-layout-header>

      <a-layout-content :class="[collapsed ? 'pl-80px' : 'pl-240px', 'pt-56px', 'transition-all']">
        <div class="p-16px">
          <slot name="content" />
        </div>
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
.ant-layout {
  @apply min-h-screen;
}

.ant-layout-sider {
  @apply z-20 fixed top-0 bottom-0 left-0 h-screen;
}

.ant-layout-header {
  @apply z-10 fixed flex justify-between items-center pr-0 w-full h-56px leading-56px transition-all bg-white;
}
</style>
