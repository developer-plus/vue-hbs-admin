<template>
  <Common>
    <template #sider>
      <span class="bg-white">sider</span>
    </template>
    <template #header-right>
      <HeaderRight />
    </template>

    <template #content>
      <div class="p-16px">
        <router-view v-slot="{ Component, route }">
          <keep-alive>
            <component :is="Component" :key="route.fullPath" />
          </keep-alive>
        </router-view>
      </div>
    </template>
  </Common>
</template>

<script setup lang="ts">
import Common from '../components/Common.vue'
import HeaderRight from '../components/HeaderRight.vue'
</script>
