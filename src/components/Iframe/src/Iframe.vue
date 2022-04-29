<template>
  <iframe :src="src" scrolling="auto" frameborder="0" />
</template>
<script setup lang="ts">
defineProps({
  src: { type: String }
})
</script>
<style lang="less">
</style>
