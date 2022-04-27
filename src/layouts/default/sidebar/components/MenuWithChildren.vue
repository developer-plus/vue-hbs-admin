<template>
  <a-sub-menu :key="menu.path">
    <template #icon>
      <component :is="menu.meta?.icon" />
    </template>
    <template #title>
      {{ menu.meta?.title }}
    </template>
    <template
      v-for="subMenu in menu.children"
      :key="menu.path + '/' + subMenu.path"
    >
      <menu-with-children
        v-if="subMenu.children"
        :parent-path="parentPath + '/' + subMenu.path"
        :menu="subMenu"
        :current-depth="currentDepth + 1"
        @handle-click="handleClick"
      />
      <menu-item
        v-else :menu="subMenu"
        :parent-path="currentDepth > 1 ? parentPath : menu.path"
        :current-depth="currentDepth + 1"
        @handle-click="handleClick"
      />
    </template>
  </a-sub-menu>
</template>
<script setup lang="ts">
import MenuItem from './MenuItem.vue'
import type { RouteModuleList } from '~/router/routes/typings'

interface EmitEvents {
  (e: 'handleClick', path: string): void
}
interface Props {
  menu: GetArrayItemType<RouteModuleList>
  parentPath: string
  // 当前的深度，用于计算 key
  currentDepth: number
}

const props = defineProps<Props>()
const emit = defineEmits<EmitEvents>()

function handleClick(path: string, depth = 1) {
  emit('handleClick', depth > 1 ? `${props.parentPath}/${path}` : path)
}
</script>
