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

interface Props {
  menu: GetArrayItemType<RouteModuleList>
  parentPath?: string
  currentDepth?: number
}

const props = defineProps<Props>()
const router = useRouter()


function handleClick(path: string) {
  if (path.startsWith('http://') || path.startsWith('https://')) return window.open(path)
  const routeMeta = props.menu.meta
  const params = routeMeta?.routeParams || {}
  const query = routeMeta?.routeQuery || {}
  props.currentDepth && (path = `${props.parentPath}/${path}`)
  router.push({
    path,
    params,
    query
  })
}
</script>
