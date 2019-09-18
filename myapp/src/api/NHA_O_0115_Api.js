import Api from '@/api/api'

// NHA_O_0001_ユーザーログイン
export const NHA_O_0115_API = {
  // ReadEntryTempSave
  insertsetsumei (request) {
    return Api.instance().post('/insertSetsumei', request)
  }
}
