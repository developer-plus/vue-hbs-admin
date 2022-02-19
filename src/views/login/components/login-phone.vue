<template>
  <el-form ref="phoneRef" :model="phone" :rules="rules">
    <el-form-item label="手机号" prop="num">
      <el-input v-model="phone.num"></el-input>
    </el-form-item>
    <el-form-item label="验证码" prop="code">
      <el-input v-model="phone.code"></el-input>
      <el-button type="primary">获取验证码</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { ElForm } from 'element-plus'
import { rules } from '../config/account-config'

type FormInstance = InstanceType<typeof ElForm>

const accountRef = ref<FormInstance>()
const phone = reactive({
  num: '',
  code: ''
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
