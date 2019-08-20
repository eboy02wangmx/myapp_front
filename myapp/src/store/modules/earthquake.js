import {ACTIONS} from '../action-types'
import {MUTATIONS} from '../mutation-types'
import {cloneDeep} from 'lodash'
import axios from 'axios'
import util from '@/util'

export default {
  state: {
    // 地震保険の調査情報（加入率）
    earthquakeSubscriberData: null,

    // ACTIONSの同期情報
    sync: {
      [ACTIONS.EARTHQUAKE_SUBSCRIBER]: { doing: false }
    },
    // 「ホームアシストご契約時にご用意頂きたい書類」ポップアップの「地震保険割引の確認資料」タブを表示
    showContractDocuments: false
  },
  actions: {
    /**
     * 地震保険の調査情報（加入率）
     */
    async [ACTIONS.EARTHQUAKE_SUBSCRIBER] ({ state, commit }) {
      const myAction = ACTIONS.EARTHQUAKE_SUBSCRIBER

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }
      commit(MUTATIONS.EARTHQUAKE_SET_CONTRACTDOCUMENTS, true)
      let url = '@/../static/json/EarthquakeSubscriber.json'
      if (process.env.NODE_ENV !== 'development') {
        // url = process.env.SERVER_URL + process.env.CONTEXT + '/api/EarthquakeSubscriber'
        url = util.getServerUrl() + '/api/EarthquakeSubscriber'
      }
      // 実行
      await axios.get(url)
        .then(response => {
          commit(MUTATIONS.EARTHQUAKE_SET_SUBSCRIBER, response.data)
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => util.api.end(myAction, state.sync))
    }
  },
  mutations: {
    [MUTATIONS.EARTHQUAKE_SET_SYNC] (state, sync) {
      state.sync = Object.assign(state.sync, cloneDeep(sync))
    },
    [MUTATIONS.EARTHQUAKE_SET_SUBSCRIBER] (state, data) {
      state.earthquakeSubscriberData = data
    },
    [MUTATIONS.EARTHQUAKE_SET_CONTRACTDOCUMENTS] (state, data) {
      state.showContractDocuments = data
    }
  }
}
