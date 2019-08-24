import {ACTIONS} from '../action-types'
import {MUTATIONS} from '../mutation-types'
import util from '@/util'
import {NHA_O_0015_API} from '@/api/NHA_O_0015_Api'
import {cloneDeep} from 'lodash'

export default {
  state: {
    isMobile: null,
    notice: null,
    prefectures: [
      {value: '01', label: '北海道'},
      {value: '02', label: '青森県'},
      {value: '03', label: '岩手県'},
      {value: '04', label: '宮城県'},
      {value: '10', label: '秋田県'},
      {value: '11', label: '山形県'},
      {value: '12', label: '福島県'},
      {value: '20', label: '茨城県'},
      {value: '21', label: '栃木県'},
      {value: '22', label: '群馬県'},
      {value: '23', label: '埼玉県'},
      {value: '24', label: '千葉県'},
      {value: '25', label: '東京都'},
      {value: '26', label: '神奈川県'},
      {value: '30', label: '新潟県'},
      {value: '31', label: '富山県'},
      {value: '32', label: '石川県'},
      {value: '33', label: '福井県'},
      {value: '34', label: '山梨県'},
      {value: '40', label: '長野県'},
      {value: '41', label: '岐阜県'},
      {value: '42', label: '静岡県'},
      {value: '43', label: '愛知県'},
      {value: '44', label: '三重県'},
      {value: '50', label: '滋賀県'},
      {value: '57', label: '京都府'},
      {value: '58', label: '大阪府'},
      {value: '59', label: '兵庫県'},
      {value: '60', label: '奈良県'},
      {value: '61', label: '和歌山県'},
      {value: '62', label: '鳥取県'},
      {value: '63', label: '島根県'},
      {value: '64', label: '岡山県'},
      {value: '70', label: '広島県'},
      {value: '71', label: '山口県'},
      {value: '72', label: '徳島県'},
      {value: '73', label: '香川県'},
      {value: '74', label: '愛媛県'},
      {value: '80', label: '高知県'},
      {value: '81', label: '福岡県'},
      {value: '82', label: '佐賀県'},
      {value: '83', label: '長崎県'},
      {value: '84', label: '熊本県'},
      {value: '90', label: '大分県'},
      {value: '91', label: '宮崎県'},
      {value: '92', label: '鹿児島県'},
      {value: '93', label: '沖縄県'}
    ],
    months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    systemDate: (new Date()).getFullYear().toString() + ('00' + ((new Date()).getMonth() + 1).toString()).slice(-2) + ('00' + (new Date()).getDay().toString()).slice(-2),
    startDateMin: (new Date()).getFullYear().toString() + ('00' + ((new Date()).getMonth() + 1).toString()).slice(-2) + ('00' + (new Date()).getDay().toString()).slice(-2),
    startDateMax: (new Date()).getFullYear().toString() + ('00' + ((new Date()).getMonth() + 1).toString()).slice(-2) + ('00' + (new Date()).getDay().toString()).slice(-2),
    buildingMinYear: 1965,
    buildingMaxYear: 3000,
    birthdayMinYear: 1900,
    birthdayMaxYear: 3000,
    agentCode: null,
    agentName: null,
    // 直接画面遷移（MYIDログイン後、マイページからの遷移）
    direct: false,
    action: null,
    // SMBC決済アクセス情報 TODO テスト環境
    shopCd: '3990432',
    syuno_co_cd: '56617',
    tokenApiKey: '4fe066bf53493ace931693a6757387f449456438247a8ac78799c4166d90dd53',
    csrfToken: null,
    csrfTokenMyPage: null,
    mytoken: null,
    // Cookies
    cookies: {},
    // メッセージ
    parameterError: false,
    // メッセージ
    MESSAGE: {
      BACKFIRST: '一時保存をしていない場合、これまでのご入力内容は保存されませんので、ご注意ください。'
    },
    // TOP画面
    agentList: [],
    printNoList: [],
    totalSize: null,
    // ACTIONSの同期情報（APIのresponseにdoingを拡張したデータ）
    sync: {
      [ACTIONS.CONFIGS_INIT]: { doing: false }
    },
    maintenancedata: null
  },
  getters: {
    scrollOffset: state => {
      return state.isMobile.any ? -65 : 0
    },
    agencyCode: state => {
      return state.cookies.pattern_code
    }
  },
  actions: {
    /**
     * Configの初期化
     */
    async [ACTIONS.CONFIGS_INIT] ({state, commit}, payload) {
      const myAction = ACTIONS.CONFIGS_INIT

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }
      // 読込画面 開始
      // commit(MUTATIONS.UI_SET_LOADING_ON)

      await NHA_O_0015_API.getConfig(payload)
        .then(response => {
          let systemDate = response.data.systemDate
          let startDateMin = response.data.startDateMin
          let startDateMax = response.data.startDateMax
          let notice = response.data.notice
          let agentCode = response.data.agentCode
          let agentName = response.data.agentName
          let storeName = response.data.storeName
          let direct = response.data.direct
          let action = response.data.action
          let csrfToken = response.data.csrfToken
          let mytoken = response.data.mytoken

          if (notice === undefined) {
            notice = null
          } else if (util.isEmpty(notice)) {
            notice = null
          }

          const data = {
            systemDate: systemDate,
            startDateMin: startDateMin,
            startDateMax: startDateMax,
            // buildingMaxYear: util.year(systemDate) + 1,
            buildingMaxYear: util.year(systemDate),
            birthdayMaxYear: util.year(systemDate),
            buildingMinYear: util.year(startDateMin) - 100, // 築年数でまる21年分 ⇒ 1999年固定
            notice: notice,
            agentCode: agentCode,
            agentName: agentName,
            storeName: storeName,
            direct: direct,
            action: action,
            mytoken: mytoken,
            csrfToken: csrfToken,
            agentList: response.data.agentList,
            printNoList: response.data.printNoList,
            totalSize: response.data.totalSize
          }
          console.log('Top data =', data)
          commit(MUTATIONS.CONFIGS_INIT, data)
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => util.api.end(myAction, state.sync))

      // 読込画面 終了
      // commit(MUTATIONS.UI_SET_LOADING_OFF)
    },
    /**
     * Cookieの初期化
     */
    [ACTIONS.CONFIGS_LOAD_COOKIE] ({state, commit}) {
      const reKey = /(?:^|; )([^=]+?)(?:=([^;]*))?(?:;|$)/g
      const cookies = {}
      let match

      while ((match = reKey.exec(document.cookie))) {
        reKey.lastIndex = (match.index + match.length) - 1
        cookies[match[1]] = typeof decoder === 'function' ? decodeURIComponent(match[2]) : match[2]
      }
      commit(MUTATIONS.CONFIGS_SET_COOKIE, cookies)
    },
    /**
     * モバイル判定の初期化
     */
    [ACTIONS.CONFIGS_INIT_MOBILE] ({state, commit}, isMobile) {
      const data = cloneDeep(isMobile)
      data.getFirstIsMobile = () => isMobile
      commit(MUTATIONS.CONFIGS_INIT, {isMobile: data})
    },
    /**
     * モバイル判定の設定
     */
    [ACTIONS.CONFIGS_SET_MOBILE] ({state, commit}, isMobileAny) {
      commit(MUTATIONS.CONFIGS_CHANGE_MOBILE, isMobileAny)
    },
    [ACTIONS.CONFIGS_DIRECT_RESET] ({commit}) {
      commit(MUTATIONS.CONFIGS_DIRECT_RESET)
    },
    [ACTIONS.CONFIGS_ACTION_RESET] ({commit}) {
      commit(MUTATIONS.CONFIGS_ACTION_RESET)
    }
  },
  mutations: {
    /**
     * Configの初期化
     */
    [MUTATIONS.CONFIGS_INIT] (state, payload) {
      state = Object.assign(state, payload)
    },
    /**
     * Directの初期化
     */
    [MUTATIONS.CONFIGS_DIRECT_RESET] (state) {
      state.direct = false
    },
    /**
     * Actionの初期化
     */
    [MUTATIONS.CONFIGS_ACTION_RESET] (state) {
      state.action = null
    },
    /**
     * Cookie
     */
    [MUTATIONS.CONFIGS_SET_COOKIE] (state, cookies) {
      state.cookies = Object.assign(state.cookies, cookies)
    },
    /**
     * モバイル判定の変更
     */
    [MUTATIONS.CONFIGS_CHANGE_MOBILE] (state, isMobileAny) {
      const isMobile = state.isMobile
      for (const key1 in isMobile) {
        if (typeof isMobile[key1] === 'boolean') {
          isMobile[key1] = isMobileAny
        } else if (typeof isMobile[key1] === 'object') {
          for (const key2 in isMobile[key1]) {
            if (typeof isMobile[key1][key2] === 'boolean') {
              isMobile[key1][key2] = isMobileAny
            }
          }
        }
      }
    }
  }
}
