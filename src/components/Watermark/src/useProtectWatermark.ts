import { styleConfig } from './config'
import type { StyleConfig } from './types'
import type { TrackedElement } from '~/utils/useMutationObserver'
import { addTrackedElement, ObserveType, removeTrackedElement } from '~/utils/useMutationObserver'

const beTrackedWatermark = ref<TrackedElement>()
const beProtected = ref<boolean>(false)

/**
 * 防破解水印
 * @param el 当前水印的 dom 元素
 */
export function setupProtectWatermark(el: HTMLElement): void {
  beProtected.value = true
  handleBeRemoved(el)
  handleStyleChanged(el, styleConfig)
}

/**
 * 处理水印被删除的情况，这里使用了 MutationObserver
 * @param el 当前水印的 dom 元素
 */
function handleBeRemoved(el: HTMLElement) {
  const element = beTrackedWatermark.value = {
    el,
    callback: () => {
      document.body.append(el)
    },
    type: ObserveType.REMOVE
  }
  addTrackedElement(element)
}

/**
 * 处理水印的样式被改变，重置样式
 * @param el
 */
function handleStyleChanged(el: HTMLElement, config: StyleConfig) {
  useRafFn(async() => {
    if (beProtected.value) {
      await nextTick()
      resetStyle(el, config)
    }
  })
}

function resetStyle(el: HTMLElement, config: StyleConfig) {
  const beObservedStyleName: (keyof StyleConfig)[] = ['id', 'pointer-events', 'background', 'position', 'z-index', 'width', 'height', 'top', 'left']
  beObservedStyleName.forEach((styleName) => {
    if (el.style.getPropertyValue(styleName) !== config[styleName]) {
      el.style.setProperty(styleName, config[styleName])
    }
  })
}

export function stopProtectWatermark(): void {
  removeTrackedElement(beTrackedWatermark.value!)
  beTrackedWatermark.value = undefined
  beProtected.value = false
}
