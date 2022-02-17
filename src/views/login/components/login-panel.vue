<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon class="icon"><user /></el-icon> 账号登录
          </span>
        </template>
        <login-account />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon class="icon"><iphone /></el-icon> 手机登录
          </span>
        </template>
        <login-phone />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { User, Iphone } from '@element-plus/icons-vue'
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
</script>

<style scoped lang="less">
.login-panel {
  margin-bottom: 150px;
  width: 320px;

  .title {
    text-align: center;
  }

  .icon {
    position: relative;
    top: 1px;
  }
}
</style>
