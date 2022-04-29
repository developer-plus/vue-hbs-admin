<template>
  <iframe :src="src" scrolling="auto" frameborder="0" />
</template>

<script setup lang="ts">
defineProps<{
  src: string
}>()
</script>
