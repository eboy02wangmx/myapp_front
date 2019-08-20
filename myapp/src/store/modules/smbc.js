import {MUTATIONS} from '../mutation-types'
import {ACTIONS} from '../action-types'
import axios from 'axios'
import util from '@/util'

export default {
  state: {
    token: null,
    sync: {
      [ACTIONS.SMBC_GET_TOKEN]: { doing: false }
    }
  },
  actions: {
    // トークン取得処理
    async [ACTIONS.SMBC_GET_TOKEN] ({state, dispatch, commit}, data) {
      const myAction = ACTIONS.SMBC_GET_TOKEN
      // const SMBC_TEST_FLAG = true // TEST環境への接続の場合：true、本番の場合:false
      var smbcApiPath = 'https://www.paymentstation.jp/cooperationtest/sf/cd/tokenization/tokenization.do'
      if (process.env.SMBC_PROD) {
        smbcApiPath = 'https://www.paymentstation.jp/cooperation/sf/cd/tokenization/tokenization.do'
      }
      const querystring = require('querystring')
      let params = {
        shop_cd: data.configs.shopCd,
        syuno_co_cd: data.configs.syuno_co_cd,
        token_api_key: data.configs.tokenApiKey,
        card_no: data.cardNo,
        token_mode: 'S',
        card_yukokigen: data.cardYukokigen
      }

      // 読込画面 開始
      commit(MUTATIONS.UI_SET_LOADING_ON)

      axios.post(smbcApiPath,
        querystring.stringify(params),
        {headers:
          {'Content-Type': 'application/x-www-form-urlencoded'}
        }
      )
        .then(function (response) {
          if (response.data.token) {
            commit(MUTATIONS.SMBC_GET_TOKEN, response.data.token)
          } else {
            dispatch(ACTIONS.ERROR_OPEN, 'システムエラーが発生しました。誠に申し訳ありませんが、お問い合わせ窓口にお問い合わせください。現時点では、保険契約は成立しておりません。')
          }
        })
        .catch(error => {
          // 読込画面 終了(正常の場合は次のAPIで閉じるので、Error時だけでOK)
          commit(MUTATIONS.UI_SET_LOADING_OFF)
          util.api.error(myAction, state.sync, error)
        })
        .finally(() => {
          util.api.end(myAction, state.sync)
        })
    }
  },
  mutations: {
    [MUTATIONS.SMBC_GET_TOKEN] (state, token) {
      state.token = token
    }
  }
}
