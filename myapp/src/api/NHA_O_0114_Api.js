import Api from '@/api/api'

// NHA_O_0001_ユーザーログイン
export const NHA_O_0114_API = {
  // ReadEntryTempSave
  search (request) {
    return Api.instance().post('/images', request)
  }
}
