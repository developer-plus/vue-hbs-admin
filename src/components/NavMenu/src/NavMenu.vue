<template>
  <div class="logo">
    Logo
  </div>
  <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
    <a-menu-item key="1">
      <user-outlined />
      <span>nav 1</span>
    </a-menu-item>
    <a-menu-item key="2">
      <video-camera-outlined />
      <span>nav 2</span>
    </a-menu-item>
    <a-menu-item key="3">
      <upload-outlined />
      <span>nav 3</span>
    </a-menu-item>
  </a-menu>
</template>

<script setup lang="ts">
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from '@ant-design/icons-vue'

const selectedKeys = ref<string[]>(['1'])
</script>

<style scoped lang="less">
.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 4px 10px 10px;
  height: 48px;
  cursor: pointer;
  color: #fff;
  transition: all .2s ease;
}
</style>
