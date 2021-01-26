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
    path: '/home/workReport',
    name: 'WorkReport',
    component: () => import('@/views/home/workReport')
  },
  // 工作日报
  {
    path: '/home/workDaily',
    name: 'WorkDaily',
    component: () => import('@/views/home/workDaily')
  },
  // 客户管理
  {
    path: '/home/customerMannager',
    name: 'CustomerMannager',
    component: () => import('@/views/home/customerMannager')
  },
  // 日报
  {
    path: '/home/workDaily/daily',
    name: 'Daily',
    component: () => import('@/views/home/daily')
  },
  // 日报详情
  {
    path: '/home/workDaily/daily/dailyDetail',
    name: 'DailyDetail',
    component: () => import('@/views/home/dailyDetail')
  }

]

const router = new VueRouter({
  routes
})

export default router
