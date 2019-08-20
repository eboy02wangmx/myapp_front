import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import {ACTIONS} from '@/store/action-types'
import {MUTATIONS} from '@/store/mutation-types'
import util from '@/util'

import Index from '@/views/Index'
import Top from '@/views/Top'

import TopSp from '@/views-sp/Top'
import Error from '@/views/Error'
import ErrorSp from '@/views-sp/Error'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '*',
      name: 'NotFound',
      component: Index
    },
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: { requiresAuth: false }
    },
    {
      path: '/FromMyPage/:mytoken',
      name: 'FromMyPage',
      component: Index,
      meta: { requiresAuth: false }
    },
    {
      path: '/Error',
      name: 'Error',
      component: Error
    },
    {
      path: '/sp/Error',
      name: 'ErrorSp',
      component: ErrorSp
    },
    {
      path: '/Top',
      name: 'Top',
      component: Top,
      meta: { existsStoreData: false,
        page_type: 'page1'
      }
    },
    {
      path: '/sp/Top',
      name: 'TopSp',
      component: TopSp,
      meta: { existsStoreData: false,
        page_type: 'page1'
      }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  const isMobile = store.state.configs.isMobile

  store.commit(MUTATIONS.API_CLEAR_ERROR)
  store.dispatch(ACTIONS.POPUP_CLOSE)
  store.dispatch(ACTIONS.HELP_CLOSE)
  if ((to.path === '/Top') || (to.path === '/Error') || (to.path === '/sp/Top') || (to.path === '/sp/Error')) {
    if (isMobile.any === true && to.path.indexOf('/sp') !== 0) {
      next({path: '/sp' + to.path, query: to.query})
      return
    } else {
      next()
    }
    return
  }
  // agentNameが無い ＆ 認証が必要な画面 の場合は、Indexにforward
  if (store.state.configs.agentName === null && !to.matched.some(record => record.meta.requiresAuth === false)) {
    console.log('return /')
    next({path: '/', query: {}})
    return
  }

  // 認証が必要な画面 の場合は、storeをチェック（ブラウザバックなどでデータ不足の対策）
  if (!to.matched.some(record => record.meta.requiresAuth === false) && !to.matched.some(record => record.meta.existsStoreData === false)) {
    if (util.isEmptyOrUndef(store.state.myapp.data.withOldContract)) {
      console.log('return2 /')
      next({path: '/', query: {}})
    }

    if (to.path.indexOf('/Building') !== 0 && to.path.indexOf('/sp/Building') !== 0) {
      if (util.isEmptyOrUndef(store.state.myapp.data.entryNo)) {
        console.log('return3 /')
        next({path: '/', query: {}})
      }
    }
  }

  // Index以外は、Pathを検証
  if (to.path !== '/') {
    // モバイル画面へforward
    if (isMobile.any === true && to.path.indexOf('/sp') !== 0) {
      next({path: '/sp' + to.path, query: to.query})
      return
    }

    // 通常ページへforward
    if (isMobile.any === false && to.path.indexOf('/sp') === 0) {
      next(to.path.slice(3))
      return
    }
  }

  // 画面遷移
  next()
})

router.afterEach((to, from) => {
  if (to.meta.page_type && process.env.GA) {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ page_type: to.meta.page_type, event: 'pageLoad' })
  }
})

export default router
