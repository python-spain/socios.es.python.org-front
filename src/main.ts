import Vue from 'vue'

import './registerServiceWorker'

import VueI18n from 'vue-i18n'
import i18nPlugin from '@/plugins/i18n'

import App from './App.vue'

import router from './router'
import store from './store'
import i18n from './i18n'

Vue.config.productionTip = false

Vue.use(VueI18n)
Vue.use(i18nPlugin)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
