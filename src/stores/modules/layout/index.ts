import { defineStore } from 'pinia'

export const useLayoutStore = defineStore({
  id: 'layout',
  state: () => ({
    refresh: false
  }),
  actions: {
    toggleRefresh() {
      this.refresh = !this.refresh
    }
  }
})
