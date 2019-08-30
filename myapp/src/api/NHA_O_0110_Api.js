import Api from '@/api/api'

// NHA_O_0001_ユーザーログイン
export const NHA_O_0110_API = {
  // ReadEntryTempSave
  getUserkanriInfo (request) {
    return Api.instance().post('/userKanri', request)
  }
}
