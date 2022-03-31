<template>
  <Common>
    <template #sider>
      <span class="bg-white">sider</span>
    </template>
    <template #header-right>
      Hongbusi
    </template>

    <template #content>
      <router-view v-slot="{ Component, route }">
        <keep-alive>
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
      </router-view>
    </template>
  </Common>
</template>

<script setup lang="ts">
import Common from '../components/Common.vue'
</script>
