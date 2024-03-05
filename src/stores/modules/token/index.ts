import { defineStore } from 'pinia'
import type { TokenState } from './types'
import type { LoginRequest } from '@/types/user'
import { Login } from '@/api/user'

export const useTokenStore = defineStore({
  id: 'token',
  //   开启数据持久化
  persist: true,
  state: (): TokenState => ({
    access_token: localStorage.getItem('access_token') || null,
    refresh_token: localStorage.getItem('refresh_token') || null
  }),
  getters: {},
  //   异步逻辑
  actions: {
    async login(req: LoginRequest) {
      const resp = await Login(req)
      if (resp.code === 200) {
        this.access_token = resp.data.access_token
        this.refresh_token = resp.data.refresh_token

        return 'ok'
      } else {
        return Promise.reject(new Error(resp.reason))
      }
    }
  }
})
