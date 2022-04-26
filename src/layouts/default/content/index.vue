<template>
  <div class="layout-content">
    <router-view v-slot="{ Component, route }">
      <transition name="fade-slide" mode="out-in" appear>
        <keep-alive>
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<style scoped lang="less">
.layout-content {
  min-height: calc(100vh - var(--header-height) - var(--footer-height));
}
</style>
