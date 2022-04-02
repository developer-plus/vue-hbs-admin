<template>
  <a-layout-sider
    v-model:collapsed="getCollapsed"
    :class="getSidebarClass"
    :trigger="null"
    collapsible
    collapsed-width="56"
  >
    <logo :show-title="!getCollapsed" />
    <span bg-white>sidebar</span>
  </a-layout-sider>
</template>

<script setup lang="ts">
import { useCollapsed } from '../useCollapsed'

import Logo from './components/Logo.vue'

const { getCollapsed } = useCollapsed()

const getSidebarClass = computed(() => {
  return ['layout-sidebar', 'layout-sidebar--fixed']
})
</script>

<style scoped lang="less">
.layout-sidebar {
  &--fixed {
    @apply z-20 fixed top-0 bottom-0 left-0;
  }
}
</style>
