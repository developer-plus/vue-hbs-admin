<template>
  <div class="app">
    <el-button>Default</el-button>
    <el-input />
    <router-link to="/login">登录</router-link>
    <router-link to="/main">首页</router-link>
    <router-view />
  </div>
</template>

<script setup lang="ts">
console.log('setup')
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
