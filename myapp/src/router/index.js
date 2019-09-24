import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

import Index from '@/views/Index'
import Top from '@/views/Top'
import Album from '@/views/Album'
import Images from '@/views/Images'
import UserKanri from '@/views/UserKanri'
import UserCreate from '@/views/UserCreate'
import UserInsert from '@/views/UserInsert'
import DeletePopup from '@/views/DeletePopup'
import Deleteok from '@/views/Deleteok'
import Success from '@/views/Success'
import Sakuseok from '@/views/Sakuseok'
import Riyo from '@/views/Riyo'
import AlbumCreate from '@/views/AlbumCreate'
import Psdforget from '@/views/Psdforget'
import Setsumei from '@/views/Setsumei'
import Setsumeiok from '@/views/Setsumeiok'
import Yukokbnok from '@/views/Yukokbnok'

import Contract from '@/views/Contract'
import ContractAdd from '@/views/ContractAdd'
import ContractEdit from '@/views/ContractEdit'
import ContractEditTip from '@/views/ContractEditTip'

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
      path: '/UserKanri',
      name: 'UserKanri',
      component: UserKanri,
      meta: { existsStoreData: false,
        page_type: 'page1'
      }
    },
    {
      path: '/UserCreate',
      name: 'UserCreate',
      component: UserCreate,
      meta: { existsStoreData: false,
        page_type: 'page1'
      }
    },
    {
      path: '/UserInsert',
      name: 'UserInsert',
      component: UserInsert,
      meta: { existsStoreData: false,
        page_type: 'page1'
      }
    },
    {
      path: '/DeletePopup',
      name: 'DeletePopup',
      component: DeletePopup,
      meta: { existsStoreData: false,
        page_type: 'page1'
      }
    },
    {
      path: '/Deleteok',
      name: 'Deleteok',
      component: Deleteok,
      meta: { existsStoreData: false,
        page_type: 'page1'
      }
    },
    {
      path: '/Success',
      name: 'Success',
      component: Success,
      meta: { existsStoreData: false,
        page_type: 'page1'
      }
    },
    {
      path: '/Sakuseok',
      name: 'Sakuseok',
      component: Sakuseok,
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
      path: '/AlbumCreate',
      name: 'AlbumCreate',
      component: AlbumCreate,
      meta: { existsStoreData: false,
        page_type: 'page1'
      }
    },
    {
      path: '/Psdforget',
      name: 'Psdforget',
      component: Psdforget,
      meta: { existsStoreData: false,
        page_type: 'page1'
      }
    },
    {
      path: '/Setsumei',
      name: 'Setsumei',
      component: Setsumei,
      meta: { existsStoreData: false,
        page_type: 'page1'
      }
    },
    {
      path: '/Setsumeiok',
      name: 'Setsumeiok',
      component: Setsumeiok,
      meta: { existsStoreData: false,
        page_type: 'page1'
      }
    },
    {
      path: '/Yukokbnok',
      name: 'Yukokbnok',
      component: Yukokbnok,
      meta: { existsStoreData: false,
        page_type: 'page1'
      }
    },
    {
      path: '/Contract',
      name: 'Contract',
      component: Contract,
      meta: {
        existsStoreData: false,
        page_type: 'page1'
      }
    },
    {
      path: '/ContractAdd',
      name: 'ContractAdd',
      component: ContractAdd,
      meta: {
        existsStoreData: false,
        page_type: 'page1'
      }
    },
    {
      path: '/ContractEdit',
      name: 'ContractEdit',
      component: ContractEdit,
      meta: {
        existsStoreData: false,
        page_type: 'page1'
      }
    },
    {
      path: '/ContractEditTip',
      name: 'ContractEditTip',
      component: ContractEditTip,
      meta: {
        existsStoreData: false,
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