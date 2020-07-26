import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.VUE_APP_DEBUG === 'true',
  plugins: process.env.VUE_APP_DEBUG === 'true' && process.env.NODE_ENV === 'development'
    ? [createLogger()]
    : []
})
