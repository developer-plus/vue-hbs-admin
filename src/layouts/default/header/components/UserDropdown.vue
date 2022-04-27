<template>
  <a-dropdown>
    <div>
      <a-avatar :src="logoUrl" />
      <span class="ml-10px text-base text-black">Hongbusi</span>
    </div>

    <template #overlay>
      <a-menu>
        <a-menu-item key="doc">
          <span class="flex items-center">
            <file-text-outlined class="mr-1" />
            <a class="text-black" href="https://vue-hbs-admin-docs.netlify.app/" target="_blank">
              <span>文档</span>
            </a>
          </span>
        </a-menu-item>
        <a-divider class="my-1" />
        <a-menu-item key="lock">
          <span class="flex items-center">
            <lock-outlined class="mr-1" />
            <span>锁定屏幕</span>
          </span>
        </a-menu-item>
        <a-menu-item key="logout">
          <span class="flex items-center">
            <poweroff-outlined class="mr-1" />
            <span>退出登录</span>
          </span>
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>

<script setup lang="ts">
import { LockOutlined, PoweroffOutlined, FileTextOutlined } from '@ant-design/icons-vue'
import logoUrl from '~/assets/logo.png'
</script>
