<template>
  <a-card title="生产环境依赖" :bordered="false">
    <a-descriptions bordered>
      <a-descriptions-item v-for="(value, key) in dependencies" :key="key" :label="key">
        {{ value }}
      </a-descriptions-item>
    </a-descriptions>
  </a-card>
</template>

<script setup lang="ts">
const { pkg: { dependencies } } = __APP_INFO__
</script>
