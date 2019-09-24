// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueAnalytics from 'vue-analytics'
import RUi from './r-elements'

import vDialog from 'v-dialogs'
Vue.use(vDialog)

// eslint-disable-next-line no-unused-vars
import filter from './filter'
// eslint-disable-next-line no-unused-vars
import popup from './router/popup'
// eslint-disable-next-line no-unused-vars
import help from './router/help'

import {ACTIONS} from '@/store/action-types'

Vue.config.productionTip = false

// モバイル判定
store.dispatch(ACTIONS.CONFIGS_INIT_MOBILE, require('ismobilejs'))
store.dispatch(ACTIONS.CONFIGS_LOAD_COOKIE)

// スクロール機能の初期化
var VueScrollTo = require('vue-scrollto')
if (store.state.configs.isMobile.any !== true) {
  Vue.use(VueScrollTo, {
    container: '#app'
  })
} else {
  Vue.use(VueScrollTo, {
    container: 'body'
  })
}

// カスタムElementsの登録
Vue.use(RUi)

// Google Analytics
if (process.env.GA) {
  Vue.use(VueAnalytics, {
    id: 'UA-48364547-45',
    router
  })
}

Vue.mixin({
  methods: {
    routerPush (path) {
      let name = 'pattern_code'
      let arr
      let reg = new RegExp('(| )' + name + '=([^;]*)(;|$)')
      arr = document.cookie.match(reg)
      let patternCode = null
      if (arr) {
        patternCode = (arr[2])
      }
      if (patternCode) {
        this.$router.push({path: path, query: {agency_code: patternCode}})
      } else {
        this.$router.push({path: path})
      }
    }
  }
})

// Vueの初期化
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  store: store,
  components: { App },
  template: '<App/>',
  data: {
    isMobile: store.state.configs.isMobile
  }
})
