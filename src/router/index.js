import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/new-partner',
    name: 'new-partner',
    component: () => import(/* webpackChunkName: "new-partner" */ '../views/NewPartner/NewPartner.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
