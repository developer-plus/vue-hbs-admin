<template>
  <Iframe class="w-full h-full" :src="$route.params.src" />
</template>

<script setup lang="ts">
import { Iframe } from '~/components/Iframe'
</script>
