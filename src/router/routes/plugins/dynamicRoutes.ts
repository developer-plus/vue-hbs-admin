import type { RouteModuleList } from '../typings'
import { useRouteStore } from '~/stores'

type RouteModule = GetArrayItemType<RouteModuleList>

function sortBySortKey(routerModuleList: RouteModuleList | RouteModule['children']) {
  return routerModuleList!.sort((a: RouteModule, b: RouteModule) => a.meta!.sort - b.meta!.sort)
}

function sortRoutesBySortKey(routerModuleList: RouteModuleList) {
  for (const routerModule of routerModuleList) {
    const single = routerModule.meta?.single || false
    if (!single) routerModule.children = sortBySortKey(routerModule.children)
  }
  return sortBySortKey(routerModuleList)
}

function filterHideRoute(routerModuleList: RouteModuleList | RouteModule['children']) {
  if (!routerModuleList) return []
  const filteredModuleList = []
  // for 循环提高执行效率
  for (let i = 0; i < routerModuleList.length; i++) {
    const routeModule = routerModuleList[i]
    if (routeModule.meta?.isHide) continue
    let { children } = routeModule
    if (children && children.length) {
      children = routeModule.children = filterHideRoute(routeModule.children)
      // 如果筛选出来子级没有需要展示的，那么就把 children 这个属性删除掉
      if (!children.length) Reflect.deleteProperty(routeModule, 'children')
    }
    filteredModuleList.push(routeModule)
  }
  return filteredModuleList
}

/**
 * 用于将本地静态路由 push 到路由表中
 * @param routerModuleList 路由
 */
export function setupDynamicRoutes(routerModuleList: RouteModuleList) {
  const store = useRouteStore()
  store.appendRoute(sortRoutesBySortKey(filterHideRoute(routerModuleList)))
}
