<template>
  <page-wrapper title="保护元素不被删除">
    <div mb="3">
      保护状态：{{ isProtected }}
    </div>
    <a-space>
      <a-button :disabled="!beProtectedEl" type="primary" @click="startProtect()">
        开启保护
      </a-button>
      <a-button :disabled="!beProtectedEl" @click="removeEl()">
        删除元素
      </a-button>
      <a-button :disabled="!beProtectedEl" type="primary" danger @click="stopProtect()">
        关闭保护
      </a-button>
      <a-button :disabled="!!beProtectedEl" @click="createElement()">
        重置元素
      </a-button>
    </a-space>
    <div ref="container" mt="5" />
  </page-wrapper>
</template>
<script setup lang="ts">
import { PageWrapper } from '~/components/Page'
import { addTrackedElement, removeTrackedElement, ObserveType } from '~/utils/useMutationObserver'
import type { TrackedElement } from '~/utils/useMutationObserver'

const container = ref<HTMLElement>()
const beProtectedEl = ref<HTMLElement>()
const isProtected = ref(false)
const beTrackedEl: TrackedElement = {
  el: null,
  callback(el) {
    container.value!.append(el!)
    beProtectedEl.value = el as HTMLElement
  },
  type: ObserveType.REMOVE
}

function createElement() {
  if (beTrackedEl.el) return
  const div = document.createElement('div')
  div.innerHTML = '被保护的元素'
  div.style.width = '200px'
  div.style.height = '200px'
  div.style.backgroundColor = 'purple'
  div.style.color = '#fff'
  div.style.lineHeight = '200px'
  div.style.textAlign = 'center'
  beProtectedEl.value = div
  container.value!.append(div)
}

onMounted(() => {
  createElement()
})

onUnmounted(() => {
  // 销毁组件，关闭保护
  stopProtect()
})

function startProtect() {
  beTrackedEl.el = beProtectedEl.value!
  addTrackedElement(beTrackedEl)
  isProtected.value = true
}

function stopProtect() {
  removeTrackedElement(beTrackedEl)
  beTrackedEl.el = null
  isProtected.value = false
}

function removeEl() {
  beProtectedEl.value!.remove()
  beProtectedEl.value = undefined
}
</script>
