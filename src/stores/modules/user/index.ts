import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  persist: true,
  state: () => ({
    id: 0,
    username: '',
    avatar: '',
    authenticated: false
  }),
  getters: {},
  actions: {
    async user() {
      
    }
  }
})
