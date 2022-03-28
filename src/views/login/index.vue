<template>
  <div class="hbs-login h-full flex justify-center items-center">
    <Plum />

    <div class="w-400px">
      <LoginForm />
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginForm from './components/LoginForm.vue'
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

      &:hover {
        color: #0960bd;
      }
    }
  }
}
</style>
