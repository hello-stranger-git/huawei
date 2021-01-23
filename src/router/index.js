import Vue from 'vue'
import VueRouter from 'vue-router'

<<<<<<< HEAD
import Flow from '../views/flow/Flow.vue'
import Check from '../views/check/check.vue'
import CheckItem from '../components/check/checkItem.vue'
import User from '../views/user/user.vue'
import App from '../views/app/app.vue'


=======
>>>>>>> master
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
<<<<<<< HEAD
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
      {
        path: '/App',
        name: 'App',
        component: App
      },
    ],
  },

  {
    path: '/CheckItem',
    name: 'CheckItem',
    component: CheckItem
  },
=======
    name: 'Home',
    component: () => import('@/layout')
  }
>>>>>>> master
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
