<template>
  <a-form
    v-show="getShow"
    ref="formRef"
    class="enter-x"
    :model="formData"
    :rules="formRules"
    @keypress.enter="handleLogin"
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
      <a-button size="large" type="primary" block :loading="loading" @click="handleLogin">
        登录
      </a-button>
    </a-form-item>

    <a-row class="enter-x" justify="space-between">
      <a-col :span="7">
        <a-button block @click="setLoginState(LoginStateEnum.MOBILE)">
          手机登录
        </a-button>
      </a-col>
      <a-col :span="7">
        <a-button block @click="setLoginState(LoginStateEnum.QR_CODE)">
          二维码登录
        </a-button>
      </a-col>
      <a-col :span="7">
        <a-button block @click="setLoginState(LoginStateEnum.REGISTER)">
          注册
        </a-button>
      </a-col>
    </a-row>

    <a-divider class="enter-x">
      其他登录方式
    </a-divider>

    <div class="flex justify-evenly enter-x sign-in-way">
      <GithubFilled />
      <WechatFilled />
      <AlipayCircleFilled />
      <GoogleCircleFilled />
      <TwitterCircleFilled />
    </div>
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

const getShow = computed(() => unref(getLoginState) === LoginStateEnum.LOGIN)

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
const handleLogin = async() => {
  const form = unref(formRef)
  if (!form) return
  const data = await form.validate()
  user.loginAction(data)
}
</script>
