<template>
  <a-layout-header :class="getHeaderClass">
    <div class="h-full">
      <sider-trigger class="layout-header-action" />
    </div>
    <div class="flex h-full">
      <full-screen class="layout-header-action" />
      <user-dropdown class="layout-header-action" />
      <setting-drawer class="layout-header-action" />
    </div>
  </a-layout-header>
</template>

<script setup lang="ts">
import { useCollapsed } from '../useCollapsed'

import SiderTrigger from './components/SiderTrigger.vue'
import FullScreen from './components/FullScreen.vue'
import UserDropdown from './components/UserDropdown.vue'
import SettingDrawer from './components/SettingDrawer.vue'

const { getCollapsed } = useCollapsed()

const getHeaderClass = computed(() => {
  return {
    'layout-header': true,
    'layout-header--fixed': true,
    'layout-header--light': true,
    'layout-header--collapsed': getCollapsed.value
  }
})
</script>

<style lang="less">
.layout-header {
  @apply flex justify-between items-center pr-0 transition-all duration-200;

  padding-left: var(--sidebar-width);
  height: var(--header-height);
  line-height: var(--header-height);

  &--light {
    @apply bg-white;
  }

  &--fixed {
    @apply z-10 fixed top-0 right-0 left-0;
  }

  &--collapsed {
    padding-left: var(--sidebar-collapsed-width);
  }

  &-action {
    @apply flex justify-center items-center px-10px h-full text-base cursor-pointer transition-color hover:bg-gray-100;
  }
}
</style>
