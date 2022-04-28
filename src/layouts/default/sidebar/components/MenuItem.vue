<template>
  <a-menu-item
    :key="parentPath ? `${parentPath}/${menu.path}` : menu.path"
    @click="handleClick(menu.path, menu.name, menu.meta.frameSrc, menu.meta.external)"
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
  (e: 'handleClick', path: string, currentDepth: number | undefined, src?: string, name?: string): void
}
interface Props {
  menu: GetArrayItemType<RouteModuleList>
  parentPath?: string
  currentDepth?: number
  src?: string
  // 是否外链
  external?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<EmitEvents>()

function handleClick(path: string, name: string, src: string, external: boolean) {
  // src 为内链 地址
  // 需要判断path是否为外链
  if (external) {
    // 打开外链
    window.open(path)
  }
  else {
    emit('handleClick', path, props.currentDepth, src, name)
  }
}
</script>
