import Api from '@/api/api'

// NHA_O_0001_ユーザーログイン
export const NHA_O_0001_API = {
  // ReadEntryTempSave
  userLogin (request) {
    return Api.instance().post('/login', request)
  }
}
