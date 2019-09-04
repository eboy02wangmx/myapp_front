import Api from '@/api/api'

// NHA_O_0001_ユーザーログイン
export const NHA_O_0112_API = {
  // ReadEntryTempSave
  userinsert (request) {
    return Api.instance().post('/userInsert', request)
  }
}
