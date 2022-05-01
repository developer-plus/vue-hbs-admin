/**
 *  Global authority directive
 *  Used for lazyLoading image
 *  @Example v-lazyImg = "UserInfo.pictures"
 */

import type { App, Directive, DirectiveBinding } from 'vue'

import { useIntersectionObserver } from '@vueuse/core'

import defaultImg from '~/assets/images/test.jpeg'

function lazyImg (el: HTMLImageElement, binding: any) {
  const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
    if (isIntersecting) {
      // 一般在标签上接收接口传值(v-lazyImg="接口返回值.xxxURL")
      el.src = el.src || binding.value || defaultImg
      // 加载错误时的默认图片
      el.onerror = () => {
        el.src = binding.value || defaultImg
      }
      stop()
    }
  })
}

const mounted = (el: HTMLImageElement, binding: DirectiveBinding<any>) => {
  lazyImg(el, binding)
}

const LazyImgDirective: Directive = {
  mounted
}

export function setupLazyImgDirectives (app: App) {
  app.directive('lazyImg', LazyImgDirective)
}

export default LazyImgDirective
