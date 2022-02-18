<template>
  <el-form ref="accountRef" :model="account" :rules="rules">
    <el-form-item label="账号" prop="name">
      <el-input v-model="account.name"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="account.password"></el-input>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { ElForm } from 'element-plus'
import { rules } from '../config/account-config'

type FormInstance = InstanceType<typeof ElForm>

const accountRef = ref<FormInstance>()
const account = reactive({
  name: '',
  password: ''
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
