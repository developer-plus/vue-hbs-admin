<template>
  <a-layout>
    <layout-features />
    <layout-header />
    <a-layout class="mt-56px">
      <layout-sider />
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
import LayoutSider from './sider/index.vue'
import LayoutContent from './content/index.vue'
import LayoutFooter from './footer/index.vue'
</script>
