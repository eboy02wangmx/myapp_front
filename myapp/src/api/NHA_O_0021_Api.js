import Api from '@/api/api'

// NHA_O_0021_申込一時保存内容確認
export const NHA_O_0021_API = {
  // entrySaveMoneyCollection（支払方法）
  getEntrySaveMoneyCollection (request) {
    return Api.instance().post('/entrySaveMoneyCollection', request)
  },
  getEntrySaveMoneyCollectionAuto (request) {
    return Api.instance().post('/entrySaveMoneyCollection/auto', request)
  },
  // entrySaveEntryCheck(内容確認)
  getEntrySaveEntryCheck (request) {
    return Api.instance().post('/entrySaveEntryCheck', request)
  },
  getEntrySaveEntryCheckAuto (request) {
    return Api.instance().post('/entrySaveEntryCheck/auto', request)
  }
}
