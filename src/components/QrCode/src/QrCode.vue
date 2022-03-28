<template>
  <div>
    <component :is="tag" ref="wrapRef" />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { QRCodeRenderersOptions, LogoType } from './types'

const props = defineProps({
  value: {
    type: [String, Array] as PropType<string | any[]>,
    default: null
  },
  // 参数
  options: {
    type: Object as PropType<QRCodeRenderersOptions>,
    default: null
  },
  // 宽度
  width: {
    type: Number as PropType<number>,
    default: 200
  },
  // 中间 logo 图标
  logo: {
    type: [String, Object] as PropType<Partial<LogoType> | string>,
    default: ''
  },
  // img 不支持内嵌 logo
  tag: {
    type: String as PropType<'canvas' | 'img'>,
    default: 'canvas',
    validator: (v: string) => ['canvas', 'img'].includes(v)
  }
})

const wrapRef = ref<HTMLCanvasElement | HTMLImageElement | null>(null)
</script>
