<template>
  <el-form ref="formRef" :model="account" :rules="rules">
    <el-form-item label="账号" prop="name">
      <el-input v-model="account.name" />
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="account.password" show-password />
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { useStore } from 'vuex'
import type { ElForm } from 'element-plus'
import { rules } from '../config/account-config'
import localCache from '@/utils/cache'

const store = useStore()

const formRef = ref<InstanceType<typeof ElForm>>()
const account = reactive({
  name: localCache.getCache('name') ?? '',
  password: localCache.getCache('password') ?? ''
})

const loginAction = (isKeepPassword: boolean) => {
  formRef.value?.validate((valid) => {
    if (valid) {
      // 1. 判断是否需要记住密码
      if (isKeepPassword) {
        localCache.setCache('name', account.name)
        localCache.setCache('password', account.password)
      }
      else {
        localCache.removeCache('name')
        localCache.removeCache('password')
      }

      // 2. 登录操作
      store.dispatch('login/accountLoginAction', { ...account })
    }
  })
}

defineExpose({ loginAction })
</script>
