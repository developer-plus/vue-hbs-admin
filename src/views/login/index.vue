<template>
  <div class="hbs-login h-full flex justify-center items-center">
    <Plum />

    <div class="w-400px">
      <LoginForm />
      <ForgetPasswordForm />
      <MobileForm />
      <QrCodeForm />
      <RegisterForm />
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginForm from './components/LoginForm.vue'
import ForgetPasswordForm from './components/ForgetPasswordForm.vue'
import MobileForm from './components/MobileForm.vue'
import QrCodeForm from './components/QrCodeForm.vue'
import RegisterForm from './components/RegisterForm.vue'
</script>

<style lang="less">
.hbs-login {
  .ant-divider-inner-text {
    font-size: 12px;
    color: #00000073;
  }

  .sign-in-way {
    .anticon {
      font-size: 22px;
      color: #888;
      cursor: pointer;
      transform: color 0.3s ease;

      &:hover {
        color: #1890ff;
        transform: color 0.3s ease;
      }
    }
  }
}
</style>
