<template>
  <!-- <Common>
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
  </Common> -->

  <a-layout>
    <layout-features />
    <layout-header />
    <a-layout>
      <layout-sidebar />
      <a-layout>
        <layout-content />
        <layout-footer />
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script setup lang="ts">
import LayoutFeatures from './features/index.vue'
import LayoutHeader from './header/index.vue'
import LayoutSidebar from './sidebar/index.vue'
import LayoutContent from './content/index.vue'
import LayoutFooter from './footer/index.vue'
</script>
