<template>
  <div class="login">
    <h2 class="login-title">
      Vue Element Admin
    </h2>
    <p class="login-desc">
      一个基于 Vue3 的内容管理系统。
    </p>

    <login-panel />

    <Footer />
  </div>

  <Plum />
</template>

<script setup lang="ts">
import LoginPanel from './components/login-panel.vue'
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px;
}

.login-title {
  font-size: 32px;
  font-weight: 600;
  color: rgba(0,0,0, .85);
}

.login-desc {
  margin-top: 12px;
  margin-bottom: 40px;
  font-size: 14px;
  color: rgba(0, 0, 0, .45);
}
</style>
