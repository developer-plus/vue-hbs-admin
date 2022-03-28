<template>
  <a-form
    v-if="getShow"
    ref="formRef"
    :model="formData"
    @keypress.enter="handleReset"
  >
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
        登录
      </a-button>
    </a-form-item>

    <a-form-item class="enter-x">
      <a-button size="large" block :loading="loading" @click="handleBackLogin">
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
  mobile: string
  sms: string
}

const { handleBackLogin, getLoginState } = useLoginState()

const getShow = computed(() => unref(getLoginState) === LoginStateEnum.MOBILE)

const formRef = ref<InstanceType<typeof Form>>()
const loading = ref(false)

const formData = reactive<FormState>({
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
