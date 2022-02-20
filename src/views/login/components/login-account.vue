<template>
  <el-form ref="formRef" :model="account" :rules="rules">
    <el-form-item label="账号" prop="name">
      <el-input v-model="account.name"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="account.password"></el-input>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import type { ElForm } from 'element-plus'
import { rules } from '../config/account-config'

type FormInstance = InstanceType<typeof ElForm>

export default defineComponent({
  setup() {
    const formRef = ref<FormInstance>()
    const account = reactive({
      name: '',
      password: ''
    })

    const loginAction = () => {
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log('login')
        }
      })
    }

    return {
      formRef,
      account,
      rules,
      loginAction
    }
  }
})
</script>
