<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    mode="inline" theme="dark"
    :inline-collapsed="getCollapsed"
  >
    <template v-for="menu in menus" :key="menu.path">
      <a-sub-menu v-if="!menu.meta?.single" :key="menu.path">
        <template #icon>
          <component :is="menu.meta?.icon" />
        </template>
        <template #title>
          {{ menu.meta?.title }}
        </template>
        <a-menu-item
          v-for="subMenu in menu.children" :key="menu.path + '/' + subMenu.path"
          @click="handleClick(menu.path + '/' + subMenu.path)"
        >
          {{ subMenu.meta?.title }}
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item v-else @click="handleClick(menu.path)">
        <template #icon>
          <component :is="menu.meta?.icon" />
        </template>
        {{ menu.meta.title }}
      </a-menu-item>
    </template>
  </a-menu>
</template>
<script setup lang="ts">
import { useCollapsed } from '~/layouts/default/useCollapsed'
import type { RouteModuleList } from '~/router/routes/typings'
import { useRouteStore } from '~/stores'

const { getCollapsed } = useCollapsed()

const selectedKeys = ref(['1'])
const openKeys = ref(['sub1'])

const router = useRouter()
const routeStore = useRouteStore()
const menus = ref<RouteModuleList>([])

const handleClick = (path: string) => {
  router.push(path)
}

watch(() => routeStore.getRoutes, (routes) => {
  menus.value = routes
}, { immediate: true })

// 当刷新页面时，设置菜单选中状态
function setSelectMenuWhenRefreshPage() {
  const currentRoute = router.currentRoute.value
  selectedKeys.value = getCurrentMenuRecursive(menus.value, currentRoute.path)
  openKeys.value = selectedKeys.value
}

setSelectMenuWhenRefreshPage()

function getCurrentMenuRecursive(menus: RouteModuleList, targetKey: string, parentPath = '', parentMenus: GetArrayItemType<RouteModuleList>[] = []) {
  let keys: GetArrayItemType<RouteModuleList> = []
  for (let i = 0; i < menus.length; i++) {
    const menu = menus[i]
    const path = parentPath ? `${parentPath}/${menu.path}` : menu.path
    if (path === targetKey) {
      keys = [...parentMenus.map(item => item.path), path]
      break
    }
    if (menu.children) {
      keys = getCurrentMenuRecursive(menu.children, targetKey, path, [...parentMenus, menu])
      if (keys && keys.length) return keys
    }
  }
  return keys
}
</script>
