import { defineStore } from 'pinia'
import { constantRoute } from '@/router/routes'
import type { RouterState } from './types'

export const useRouteStore = defineStore({
  id: 'route',
  state: (): RouterState => ({
    routes: constantRoute
  }),
  getters: {
    getRoutes(): RouterState['routes'] {
      return this.routes
    }
  },
  actions: {
    setRoutes(routes: RouterState['routes']) {
      this.routes = routes
    }
  }
})
