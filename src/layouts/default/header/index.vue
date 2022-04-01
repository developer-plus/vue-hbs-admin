<template>
  <a-layout-header :class="getHeaderClass">
    header
  </a-layout-header>
</template>

<script setup lang="ts">
import { useCollapsed } from '../useCollapsed'

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

<style scoped lang="less">
.layout-header {
  padding-right: 0;
  padding-left: var(--sidebar-width);
  height: var(--header-height);
  line-height: var(--header-height);

  &--light {
    background-color: #fff;
  }

  &--fixed {
    @apply z-10 fixed top-0 right-0 left-0;
  }

  &--collapsed {
    padding-left: var(--sidebar-collapsed-width);
  }
}
</style>
