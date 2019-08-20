import Api from '@/api/api'

// NHA_O_0024_申込一時保存申込依頼
export const NHA_O_0024_API = {
  // EntrySaveEntryRequest
  getEntrySaveEntryRequest (request) {
    return Api.instance().post('/entrySaveEntryRequest', request)
  },
  getEntrySaveEntryRequestAuto (request) { // autoは今は無いが念のため追記
    return Api.instance().post('/entrySaveEntryRequest/auto', request)
  }
}
