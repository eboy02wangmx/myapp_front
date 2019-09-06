import Api from '@/api/api'

// NHA_O_0001_ユーザーログイン
export const NHA_O_0113_API = {
  // ReadEntryTempSave
  userdelete (request) {
    return Api.instance().post('/userDelete', request)
  }
}
