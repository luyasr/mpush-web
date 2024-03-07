import { defineStore } from 'pinia'
import { QueryUser } from '@/api/user'

export const useUserStore = defineStore({
  id: 'user',
  persist: true,
  state: () => ({
    id: 0,
    username: '',
    nickname: '',
    avatar: '',
    authenticated: false
  }),
  getters: {},
  actions: {
    async queryUser() {
      const resp = await QueryUser()

      if (resp.code === 200) {
        this.id = resp.data.id
        this.username = resp.data.username
        this.nickname = resp.data.nickname
        this.avatar = resp.data.avatar
      } else {
        return Promise.reject(new Error(resp.reason))
      }
    }
  }
})
