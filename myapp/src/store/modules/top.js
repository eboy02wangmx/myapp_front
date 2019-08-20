import {ACTIONS} from '../action-types'
import {MUTATIONS} from '../mutation-types'
import {NHA_O_0040_API} from '@/api/NHA_O_0040_Api'
import util from '@/util'

export default {
  state: {
    // お知らせ一覧
    noticeList: null,

    // ACTIONSの同期情報
    sync: {
      [ACTIONS.READ_NOTICE_LIST]: { doing: false }
    }
  },
  actions: {
    /**
     * お知らせ一覧を取得する
     */
    async [ACTIONS.READ_NOTICE_LIST] ({ state, commit }, request) {
      const myAction = ACTIONS.READ_NOTICE_LIST

      // 開始
      if (!util.api.start(myAction, state.sync)) {
        return
      }
      // commit(MUTATIONS.UI_SET_LOADING_ON)
      // 実行
      await NHA_O_0040_API.readNoticeList(request)
        .then(response => {
          commit(MUTATIONS.READ_NOTICE_LIST, response.data.result.list)
        })
        .catch(error => util.api.error(myAction, state.sync, error))
        .finally(() => util.api.end(myAction, state.sync))
      // commit(MUTATIONS.UI_SET_LOADING_OFF)
    }
  },
  mutations: {
    [MUTATIONS.READ_NOTICE_LIST] (state, data) {
      state.noticeList = data
    }
  }
}
