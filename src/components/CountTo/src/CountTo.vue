<template>
  <span>{{ value }}</span>
</template>

<script setup lang="ts">
import { TransitionPresets } from '@vueuse/core'
import { isNumber } from '~/utils/is'

interface Props {
  startVal?: number
  endVal?: number
  duration?: number
  autoplay?: boolean
  decimals?: number
  prefix?: string
  suffix?: string
  separator?: string
  decimal?: string
  color?: string
  useEasing?: boolean
  transition?: string
}

const props = withDefaults(defineProps<Props>(), {
  startVal: 0,
  endVal: 6666,
  duration: 1000,
  autoplay: true,
  decimals: 1,
  prefix: '',
  suffix: '',
  separator: ',',
  decimal: '.',
  useEasing: true,
  transition: 'linear'
})

const emit = defineEmits(['started', 'finished'])

const source = ref(props.startVal)
let outputValue = useTransition(source)

const value = computed(() => formatNumber(unref(outputValue)))

watch([() => props.startVal, () => props.endVal], () => {
  if (props.autoplay) {
    start()
  }
})

onMounted(() => {
  props.autoplay && start()
})

function start() {
  run()
  source.value = props.endVal
}

function run() {
  outputValue = useTransition(source, {
    duration: props.duration,
    onFinished: () => emit('finished'),
    onStarted: () => emit('started'),
    transition: TransitionPresets[props.transition]
  })
}

function formatNumber(num: number | string) {
  if (!num && num !== 0) {
    return ''
  }
  const { decimals, decimal, separator, suffix, prefix } = props
  num = Number(num).toFixed(decimals)
  num += ''

  const x = num.split('.')
  let x1 = x[0]
  const x2 = x.length > 1 ? decimal + x[1] : ''

  const rgx = /(\d+)(\d{3})/
  if (separator && !isNumber(separator)) {
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, `$1${separator}$2`)
    }
  }
  return prefix + x1 + x2 + suffix
}
</script>
