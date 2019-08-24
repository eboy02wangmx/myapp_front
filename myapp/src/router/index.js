import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

import Index from '@/views/Index'
import Top from '@/views/Top'
import Album from '@/views/Album'
import Images from '@/views/Images'
import User from '@/views/User'
import UserEdit from '@/views/UserEdit'
import Riyo from '@/views/Riyo'

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
      path: '/Album',
      name: 'Album',
      component: Album,
      meta: { existsStoreData: false,
        page_type: 'page1'
      }
    },
    {
      path: '/Images',
      name: 'Images',
      component: Images,
      meta: { existsStoreData: false,
        page_type: 'page1'
      }
    },
    {
      path: '/User',
      name: 'User',
      component: User,
      meta: { existsStoreData: false,
        page_type: 'page1'
      }
    },
    {
      path: '/UserEdit',
      name: 'UserEdit',
      component: UserEdit,
      meta: { existsStoreData: false,
        page_type: 'page1'
      }
    },
    
    {
      path: '/Riyo',
      name: 'Riyo',
      component: Riyo,
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

  if ((to.path === '/Top') || (to.path === '/Error') || (to.path === '/sp/Top') || (to.path === '/sp/Error')) {
    if (isMobile.any === true && to.path.indexOf('/sp') !== 0) {
      next({path: '/sp' + to.path, query: to.query})
      return
    } else {
      next()
    }
    return
  }
  // // agentNameが無い ＆ 認証が必要な画面 の場合は、Indexにforward
  // if (store.state.configs.agentName === null && !to.matched.some(record => record.meta.requiresAuth === false)) {
  //   console.log('return /')
  //   next({path: '/', query: {}})
  //   return
  // }

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
