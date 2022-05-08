<template>
  <a-dropdown>
    <div>
      <a-avatar :src="user.getUserInfo.avatar" />
      <span class="ml-10px text-base text-black">{{ user.getUserInfo.username }}</span>
    </div>

    <template #overlay>
      <a-menu>
        <a-menu-item key="lock">
          <span class="flex items-center">
            <lock-outlined class="mr-1" />
            <span>锁定屏幕</span>
          </span>
        </a-menu-item>
        <a-menu-item key="logout" @click="handleLogout">
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
import { message } from 'ant-design-vue'
import { LockOutlined, PoweroffOutlined } from '@ant-design/icons-vue'
import { useUserStore } from '~/stores'

const user = useUserStore()

const handleLogout = () => {
  user.logout()
  message.success('用户退出成功')
}
</script>
