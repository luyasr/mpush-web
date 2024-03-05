// 对外暴露的路由
export const constantRoute = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/layout/LayoutView.vue'),
    meta: {
      title: '',
      hideInMenu: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/HomeView.vue'),
        meta: {
          title: '首页',
          requiresAuth: true,
          icon: '',
          hideInMenu: false
        }
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/layout/LayoutView.vue'),
    meta: {
      title: '关于',
      requiresAuth: true,
      icon: '',
      hideInMenu: false
    },
    children: [
      {
        path: '/about/one',
        name: 'one',
        component: () => import('@/views/home/HomeView.vue'),
        meta: {
          title: 'one',
          requiresAuth: true,
          icon: '',
          hideInMenu: false
        }
      },
      {
        path: '/about/two',
        name: 'two',
        component: () => import('@/views/home/HomeView.vue'),
        meta: {
          title: 'two',
          requiresAuth: true,
          icon: '',
          hideInMenu: false
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/LoginView.vue'),
    meta: {
      title: '登录',
      hideInMenu: true
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/error/404View.vue'),
    meta: {
      title: '404',
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
