import store from '@/store'
import {ACTIONS} from '@/store/action-types'
import {MUTATIONS} from '@/store/mutation-types'
import {cloneDeep} from 'lodash'
import router from '@/router/index'

export default {
  // Emptyかどうか
  isEmpty (value) {
    if (value === null) {
      return true
    }
    if (typeof value === 'string' && value.length === 0) {
      return true
    }

    return false
  },
  // Empty or Undefinedかどうか
  isEmptyOrUndef (value) {
    if (value === undefined) {
      return true
    }

    return this.isEmpty(value)
  },
  equal (objA, objB) {
    if (!objA || !objB) return false
    if (objA === objB) return true
    return false
  },
  parse: {
    string (value) {
      if (value === undefined) {
        return undefined
      }
      if (value === null) {
        return null
      }

      return String(value)
    },
    int (value) {
      if (value === undefined) {
        return undefined
      }
      if (value === null) {
        return null
      }

      const newValue = parseInt(value)
      if (isNaN(newValue)) {
        return null
      }

      return newValue
    },
    float (value) {
      if (value === undefined) {
        return undefined
      }
      if (value === null) {
        return null
      }

      const newValue = parseFloat(value)
      if (isNaN(newValue)) {
        return null
      }

      return newValue
    },
    date (dateOrYear, month, day) {
      if (dateOrYear === undefined) {
        return undefined
      }
      if (dateOrYear === null) {
        return null
      }

      // 年・月を指定して実行されたとき
      if (month !== undefined) {
        if (day === undefined) {
          day = 1
        }
        const y = parseInt(dateOrYear)
        const m = parseInt(month)
        const d = parseInt(day)
        return new Date(y, m - 1, d)
      }

      // 日付のみ（引数が1つ）で実行されたとき
      if (typeof dateOrYear === 'string' && dateOrYear.length === 8) {
        const y = parseInt(dateOrYear.substr(0, 4))
        const m = parseInt(dateOrYear.substr(4, 2))
        const d = parseInt(dateOrYear.substr(6, 2))
        return new Date(y, m - 1, d)
      }

      try {
        return new Date(dateOrYear)
      } catch (ex) {
        return null
      }
    },
    senToMan (value) {
      // 千円データを万円単位に変換
      if (value === undefined) {
        return undefined
      }
      if (value === null) {
        return null
      }
      const newValue = parseInt(value)
      if (isNaN(newValue)) {
        return null
      }
      return Math.floor(newValue / 10)
    },
    manToSenNumber (value) {
      // 千円データを万円単位に変換
      if (value === undefined) {
        return undefined
      }
      if (value === null) {
        return null
      }
      const newValue = parseInt(value)
      if (isNaN(newValue)) {
        return null
      }
      return newValue * 10
    },
    manToSenString (value) {
      // 千円データを万円単位に変換
      if (value === undefined) {
        return undefined
      }
      if (value === null) {
        return null
      }
      const newValue = parseInt(value)
      if (isNaN(newValue)) {
        return null
      }
      return String(newValue * 10)
    }

  },

  // 年を取得
  year (value) {
    if (value === null) {
      return null
    }

    if (typeof value === 'object' && typeof value.getFullYear === 'function') {
      return parseInt(value.getFullYear())
    } else if (typeof value === 'string' && value.length === 8) {
      return parseInt(value.substr(0, 4))
    }

    return null
  },

  // 月を取得
  month (value) {
    if (value === null) {
      return null
    }

    if (typeof value === 'object' && typeof value.getMonth === 'function') {
      return parseInt(value.getMonth() + 1)
    } else if (typeof value === 'string' && value.length === 8) {
      return parseInt(value.substr(4, 2))
    }
    return null
  },

  // 日を取得
  day (value) {
    if (value === null) {
      return null
    }

    if (typeof value === 'object' && typeof value.getDate === 'function') {
      return parseInt(value.getDate())
    } else if (typeof value === 'string' && value.length === 8) {
      return parseInt(value.substr(6, 2))
    }
    return null
  },
  setCookie (cname, cvalue, exdays) {
    var d = new Date()
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
    var expires = 'expires=' + d.toUTCString()
    document.cookie = cname + '=' + cvalue + '; ' + expires
  },
  // 日付を取得
  date (year, month, day) {
    let y = parseInt(year)
    if (isNaN(y)) {
      y = ''
    }
    let m = parseInt(month)
    if (isNaN(m)) {
      m = ''
    }
    let d = parseInt(day)
    if (isNaN(d)) {
      d = ''
    }
    return ('0000' + y).slice(-4) + ('00' + m).slice(-2) + ('00' + d).slice(-2)
  },
  // 日付を月増加
  addMonth (dateString, month) {
    if (this.isEmptyOrUndef(dateString) || this.isEmptyOrUndef(month)) {
      return null
    }

    var d = new Date(this.year(dateString), this.month(dateString), this.day(dateString))
    d.setMonth(d.getMonth() + month)
    return this.date(d.getFullYear(), d.getMonth(), d.getDay())
  },

  ym: {
    // 年を取得
    year (value) {
      if (value === null) {
        return null
      }

      if (typeof value === 'object' && typeof value.getFullYear === 'function') {
        return parseInt(value.getFullYear())
      } else if (typeof value === 'string' && value.length === 6) {
        return parseInt(value.substr(0, 4))
      }

      return null
    },

    // 月を取得
    month (value) {
      if (value === null) {
        return null
      }

      if (typeof value === 'object' && typeof value.getMonth === 'function') {
        return parseInt(value.getMonth())
      } else if (typeof value === 'string' && value.length === 6) {
        return parseInt(value.substr(4, 2))
      }

      return null
    },

    // 日付を取得
    date (year, month) {
      let y = parseInt(year)
      if (isNaN(y)) {
        y = ''
      }
      let m = parseInt(month)
      if (isNaN(m)) {
        m = ''
      }
      return ('0000' + y).slice(-4) + ('00' + m).slice(-2)
    }
  },

  post: {
  // 郵便 区番号を取得
    district (value) {
      if (typeof value === 'string' && value.length === 7) {
        return value.substr(0, 3)
      }
      return ''
    },

    // 郵便 町域番号を取得
    townArea (value) {
      if (typeof value === 'string' && value.length === 7) {
        return value.substr(3, 4)
      }
      return ''
    },

    // 郵便番号を取得
    post (district, townArea) {
      if (district && townArea) {
        return district + townArea
      }
      return ''
    }
  },

  floorTen (value) {
    if (isNaN(value)) {
      return value
    }
    return Math.floor(parseInt(value) / 10) * 10
  },
  betweenNum (value, min, max) {
    if (value > max) {
      return max
    }
    if (value < min) {
      return min
    }
    return value
  },

  // 遅延実行
  debounce (fn, delay) {
    var timeoutID = null
    return function () {
      clearTimeout(timeoutID)
      var args = arguments
      var that = this
      timeoutID = setTimeout(function () {
        fn.apply(that, args)
      }, delay)
    }
  },

  // APIエラー処理
  api: {
    start (action, sync) {
      // 重複実行しない
      if (sync[action].doing && (!sync[action].time || sync[action].time + 10000 > Date.now())) {
        console.warn('Duplicate execution', action)
        return false
      }

      // 開始
      const newSync = {doing: true, time: Date.now(), status: null}
      this.setSync(action, newSync)

      // エラークリア
      // store.commit(MUTATIONS.API_CLEAR_ERROR)

      return true
    },
    end (action, sync) {
      const newSync = cloneDeep(sync[action])
      newSync.doing = false

      // エラーが登録されていない時は成功とする
      if (newSync.status === undefined || newSync.status === null) {
        newSync.status = 200
      }

      // 終了
      this.setSync(action, newSync)
    },
    error (action, sync, error) {
      if (error.response) {
        if (error.response.status === 403) {
          store.dispatch(ACTIONS.ERROR_OPEN, ['ただいま大変混み合っております。', '誠に申し訳ありませんが、お問い合わせ窓口にお問い合わせください。'])
          error = {
            response: {
              status: 403,
              data: {
                result: []
              }
            }
          }
        }
        if (error.response.status > 500) {
          if (!error.response.data.result) {
            store.dispatch(ACTIONS.ERROR_OPEN, ['ただいま大変混み合っております。', '誠に申し訳ありませんが、お問い合わせ窓口にお問い合わせください。'])
          } else {
            store.dispatch(ACTIONS.ERROR_OPEN, ['ただいま大変混み合っております。', '誠に申し訳ありませんが、お問い合わせ窓口にお問い合わせください。(' + error.response.data.result[0].discription + ')'])
          }
          error = {
            response: {
              status: 500,
              data: {
                result: []
              }
            }
          }
        }
      } else if (error.message && (error.message.indexOf('Network Error') >= 0 || error.message.indexOf('timeout') >= 0)) {
        // timeoutなど、サーバーに接続できない通信障害
        console.error(`${action}:`, error)
        store.dispatch(ACTIONS.ERROR_OPEN, ['通信エラーが発生しました。', '誠に申し訳ありませんが、しばらく時間をおいてお試しください。'])
        error = {
          response: {
            status: 400,
            data: {
              result: []
            }
          }
        }
      } else if (!error.response) {
        // responseが無いときは、通信ではなくJavaScriptでエラー（実装不備）
        console.error(`${action}:`, error)
        store.dispatch(ACTIONS.ERROR_OPEN, ['ただいま大変混み合っております。', '誠に申しわけありませんが、しばらくたってから再度入力願います。', `Error action: ${action}:`, error.stack])
        error = {
          response: {
            status: 400,
            data: {
              result: []
            }
          }
        }
      } else if (!error.response.data && !error.response.data.result) {
        // error.response.data.resultが無いときは、通信やサーバーでエラー
        console.error(`${action}:`, error)
        store.dispatch(ACTIONS.ERROR_OPEN, ['ただいま大変混み合っております。', '誠に申しわけありませんが、しばらくたってから再度入力願います。'])
        error = {
          response: {
            status: 400,
            data: {
              result: []
            }
          }
        }
      }

      // エラーをstoreに上書き
      const newSync = cloneDeep(sync[action])
      newSync.status = error.response.status || 400
      this.setSync(action, newSync)
      // APIエラーを登録
      store.commit(MUTATIONS.API_ERROR, error.response)
    },
    setSync (action, sync) {
      if (action.indexOf('MYAPP_') === 0) {
        store.commit(MUTATIONS.MYAPP_SET_SYNC, {[action]: sync})
      }
    }
  },
  canRakutenId () {
    const url = window.location.href
    if (url.indexOf('rakuten-sonpo.co.jp') !== -1) {
      return true
    }
    return true
  },
  multipart (response) {
    // UploadのResponseに特化
    var array = response.split('\r\n')
    var state = false
    var data = ''
    for (let i = 0; i < array.length; i++) {
      if (array[i] === '') {
        // 最初の空白はHeaderと分解する。
        state = true
      }

      if (array[i].indexOf('--') === 0) {
        // 最初の空白はHeaderと分解する。本来はboundaryも含める。
        state = false
      }
      if (state) {
        data = data + array[i]
      }
    }
    return JSON.parse(data)
  },
  gotoError (errorCode, errorMessage) {
    const isMobile = store.state.configs.isMobile
    if (isMobile.any === true) { //  && currentPath.indexOf('/sp') !== 0
      router.push({name: 'ErrorSp', params: {code: errorCode, message: errorMessage}})
    } else {
      router.push({name: 'Error', params: {code: errorCode, message: errorMessage}})
    }
  },
  isZenKatakana (str) {
    if ((str === undefined) || (str === null) || (str === '')) {
      return true
    }
    console.log('321')
    str = (str == null) ? '' : str
    if (str.match(/^[\u30a1-\u30f6\s]*$/)) {
      return true
    } else {
      return false
    }
  },
  isZenKatakana2 (str) {
    if ((str === undefined) || (str === null) || (str === '')) {
      return true
    }
    str = (str == null) ? '' : str
    console.log('123')
    if (str.match(/^[（）ー\u30a1-\u30f6\s]*$/)) {
      return true
    } else {
      return false
    }
  },
  isZenKanji (str) {
    if ((str === undefined) || (str === null) || (str === '')) {
      return true
    }
    var unicode = str.charCodeAt(0)
    if ((unicode >= 0x4e00 && unicode <= 0x9fcf) || (unicode >= 0x3400 && unicode <= 0x4dbf) ||
    (unicode >= 0x20000 && unicode <= 0x2a6df) ||
    (unicode >= 0xf900 && unicode <= 0xfadf) || (unicode >= 0x2f800 && unicode <= 0x2fa1f)) {
      return true
    } else {
      return false
    }
  },
  isIncludeZenKanji (str) {
    if ((str === undefined) || (str === null) || (str === '')) {
      return false
    }
    for (let i = 0; i < str.length; i++) {
      var unicode = str.charCodeAt(i)
      if ((unicode >= 0x4e00 && unicode <= 0x9fcf) || (unicode >= 0x3400 && unicode <= 0x4dbf) ||
      (unicode >= 0x20000 && unicode <= 0x2a6df) ||
      (unicode >= 0xf900 && unicode <= 0xfadf) || (unicode >= 0x2f800 && unicode <= 0x2fa1f)) {
        return true
      }
    }
    return false
  },
  isSuujiKana (str) {
    if ((str === undefined) || (str === null) || (str === '')) {
      return true
    }
    str = (str == null) ? '' : str
    if (str.match(/^[\u30a1-\u30f6\s0-9]*$/)) {
      return true
    } else {
      return false
    }
  },
  getAcceptLimitedRules (currentListData) {
    let acceptLimitRules = []
    currentListData.forEach((item, index) => {
      if (item.acceptLimitId === undefined || this.isEmpty(item.acceptLimitId)) {
        // 処理なし
      } else {
        // acceptLimitRulesへの制限コードを追加する
        acceptLimitRules.push(item.acceptLimitId)
      }
    })
    return acceptLimitRules
  },
  isListEqual (listA, listB) {
    let diff = 0
    let rulesSortedA = listA.sort()
    let rulesSortedB = listB.sort()
    if (listA.length !== listB.length) {
      return false
    }
    rulesSortedA.forEach((item, index) => {
      if (item !== rulesSortedB[index]) {
        diff = diff + 1
      }
    })
    if (diff === 0) {
      return true
    } else {
      return false
    }
  },
  getCorporateKanji (key) {
    const corporateCodeKanjiOpts = {
      '01': '株式会社',
      '02': '有限会社',
      '03': '合名会社',
      '04': '合資会社',
      '05': '相互会社',
      '06': '信用金庫',
      '07': '社団法人',
      '08': '財団法人',
      '09': '福祉法人',
      '10': '宗教法人',
      '11': '事務所',
      '12': '医療法人',
      '13': '学校法人',
      '14': '協業組合',
      '15': '組合',
      '16': '協同組合',
      '17': '共済組合',
      '18': '労働組合',
      '19': '企業組合',
      '20': '健康保険組合',
      '21': '信用組合',
      '22': '社会福祉法人',
      '23': '法人会',
      '24': '管理組合'
    }
    if ((key === undefined) || (key === null) || (key === '')) {
      return ''
    }
    return corporateCodeKanjiOpts[key]
  },
  getCorporateKanaBefore (key) {
    const corporateKanaBeforeOpts = {
      '01': 'カ）',
      '02': 'ユ）',
      '03': 'メ）',
      '04': 'シ）',
      '05': 'ソ）',
      '06': 'シンキン）',
      '07': 'シヤ）',
      '08': 'ザイ）',
      '09': 'フク）',
      '10': 'シユウ）',
      '11': '',
      '12': 'イ）',
      '13': 'ガク）',
      '14': '',
      '15': '',
      '16': 'キヨウクミ）',
      '17': 'キヨウサイ）',
      '18': 'ロウクミ）',
      '19': '',
      '20': 'ケンポ）',
      '21': 'シンクミ）',
      '22': 'フク）',
      '23': '',
      '24': ''
    }
    if ((key === undefined) || (key === null) || (key === '')) {
      return ''
    }
    return corporateKanaBeforeOpts[key]
  },
  getCorporateKanaAfter (key) {
    const corporateKanaAfterOpts = {
      '01': '（カ',
      '02': '（ユ',
      '03': '（メ',
      '04': '（シ',
      '05': '（ソ',
      '06': '（シンキン',
      '07': '（シヤ',
      '08': '（ザイ',
      '09': '（フク',
      '10': '（シユウ',
      '11': '',
      '12': '（イ',
      '13': '（ガク',
      '14': '',
      '15': '',
      '16': '（キヨウクミ',
      '17': '（キヨウサイ',
      '18': '（ロウクミ',
      '19': '',
      '20': '（ケンポ',
      '21': '（シンクミ',
      '22': '（フク',
      '23': '',
      '24': ''
    }
    if ((key === undefined) || (key === null) || (key === '')) {
      return ''
    }
    return corporateKanaAfterOpts[key]
  },
  getServerUrl () {
    let FullUrl = window.location.href
    console.log('FullUrl=' + FullUrl)
    let pos = FullUrl.indexOf('/#')
    let returnUrl = FullUrl.substring(0, pos)
    if (returnUrl.indexOf('localhost') > 0) {
      returnUrl = 'http://localhost:8080/' + process.env.CONTEXT
      console.log('returnUrl=' + returnUrl)
      return returnUrl
    } else {
      if (returnUrl.indexOf(process.env.CONTEXT) < 0) {
        returnUrl = returnUrl + '/' + process.env.CONTEXT
      }
      return returnUrl
    }
  }
}
