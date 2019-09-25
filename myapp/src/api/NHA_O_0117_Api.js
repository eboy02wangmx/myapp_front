import Api from '@/api/api'

// NHA_O_0001_ユーザーログイン
export const NHA_O_0117_API = {
  // ReadEntryTempSave
  userPlanInfo (request) {
    return Api.instance().post('/userPlanInfo', request)
  }
}
