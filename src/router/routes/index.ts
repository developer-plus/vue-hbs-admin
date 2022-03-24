import type { RouteRecordRaw } from 'vue-router'
import { RootRoute, LoginRoute, MainRoute, NotFoundRoute } from './basic'

const modules = import.meta.globEager('./modules/**/*.ts')

const routeModuleList: RouteRecordRaw[] = []

Object.keys(modules).forEach((key) => {
  const mod = modules[key].default || {}
  const modList = Array.isArray(mod) ? [...mod] : [mod]
  routeModuleList.push(...modList)
})

export const asyncRoutes = routeModuleList

export const basicRoutes: RouteRecordRaw[] = [
  LoginRoute,
  MainRoute,
  RootRoute,
  NotFoundRoute
]
