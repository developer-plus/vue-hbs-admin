<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card">
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon style="vertical-align: middle;">
              <avatar />
            </el-icon>
            账号登录
          </span>
        </template>
        账号登录
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon style="vertical-align: middle;">
              <iphone />
            </el-icon>
            手机登录
          </span>
        </template>
        手机登录
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { Avatar, Iphone } from '@element-plus/icons-vue'
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
  text-align: center;
}
</style>
