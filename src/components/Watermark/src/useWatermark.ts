import type { Ref } from 'vue'
import { throttle } from 'lodash-es'
import type { Attr } from './types'
import { addResizeListener, removeResizeListener } from '~/utils/resize'
import { isDef } from '~/utils/is'

const domSymbol = Symbol('watermark-dom')

export function useWatermark(
  appendEl: Ref<HTMLElement | null> = ref(document.body) as Ref<HTMLElement>
) {
  const func = throttle(() => {
    const el = unref(appendEl)
    if (!el) return
    const { clientHeight: height, clientWidth: width } = el
    updateWatermark({ height, width })
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
  }

  function createBase64(attr: Attr) {
    const can = document.createElement('canvas')
    const width = 300
    const height = 240
    Object.assign(can, { width, height })

    const cans = can.getContext('2d')
    if (cans) {
      cans.rotate((-20 * Math.PI) / 120)
      cans.font = attr?.font || '15px Vedana'
      cans.fillStyle = attr?.fillStyle || 'rgba(0, 0, 0, 0.3)'
      cans.textAlign = attr?.textAlign || 'center'
      cans.textBaseline = attr?.textBaseline || 'middle'
      cans.fillText(attr?.str || '防伪 ☆ 加密', width / 20, height)
      attr?.str2 && cans.fillText(attr?.str2, width / 20, height + 20)
    }
    return can.toDataURL('image/png')
  }

  function updateWatermark(attr: Attr) {
    const el = unref(watermarkEl)
    if (!el) return
    if (isDef(attr.width)) {
      el.style.width = `${attr.width}px`
    }
    if (isDef(attr.height)) {
      el.style.height = `${attr.height}px`
    }
    el.style.background = `url(${createBase64(attr)}) left top repeat`
  }

  const createWatermark = (attr: Attr) => {
    if (unref(watermarkEl)) {
      updateWatermark(attr)
      return id
    }
    const div = document.createElement('div')
    watermarkEl.value = div
    div.id = id
    div.style.pointerEvents = 'none'
    div.style.top = '0px'
    div.style.left = '0px'
    div.style.position = 'absolute'
    div.style.zIndex = '100000'
    //
    const el = unref(appendEl)
    if (!el) return id
    const { clientHeight: height, clientWidth: width } = el
    attr.width = width
    attr.height = height
    updateWatermark(attr)
    el.appendChild(div)
    return id
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
