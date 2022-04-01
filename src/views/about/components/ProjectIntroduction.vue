<template>
  <a-card title="关于" :bordered="false">
    <a href="https://github.com/Hongbusi/vue-hbs-admin" target="_blank">{{ name }}</a> 是一个基于 Vue3.0、Vite Ant-Design-Vue 、TypeScript 的后台解决方案，目标是为中小型项目开发，提供现成的开箱解决方案及丰富的示例。
  </a-card>
</template>

<script setup lang="ts">
const { pkg: { name } } = __APP_INFO__
</script>
