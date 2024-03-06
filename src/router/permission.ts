import { useUserStore } from '@/stores/modules/user'

// 全局前置守卫
export const beforeEach = async (to: any) => {
  const userStore = useUserStore()

  const isLogin = userStore.authenticated
  // 没有登陆访问非登录页面跳转到登录页面
  if (!isLogin && to.name !== 'login') {
    return { name: 'login' }
  }
}
