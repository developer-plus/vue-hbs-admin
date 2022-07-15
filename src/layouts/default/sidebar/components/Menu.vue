<template>
  <div>
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      :class="getMenuClass"
      mode="inline" theme="dark"
      :inline-collapsed="getCollapsed"
    >
      <template v-for="menu in menus" :key="menu.path">
        <menu-item
          v-if="menu.meta?.single"
          :menu="menu"
        />
        <menu-with-children
          v-else
          :current-depth="1"
          :parent-path="menu.path"
          :menu="menu"
        />
      </template>
    </a-menu>
  </div>
</template>
<script setup lang="ts">
import MenuWithChildren from './MenuWithChildren.vue'
import MenuItem from './MenuItem.vue'
import { useCollapsed } from '~/layouts/default/useCollapsed'
import type { RouteModuleList } from '~/router/routes/typings'
import { useRouteStore } from '~/stores'

const { getCollapsed } = useCollapsed()

const selectedKeys = ref<string[]>([])
const openKeys = ref<string[]>([])

const router = useRouter()
const routeStore = useRouteStore()
const menus = ref<RouteModuleList>([])

watch(() => routeStore.getRoutes, (routes) => {
  menus.value = routes
}, { immediate: true })

// 当路由发生改变时，这里的 selectedKeys 也要发生改变
// 用于修复进入到不是菜单的路由时，这里的 selectedKeys 仍然是旧的问题
watch(() => router.currentRoute.value, (currentRoute) => {
  selectedKeys.value = [currentRoute.path]
})

// 当刷新页面时，设置菜单选中状态
function setupCurrentMenu() {
  const currentRoute = router.currentRoute.value
  selectedKeys.value = getCurrentMenuRecursive(menus.value, currentRoute.path)
  openKeys.value = selectedKeys.value
}

setupCurrentMenu()

function getCurrentMenuRecursive(menus: RouteModuleList, targetKey: string, parentPath = '', parentMenus: GetArrayItemType<RouteModuleList>[] = []) {
  let keys: string[] = []
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

const getMenuClass = computed(() => {
  return ['menu-class', 'menu-class--fixed']
})
</script>

<style scoped lang="less">
  :deep(.menu-class) {
    &--fixed {
      height: calc(100vh - 56px);
      overflow-y: auto;
    }
  }

  /*定义整个滚动条高宽及背景：高宽分别对应横竖滚动条的尺寸*/
  :deep(::-webkit-scrollbar) {
    width: 2px;
    height: 2px;
    background-color: #F5F5F5;
  }
  /*定义滚动条轨道：内阴影+圆角*/
  :deep(::-webkit-scrollbar-track) {
    background-color: #F5F5F5;
  }
  /*定义滑块：内阴影+圆角*/
  :deep(::-webkit-scrollbar-thumb) {
    border-radius: 2px;
    background-color: rgb(119, 119, 119);
  }
</style>
