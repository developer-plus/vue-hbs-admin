import { defineStore } from 'pinia'
import type { RouteModuleList } from '~/router/routes/typings'

interface RouteState {
  routes: RouteModuleList
}

export const useRouteStore = defineStore('routes', {
  state: (): RouteState => ({
    routes: []
  }),
  getters: {
    getRoutes: (state) => {
      return state.routes
    }
  },
  actions: {
    appendRoute(route: GetArrayItemType<RouteModuleList> | RouteModuleList): void {
      if (Array.isArray(route)) { this.routes.push(...route) }
      else { this.routes.push(route) }
    }
  }
})
