import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'
import Home from '../views/home/Home.vue'

import Flow from '../views/flow/Flow.vue'
import Check from '../views/check/check.vue'
import CheckItem from '../components/check/checkItem.vue'
import User from '../views/user/user.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    redirect: '/Home',
    children: [
      {
        path: '/Home',
        name: 'Home',
        component: Home
      },
      {
        path: '/Flow',
        name: 'Flow',
        component: Flow
      },
      {
        path: '/Check',
        name: 'Check',
        component: Check
      },
      {
        path: '/User',
        name: 'User',
        component: User
      },
    ],
  },

  {
    path: '/CheckItem',
    name: 'CheckItem',
    component: CheckItem
  },
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
  // mode: 'history',

  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
