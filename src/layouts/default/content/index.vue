<template>
  <div class="layout-content">
    <router-view v-slot="{ Component, route }">
      <keep-alive>
        <component :is="Component" :key="route.fullPath" />
      </keep-alive>
    </router-view>
  </div>
</template>

<style scoped lang="less">
.layout-content {
  min-height: calc(100vh - var(--header-height) - var(--footer-height));
}
</style>
