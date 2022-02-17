<template>
  <el-form ref="accountFormRef" :model="accountForm" :rules="rules">
    <el-form-item label="账号" prop="name">
      <el-input v-model="accountForm.name"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="accountForm.password"></el-input>
    </el-form-item>
  </el-form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { ElForm } from 'element-plus'

type FormInstance = InstanceType<typeof ElForm>

const accountFormRef = ref<FormInstance>()
const accountForm = reactive({
  name: '',
  password: ''
})

const rules = reactive({
  name: [
    {
      required: true,
      message: 'Please input Activity name',
      trigger: 'blur'
    },
    {
      min: 3,
      max: 5,
      message: 'Length should be 3 to 5',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: 'Please input Activity name',
      trigger: 'blur'
    }
  ]
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
