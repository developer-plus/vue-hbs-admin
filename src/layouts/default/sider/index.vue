<template>
  <a-layout-sider
    v-model:collapsed="getCollapsed"
    :class="getSiderClass"
    :trigger="null"
    collapsible
  >
    <span bg-white>sidebar</span>
  </a-layout-sider>
</template>

<script setup lang="ts">
import { useCollapsed } from '../useCollapsed'

const { getCollapsed } = useCollapsed()

const getSiderClass = computed(() => {
  return ['layout-sider', 'layout-sider--fixed']
})
</script>

<style scoped lang="less">
.layout-sider {
  &--fixed {
    @apply z-20 fixed top-0 bottom-0 left-0;
  }
}
</style>
