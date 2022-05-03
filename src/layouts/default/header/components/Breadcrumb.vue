<template>
  <a-breadcrumb class="!ml-2">
    <a-breadcrumb-item v-for="(item,index) in routes" :key="index">
      {{ item.meta.title }}
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script setup lang="ts">
import type { RouteLocationMatched } from 'vue-router'

const route = useRoute()
const routes = ref<RouteLocationMatched[]>([])

watchEffect(() => {
  routes.value = route.matched.filter(item => !!item.meta?.title)
})
</script>
