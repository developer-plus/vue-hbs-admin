import type { App } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import testImg from '~/assets/logo.png'
export default {
  install(app: App<Element>) {
    app.directive('lazyImg', {
      mounted(el: HTMLImageElement, binding: any) {
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          if (isIntersecting) {
            // 一般在标签上接收接口传值(v-lazyImg="接口返回值.xxxURL")
            el.src = el.src || binding.value || require('~/assets/logo.png')
            // 加载错误时的默认图片
            el.onerror = () => {
              el.src = binding.value || testImg
            }
            stop()
          }
        })
      }
    })
  }
}
