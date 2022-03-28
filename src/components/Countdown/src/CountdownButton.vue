<template>
  <a-button :disabled="isStart" :loading="loading" @click="handleStart">
    {{ getButtonText }}
  </a-button>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'

import { useCountdown } from './useCountdown'
import { isFunction } from '~/utils/is'

const props = defineProps({
  value: { type: [Object, Number, String, Array] },
  count: { type: Number, default: 60 },
  beforeStartFunc: {
    type: Function as PropType<() => Promise<boolean>>,
    default: null
  }
})

const loading = ref(false)

const { currentCount, isStart, start, reset } = useCountdown(props.count)

const getButtonText = computed(() => !unref(isStart) ? '获取验证码' : `${unref(currentCount)}秒后重新获取`)

async function handleStart() {
  const { beforeStartFunc } = props
  if (beforeStartFunc && isFunction(beforeStartFunc)) {
    loading.value = true
    try {
      const canStart = await beforeStartFunc()
      canStart && start()
    }
    finally {
      loading.value = false
    }
  }
  else {
    start()
  }
}
</script>
