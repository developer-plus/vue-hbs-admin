<template>
  <a-input :size="size">
    <template #addonAfter>
      <CountDownButton :size="size" :count="count" :before-start-func="sendCodeApi" />
    </template>
  </a-input>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

import CountDownButton from './CountDownButton.vue'

const props = defineProps({
  value: { type: String },
  size: { type: String, validator: v => ['default', 'large', 'small'].includes(v) },
  count: { type: Number, default: 60 },
  sendCodeApi: {
    type: Function as PropType<() => Promise<boolean>>,
    default: null
  }
})
</script>
