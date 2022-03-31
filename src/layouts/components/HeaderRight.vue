<template>
  <a-dropdown>
    <div class="flex items-center px-16px h-full cursor-pointer transition-color hover:bg-gray-100">
      <a-avatar :src="logoUrl" />
      <span class="ml-10px text-base text-black">Hongbusi</span>
    </div>

    <template #overlay>
      <a-menu>
        <a-menu-item key="0">
          用户中心
        </a-menu-item>
        <a-menu-item key="1">
          退出登录
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script setup lang="ts">
import logoUrl from '~/assets/logo.png'
</script>
