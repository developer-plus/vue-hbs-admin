<template>
  <div class="nav-header">
    <el-icon class="fold-menu" @click="handleFoldClick">
      <component :is="isCollapse ? Fold : Expand" />
    </el-icon>

    <div class="content">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>homepage</el-breadcrumb-item>
        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      </el-breadcrumb>

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
import { defineProps, defineEmits } from 'vue'

import { Fold, Expand, ChatDotRound, CollectionTag, Bell } from '@element-plus/icons-vue'
import UserInfo from './user-info.vue'

defineProps({
  isCollapse: Boolean
})

const emit = defineEmits(['foldChange'])

const handleFoldClick = () => {
  emit('foldChange')
}
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
