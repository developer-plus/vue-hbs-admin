<template>
  <Common>
    <router-view v-slot="{ Component, route }">
      <keep-alive>
        <component :is="Component" :key="route.fullPath" />
      </keep-alive>
    </router-view>
  </Common>
</template>

<script setup lang="ts">
import Common from '../components/Common.vue'
</script>
