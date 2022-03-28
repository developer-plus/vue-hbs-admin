<template>
  <a-form
    v-show="getShow"
    ref="formRef"
    :model="formData"
    @keypress.enter="handleReset"
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

import { LoginStateEnum, useLoginState } from '../useLogin'
import { CountDownInput } from '~/components/Countdown'

import { useUserStore } from '~/stores/modules/user'

interface FormState {
  account: string
  mobile: string
  sms: string
}

const { setLoginState, getLoginState } = useLoginState()

const getShow = computed(() => unref(getLoginState) === LoginStateEnum.RESET_PASSWORD)

const formRef = ref<InstanceType<typeof Form>>()
const loading = ref(false)
const remember = ref(true)

const formData = reactive<FormState>({
  account: '',
  mobile: '',
  sms: ''
})

const user = useUserStore()
const handleReset = async() => {
  const form = unref(formRef)
  if (!form) return
  const data = await form.validate()
  user.loginAction(data)
}
</script>
