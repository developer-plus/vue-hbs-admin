<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldClick">
      <component :is="isCollapse ? Fold : Expand" />
    </el-icon>

    <div class="content">
      <h-breadcrumb :breadcrumbs="breadcrumbs" />

      <div class="content-right">
        <el-icon><chat-dot-round /></el-icon>
        <el-icon><collection-tag /></el-icon>
        <el-icon><bell /></el-icon>

        <user-info />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue'

import { Fold, Expand, ChatDotRound, CollectionTag, Bell } from '@element-plus/icons-vue'
import UserInfo from './user-info.vue'
import HBreadcrumb, { IBreadcrumb } from '@/base-ui/breadcrumb'

import { useStore } from '@/store'
import { useRoute } from 'vue-router'
import { pathMapBreadcrumbs } from '@/utils/map-menus'

defineProps({
  isCollapse: Boolean
})

const emit = defineEmits(['foldChange'])

const handleFoldClick = () => {
  emit('foldChange')
}

const store = useStore()
const route = useRoute()
const breadcrumbs = computed(() => {
  const userMenus = store.state.login.userMenus
  const currentPath = route.path
  return pathMapBreadcrumbs(userMenus, currentPath)
})
</script>

<style scoped lang="less">
.nav-header {
  display: flex;
  width: 100%;

  .fold-menu {
    font-size: 30px;
    cursor: pointer;
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;
    padding: 0 20px;

    .content-right {
      display: flex;
      justify-content: space-around;
      align-items: center;
      min-width: 200px;

      .el-icon {
        cursor: pointer;
      }
    }
  }
}
</style>
