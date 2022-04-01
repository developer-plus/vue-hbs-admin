<template>
  <div @click="toggleCollapsed">
    <menu-unfold-outlined v-if="getCollapsed" />
    <menu-fold-outlined v-else />
  </div>
</template>

<script setup lang="ts">
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue'

import { useCollapsed } from '~/layouts/default/useCollapsed'

const { getCollapsed, toggleCollapsed } = useCollapsed()
</script>
