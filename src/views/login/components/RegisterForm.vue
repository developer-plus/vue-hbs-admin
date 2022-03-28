<template>
  <a-form
    v-if="getShow"
    ref="formRef"
    :model="formData"
    @keypress.enter="handleRegister"
  >
    <a-form-item
      class="enter-x"
      name="account"
    >
      <a-input v-model:value="formData.account" placeholder="账号" size="large" />
    </a-form-item>

    <a-form-item
      class="enter-x"
      name="mobile"
    >
      <a-input v-model:value="formData.mobile" placeholder="手机号" size="large" />
    </a-form-item>

    <a-form-item class="enter-x">
      <CountDownInput v-model:value="formData.sms" size="large" placeholder="短信验证码" />
    </a-form-item>

    <a-form-item
      class="enter-x"
      name="password"
    >
      <a-input-password v-model:value="formData.password" size="large" placeholder="密码" />
    </a-form-item>

    <a-form-item
      class="enter-x"
      name="confirmPassword"
    >
      <a-input-password v-model:value="formData.confirmPassword" size="large" placeholder="确认密码" />
    </a-form-item>

    <a-form-item class="enter-x">
      <a-button size="large" type="primary" block :loading="loading" @click="handleRegister">
        注册
      </a-button>
    </a-form-item>

    <a-form-item class="enter-x">
      <a-button size="large" block @click="handleBackLogin">
        返回
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
import type { Form } from 'ant-design-vue'

import { LoginStateEnum, useLoginState } from '../useLogin'
import { CountDownInput } from '~/components/Countdown'

import { useUserStore } from '~/stores/modules/user'

interface FormState {
  account: string
  password: string
  confirmPassword: string
  mobile: string
  sms: string
}

const { handleBackLogin, getLoginState } = useLoginState()

const getShow = computed(() => unref(getLoginState) === LoginStateEnum.REGISTER)

const formRef = ref<InstanceType<typeof Form>>()
const loading = ref(false)

const formData = reactive<FormState>({
  account: '',
  password: '',
  confirmPassword: '',
  mobile: '',
  sms: ''
})

const user = useUserStore()
const handleRegister = async() => {
  const form = unref(formRef)
  if (!form) return
  const data = await form.validate()
  user.loginAction(data)
}
</script>
