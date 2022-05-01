<template>
  <a-menu-item
    :key="parentPath ? `${parentPath}/${menu.path}` : menu.path"
    @click="handleClick(menu.path, menu.name)"
  >
    <template #icon>
      <component :is="menu.meta?.icon" />
    </template>
    {{ menu.meta.title }}
  </a-menu-item>
</template>
<script setup lang="ts">
import type { RouteModuleList } from '~/router/routes/typings'
import { isUrl } from '~/utils/is'

interface Props {
  menu: GetArrayItemType<RouteModuleList>
  parentPath?: string
  currentDepth?: number
}

const props = defineProps<Props>()
const router = useRouter()

function handleClick(path: string, name: string) {
  if (isUrl(path)) return window.open(path)
  const routeMeta = props.menu.meta
  const params = routeMeta?.routeParams ?? {}
  const query = routeMeta?.routeQuery ?? {}
  props.currentDepth && (path = `${props.parentPath}/${path}`)
  // 如果带有params，使用name
  if (params) {
    router.push({
      name,
      params,
      query
    })
  }
  else {
    router.push({
      path,
      params,
      query
    })
  }
}
</script>
