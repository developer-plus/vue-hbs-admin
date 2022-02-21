<template>
  <div class="user-info">
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar size="small" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        <span class="name">{{ name }}</span>
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>退出登录</el-dropdown-item>
          <el-dropdown-item divided>用户信息</el-dropdown-item>
          <el-dropdown-item divided>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '@/store'

import { ArrowDown } from '@element-plus/icons-vue'

const store = useStore()
const name = computed(() => store.state.login.userInfo.name)
</script>

<style scoped lang="less">
.user-info {
  .name {
    margin-left: 6px;
  }
}

.el-dropdown-link {
  display: flex;
  align-items: center;
  cursor: pointer;
}
</style>
