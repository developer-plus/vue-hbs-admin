<template>
  <div w-full h="60px" bg="white" pl="20px" mb="10px">
    <h1 text="2xl" font="bold" leading="60px">
      全屏示例
    </h1>
  </div>
  <a-card title="Window 全屏" :bordered="false" w-full>
    <a-button type="primary" @click="toggleFullscreen(false, true)">
      进入全屏
    </a-button>
    <a-button ml="10px" @click="toggleFullscreen()">
      切换全屏
    </a-button>
    <a-button type="primary" danger ml="10px" @click="toggleFullscreen(false, false)">
      退出全屏
    </a-button>
    <span ml="10px">当前全屏状态：{{ isFullscreen }}</span>
  </a-card>
  <a-card title="DOM 元素全屏" :bordered="false" w-full mt="!20px">
    <a-button type="primary" @click="toggleDomElFullscreen(true)">
      进入 DOM 元素全屏
    </a-button>
  </a-card>
  <div ref="domEl" w="500px" h="200px" bg="white" mt="20px" flex="~ wrap" justify="center" items="center">
    <div>
      <a-button type="primary" danger ml="10px" @click="toggleDomElFullscreen(false)">
        退出 DOM 元素全屏
      </a-button>
      <span ml="10px" w-full>当前全屏状态：{{ isDomElFullscreen }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useFullscreen } from '@vueuse/core'

const { isFullscreen, enter, exit, toggle } = useFullscreen()

const domEl = ref<HTMLElement | null>()

const { isFullscreen: isDomElFullscreen, enter: enterDomElFullscreen, exit: exitDomElFullscreen } = useFullscreen(domEl)

function toggleFullscreen(isToggle = true, target = true, el = null) {
  if (isToggle) return toggle()
  return target ? enter() : exit()
}

function toggleDomElFullscreen(target = true) {
  target ? enterDomElFullscreen() : exitDomElFullscreen()
}
</script>
