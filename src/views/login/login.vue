<template>
  <div class="login">
    <login-panel />
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
  align-items: center;
  padding: 180px;
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
