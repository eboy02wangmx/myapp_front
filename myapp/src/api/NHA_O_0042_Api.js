import Api from '@/api/api'

// NHA_O_0042_申込一時保存口座情報
export const NHA_O_0042_API = {
  // entrySaveTop
  entrySaveTop (request) {
    return Api.instance().post('/entrySaveTop/auto', request)
  }
}
