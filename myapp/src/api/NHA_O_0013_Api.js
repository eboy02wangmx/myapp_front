import Api from '@/api/api'

// NHA_O_0013_申込依頼№再通知処理
export const NHA_O_0013_API = {
  // entryNoRenotification
  entryNoRenotification (request) {
    return Api.instance().post('/entryNoRenotification', request)
  }
}
