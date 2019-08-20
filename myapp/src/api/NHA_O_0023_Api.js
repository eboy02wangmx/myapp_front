import Api from '@/api/api'

// NHA_O_0023_申込一時保存内容確認審査後
export const NHA_O_0023_API = {
  // EntrySaveCheckAfter
  getEntrySaveCheckAfter (request) {
    return Api.instance().post('/entrySaveCheckAfter', request)
  },
  getEntrySaveCheckAfterAuto (request) {
    return Api.instance().post('/entrySaveCheckAfter/auto', request)
  }
}
