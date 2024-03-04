import layout from '@/layout/layoutView.vue'

// 对外暴露的路由
export const constantRoute = [
  {
    path: '/',
    name: 'layout',
    component: () => layout
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/LoginView.vue'),
    meta: {
      title: '登录',
      hideInMenu: true
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'any',
    redirect: '/404',
    meta: {
      title: '任意路由',
      hideInMenu: true
    }
  }
]
