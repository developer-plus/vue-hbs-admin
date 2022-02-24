<template>
  <div class="app">
    <el-config-provider :locale="locale">
      <router-view />
    </el-config-provider>
  </div>
</template>

<script setup lang="ts">
import locale from 'element-plus/lib/locale/lang/zh-cn'
</script>

<style scoped lang="less">
.app {
  width: 100%;
  height: 100%;
}
</style>
