import Api from '@/api/api'

// NHA_O_0020_申込一時保存申込情報
export const NHA_O_0020_API = {
  // EntrySaveEntryInfo
  getEntrySaveEntryInfo (request) {
    return Api.instance().post('/entrySaveEntryInfo', request)
  },
  getEntrySaveEntryInfoAuto (request) {
    return Api.instance().post('/entrySaveEntryInfo/auto', request)
  }
}
