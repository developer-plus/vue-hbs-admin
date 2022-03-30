<template>
  default

  <router-view v-slot="{ Component, route }">
    <keep-alive>
      <component :is="Component" :key="route.fullPath" />
    </keep-alive>
  </router-view>
</template>
