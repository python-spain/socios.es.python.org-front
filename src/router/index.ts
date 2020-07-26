import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import i18n from '@/i18n'

import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
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

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  // For dev purpose. Change current locale with an url query param, 'lang'.
  // E.g. 'http://localhost:9000/?lang=es'
  const lang: string = to.query.lang as string
  if (lang && i18n.availableLocales.includes(lang) && lang !== i18n.locale) {
    i18n.locale = lang
  }

  return next()
})

export default router
