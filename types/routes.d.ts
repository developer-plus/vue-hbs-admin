import 'vue-router'
import type { FunctionalComponent } from 'vue'

declare module 'vue-router' {
  interface RouteMeta {
    // 标题
    title: string
    // 排序索引
    sort: number
    // 是否隐藏菜单
    isHide?: boolean
    // icon，目前仅支持引入 antdv 中的 icon 组件
    icon?: FunctionalComponent
    // 是否是单独的菜单
    single?: boolean
    // 路由携带参数
    routeParams?: RouteLocationNormalized["params"]
    routeQuery?: RouteLocationNormalized["query"]
  }
}
