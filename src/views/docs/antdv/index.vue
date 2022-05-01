<template>
  <div class="w-full h-full">
    <Iframe class="w-full h-full" :src="$route.params.src" />
  </div>
</template>

<script setup lang="ts">
import { Iframe } from '~/components/Iframe'
</script>
