import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/layout'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index')
      },
      {
        path: '/shop',
        name: 'Shop',
        component: () => import('@/views/shop/index')
      },
      {
        path: '/application',
        name: 'Application',
        component: () => import('@/views/application/index')
      },
      {
        path: '/user',
        name: 'User',
        component: () => import('@/views/user/index')
      }
    ]
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
