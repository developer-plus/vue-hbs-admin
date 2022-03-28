<template>
  <a-form
    :model="formState"
    name="basic"

    autocomplete="off"
    @finish="onFinish"
  >
    <a-form-item
      class="enter-x"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <a-input v-model:value="formState.username" size="large" />
    </a-form-item>

    <a-form-item
      class="enter-x"
      name="password"
      :rules="[{ required: true, message: 'Please input your password!' }]"
    >
      <a-input-password v-model:value="formState.password" size="large" />
    </a-form-item>

    <a-row class="enter-x">
      <a-col :span="12">
        <a-form-item class="enter-x" name="remember">
          <a-checkbox v-model:checked="formState.remember" size="small">
            记住密码
          </a-checkbox>
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item :style="{ 'text-align': 'right' }" class="enter-x" name="remember">
          <a-button type="link" size="small">
            忘记密码?
          </a-button>
        </a-form-item>
      </a-col>
    </a-row>

    <a-form-item class="enter-x">
      <a-button size="large" type="primary" html-type="submit" block>
        登录
      </a-button>
    </a-form-item>

    <a-row class="enter-x" justify="space-between">
      <a-col :span="7">
        <a-button block>
          手机登录
        </a-button>
      </a-col>
      <a-col :span="7">
        <a-button block>
          手机登录
        </a-button>
      </a-col>
      <a-col :span="7">
        <a-button block>
          手机登录
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
import {
  GithubFilled,
  WechatFilled,
  AlipayCircleFilled,
  GoogleCircleFilled,
  TwitterCircleFilled
} from '@ant-design/icons-vue'

import { useUserStore } from '~/stores/modules/user'

interface FormState {
  username: string
  password: string
  remember: boolean
}

const formState = reactive<FormState>({
  username: 'Hongbusi',
  password: 'admin',
  remember: true
})

const user = useUserStore()
const onFinish = (values: any) => {
  user.loginAction(values)
}
</script>
