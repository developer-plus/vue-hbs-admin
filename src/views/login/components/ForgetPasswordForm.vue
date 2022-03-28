<template>
  <a-form
    v-show="getShow"
    ref="formRef"
    :model="formData"
    :rules="formRules"
    @keypress.enter="handleReset"
  >
    <a-form-item
      class="enter-x"
      name="username"
    >
      <a-input v-model:value="formData.username" size="large" />
    </a-form-item>

    <a-form-item
      class="enter-x"
      name="password"
    >
      <a-input-password v-model:value="formData.password" size="large" />
    </a-form-item>

    <a-row class="enter-x">
      <a-col :span="12">
        <a-form-item class="enter-x">
          <a-checkbox v-model:checked="remember" size="small">
            记住密码
          </a-checkbox>
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item :style="{ 'text-align': 'right' }" class="enter-x">
          <a-button type="link" size="small" @click="setLoginState(LoginStateEnum.RESET_PASSWORD)">
            忘记密码?
          </a-button>
        </a-form-item>
      </a-col>
    </a-row>

    <a-form-item class="enter-x">
      <a-button size="large" type="primary" block :loading="loading" @click="handleReset">
        重置
      </a-button>
    </a-form-item>

    <a-form-item class="enter-x">
      <a-button size="large" block :loading="loading" @click="setLoginState(LoginStateEnum.LOGIN)">
        返回
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
import type { Form } from 'ant-design-vue'

import {
  GithubFilled,
  WechatFilled,
  AlipayCircleFilled,
  GoogleCircleFilled,
  TwitterCircleFilled
} from '@ant-design/icons-vue'

import { LoginStateEnum, useLoginState } from '../useLogin'
import { useUserStore } from '~/stores/modules/user'

interface FormState {
  username: string
  password: string
}

const { setLoginState, getLoginState } = useLoginState()

const getShow = computed(() => unref(getLoginState) === LoginStateEnum.RESET_PASSWORD)

const formRules = {
  username: [
    { required: true, message: '必须输入用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '必须输入密码', trigger: 'blur' }
  ]
}

const formRef = ref<InstanceType<typeof Form>>()
const loading = ref(false)
const remember = ref(true)

const formData = reactive<FormState>({
  username: 'Hongbusi',
  password: 'admin'
})

const user = useUserStore()
const handleReset = async() => {
  const form = unref(formRef)
  if (!form) return
  const data = await form.validate()
  user.loginAction(data)
}
</script>
