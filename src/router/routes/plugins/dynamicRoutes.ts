import type { RouteModuleList } from '../typings'
import { useRouteStore } from '~/stores'

type RouteModule = GetArrayItemType<RouteModuleList>

function sortBySortKey(routerModuleList: RouteModuleList | RouteModule['children']) {
  return routerModuleList.sort((a: RouteModule, b: RouteModule) => a.meta!.sort - b.meta!.sort)
}

function sortRoutesBySortKey(routerModuleList: RouteModuleList) {
  for (const routerModule of routerModuleList) {
    const single = routerModule.meta?.single || false
    if (!single) routerModule.children = sortBySortKey(routerModule.children)
  }
  return sortBySortKey(routerModuleList)
}

/**
 * 用于将本地静态路由 push 到路由表中
 * @param routerModuleList 路由
 */
export function setupDynamicRoutes(routerModuleList: RouteModuleList) {
  const store = useRouteStore()
  store.appendRoute(sortRoutesBySortKey(routerModuleList))
}
