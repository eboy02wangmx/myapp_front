import Api from '@/api/api'

// NHA_O_0001_ユーザーログイン
export const NHA_O_0111_API = {
  // ReadEntryTempSave
  usercreate (request) {
    return Api.instance().post('/userCreate', request)
  }
}
