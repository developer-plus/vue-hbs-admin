<template>
  <a-tooltip title="全屏" placement="bottom" :mouse-enter-delay="0.5">
    <span @click="toggle">
      <fullscreen-exit-outlined v-if="isFullscreen" />
      <fullscreen-outlined v-else />
    </span>
  </a-tooltip>
</template>

<script setup lang="ts">
import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons-vue'

const { toggle, isFullscreen } = useFullscreen()
</script>
