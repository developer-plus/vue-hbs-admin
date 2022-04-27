<template>
  <a-menu-item
    :key="parentPath ? `${parentPath}/${menu.path}` : menu.path"
    @click="handleClick(menu.path)"
  >
    <template #icon>
      <component :is="menu.meta?.icon" />
    </template>
    {{ menu.meta.title }}
  </a-menu-item>
</template>
<script setup lang="ts">
import type { RouteModuleList } from '~/router/routes/typings'

interface EmitEvents {
  (e: 'handleClick', path: string, currentDepth: number | undefined): void
}
interface Props {
  menu: GetArrayItemType<RouteModuleList>
  parentPath?: string
  currentDepth?: number
}

const props = defineProps<Props>()
const emit = defineEmits<EmitEvents>()

function handleClick(path: string) {
  emit('handleClick', path, props.currentDepth)
}
</script>
