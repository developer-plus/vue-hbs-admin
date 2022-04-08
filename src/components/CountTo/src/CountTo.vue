<template>
  <span>
    {{ value }}
  </span>
</template>

<script setup lang="ts">
import { TransitionPresets } from '@vueuse/core'

interface Props {
  startVal?: number
  endVal?: number
  duration?: number
  autoplay?: boolean
  transition?: string
}

const props = withDefaults(defineProps<Props>(), {
  startVal: 0,
  endVal: 6666,
  duration: 1000,
  autoplay: true,
  transition: 'linear'
})

const emit = defineEmits(['finished', 'started'])

const source = ref(props.startVal)
let outputValue = useTransition(source)
const value = computed(() => unref(outputValue))

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
</script>
