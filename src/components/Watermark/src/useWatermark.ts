import type { Ref } from 'vue'
import { throttle } from 'lodash-es'
import type { Attr } from './types'
import { stopProtectWatermark, setupProtectWatermark } from './useProtectWatermark'
import { domSymbol, initConfig, styleConfig } from './config'
import { isDef } from '~/utils/is'
import { addResizeListener, removeResizeListener } from '~/utils/resize'

export function useWatermark(
  appendEl: Ref<HTMLElement | null> = ref(document.body) as Ref<HTMLElement>
) {
  let curAttr: Attr
  const func = throttle(() => {
    const el = unref(appendEl)

    if (!el) return
    const { clientHeight: height, clientWidth: width } = el
    updateWatermark({ ...curAttr, height, width })
  })
  const id = domSymbol.toString()
  const watermarkEl = shallowRef<HTMLElement>()

  const clear = () => {
    const domId = unref(watermarkEl)
    watermarkEl.value = undefined
    const el = unref(appendEl)
    if (!el) return
    domId && el.removeChild(domId)
    removeResizeListener(el, func)
    stopProtectWatermark()
  }

  function createBase64(attr: Attr) {
    const can = document.createElement('canvas')
    const width = initConfig.width
    const height = initConfig.height
    Object.assign(can, { width, height })

    const cans = can.getContext('2d')
    if (cans) {
      cans.rotate((-20 * Math.PI) / 120)
      cans.font = attr?.font || initConfig.font
      cans.fillStyle = attr?.fillStyle || initConfig.fillStyle
      cans.textAlign = attr?.textAlign || initConfig.textAlign
      cans.textBaseline = attr?.textBaseline || initConfig.textBaseline
      cans.fillText(attr?.str || initConfig.str, width / 20, height)
      attr?.str2 && cans.fillText(attr?.str2, width / 20, height + 20)
    }
    return can.toDataURL('image/png')
  }

  function updateWatermark(attr: Attr) {
    const el = unref(watermarkEl)
    curAttr = attr
    if (!el) return
    if (isDef(attr.width)) {
      el.style.width = styleConfig.width = `${attr.width}px`
    }
    if (isDef(attr.height)) {
      el.style.height = styleConfig.height = `${attr.height}px`
    }
    el.style.background = styleConfig.background = `url(${createBase64(attr)}) left top repeat`
  }

  const createWatermark = (attr: Attr) => {
    if (unref(watermarkEl)) {
      setupProtectWatermark(watermarkEl.value!)
      updateWatermark(attr)
      return id
    }
    const div = document.createElement('div')
    watermarkEl.value = div
    setupStyle(div)
    //
    const el = unref(appendEl)
    if (!el) return id
    const { clientHeight: height, clientWidth: width } = el
    attr.width = width
    attr.height = height
    updateWatermark(attr)
    el.appendChild(div)
    setupProtectWatermark(watermarkEl.value!)
    return id
  }

  function setupStyle(div: HTMLElement) {
    div.id = styleConfig.id
    div.style.pointerEvents = styleConfig['pointer-events']
    div.style.top = `${styleConfig.top}px`
    div.style.left = `${styleConfig.left}px`
    div.style.position = styleConfig.position
    div.style.zIndex = styleConfig['z-index']
  }

  function setWatermark(attr: Attr = {}) {
    if (!document.getElementById(id)) watermarkEl.value = undefined
    createWatermark(attr)
    addResizeListener(document.documentElement, func)
    const instance = getCurrentInstance()
    if (instance) {
      onBeforeUnmount(() => {
        clear()
      })
    }
  }

  return { setWatermark, clear }
}
