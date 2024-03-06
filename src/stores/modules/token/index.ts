import { defineStore } from 'pinia'
import type { TokenState } from './types'
import type { LoginRequest, LogoutRequest } from '@/types/user'
import { Login, Logout } from '@/api/user'
import { useUserStore } from '@/stores/modules/user'

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
      const userStore = useUserStore()
      const resp = await Login(req)
      if (resp.code === 200) {
        this.access_token = resp.data.access_token
        this.refresh_token = resp.data.refresh_token

        // 已验证
        userStore.authenticated = true
        return 'ok'
      } else {
        return Promise.reject(new Error(resp.reason))
      }
    },
    async logout() {
      const userStore = useUserStore()
      const req: LogoutRequest = {
        access_token: this.access_token,
        refresh_token: this.refresh_token
      }
      const resp = await Logout(req)
      if (resp.code === 200) {
        this.$reset()
        // 登录状态置为未验证
        userStore.authenticated = false
        return 'ok'
      } else {
        return Promise.reject(new Error(resp.reason))
      }
    }
  }
})
