import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/layout'),
    children: [
      // 首页
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index')
      },
      {
        // 通讯录
        path: '/phoneConnect',
        name: 'PhoneConnect',
        component: () => import('@/views/phoneConnect/index')
      },
      {
        // 商城
        path: '/shop',
        name: 'Shop',
        component: () => import('@/views/shop/index')
      },
      {
        // 应用
        path: '/application',
        name: 'Application',
        component: () => import('@/views/application/index')
      },
      {
        // 我的
        path: '/user',
        name: 'User',
        component: () => import('@/views/user/index')
      }
    ]
  },
  // 登录
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login')
  },
  // 用户信息界面
  {
    path: '/userMessage',
    name: 'UserMessage',
    component: () => import('@/views/userMessage')
  },
  // 忘记密码以及注册
  {
    path: '/forgetRegist',
    name: 'ForgetRegist',
    component: () => import('@/views/forgetRegist')
  },
  // 工作汇报
  {
    path: '/workReport',
    name: 'WorkReport',
    component: () => import('@/views/workReport')
  },
  // 工作日报
  {
    path: '/workDaily',
    name: 'WorkDaily',
    component: () => import('@/views/home/workDaily')
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
