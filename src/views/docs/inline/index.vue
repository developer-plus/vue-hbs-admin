<template>
  <div class="w-full h-full">
    <iframe :src="src" scrolling="auto" frameborder="0" class="w-full h-full" />
  </div>
</template>
<script setup lang="ts">
defineProps({
  src: { type: String }
})
</script>
<style lang="less" scoped>
</style>
