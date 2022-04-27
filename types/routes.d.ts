import 'vue-router'
import type { FunctionalComponent } from 'vue'

declare module 'vue-router' {
  interface RouteMeta {
    // 标题
    title: string
    // 是否是菜单
    isMenu: boolean
    // icon
    icon?: FunctionalComponent
    // 是否是单独的菜单
    single?: boolean
    // 排序索引
    sort: number
  }
}
