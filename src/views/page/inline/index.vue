<template>
  <div class="inline">
    <iframe :src="src" scrolling="auto" frameborder="0" class="inline-iframe" />
  </div>
</template>
<script setup lang="ts">
defineProps({
  src: { type: String }
})
</script>
<style lang="less" scoped>
.inline {
  height: 100%;
  width: 100%;
  .inline-iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
