<template>
  <page-wrapper title="全屏">
    <a-card title="Window 全屏" :bordered="false" class="enter-y w-full">
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
    <a-card title="DOM 元素全屏" :bordered="false" class="enter-y w-full !mt-16px">
      <a-button type="primary" @click="toggleDomElFullscreen(true)">
        进入 DOM 元素全屏
      </a-button>
    </a-card>
    <div ref="domEl" class="enter-y !mt-16px w-500px h-200px bg-white flex justify-center items-center">
      <div>
        <a-button type="primary" danger ml="10px" @click="toggleDomElFullscreen(false)">
          退出 DOM 元素全屏
        </a-button>
        <span ml="10px" w-full>当前全屏状态：{{ isDomElFullscreen }}</span>
      </div>
    </div>
  </page-wrapper>
</template>

<script setup lang="ts">
import { PageWrapper } from '~/components/Page'

const { isFullscreen, enter, exit, toggle } = useFullscreen()

const domEl = ref<HTMLElement | null>()

const { isFullscreen: isDomElFullscreen, enter: enterDomElFullscreen, exit: exitDomElFullscreen } = useFullscreen(domEl)

function toggleFullscreen(isToggle = true, target = true) {
  if (isToggle) return toggle()
  return target ? enter() : exit()
}

function toggleDomElFullscreen(target = true) {
  target ? enterDomElFullscreen() : exitDomElFullscreen()
}
</script>
