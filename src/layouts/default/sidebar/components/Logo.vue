<template>
  <div class="logo">
    <img class="max-h-full" :src="LogoUrl" alt="Logo">
    <span v-show="showTitle" class="ml-8px text-white text-base font-bold">HbsAdmin</span>
  </div>
</template>

<script setup lang="ts">
import LogoUrl from '~/assets/logo.png'

defineProps({
  showTitle: { type: Boolean, default: true }
})
</script>

<style scoped lang="less">
.logo {
  @apply flex items-center p-10px w-full;

  height: var(--header-height);
}
</style>
