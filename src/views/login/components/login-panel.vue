<template>
  <div class="login-panel">
    <el-tabs v-model="currentTab" type="border-card" stretch>
      <el-tab-pane name="account">
        <template #label>
          <span>
            <el-icon class="icon"><user /></el-icon> 账号登录
          </span>
        </template>
        <!-- <login-account ref="accountRef" /> -->
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span>
            <el-icon class="icon"><iphone /></el-icon> 手机登录
          </span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">
        记住密码
      </el-checkbox>
      <el-link type="primary">
        忘记密码
      </el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLoginClick">
      立即登录
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { User, Iphone } from '@element-plus/icons-vue'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import LoginAccount from './login-account.vue'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import LoginPhone from './login-phone.vue'

const currentTab = ref<string>('account')
const isKeepPassword = ref(true)
const accountRef = ref<InstanceType<typeof LoginAccount>>()
const phoneRef = ref<InstanceType<typeof LoginPhone>>()

const handleLoginClick = () => {
  if (currentTab.value === 'account') {
    accountRef.value?.loginAction(isKeepPassword.value)
  }
  else {
    phoneRef.value?.loginAction()
  }
}
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
    top: 2px;
  }

  .account-control {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  .login-btn {
    width: 100%;
  }
}
</style>
