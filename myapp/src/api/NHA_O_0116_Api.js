import Api from '@/api/api'

// NHA_O_0001_ユーザーログイン
export const NHA_O_0116_API = {
  // ReadEntryTempSave
  kengenhenko (request) {
    return Api.instance().post('/yukokbnHenko', request)
  }
}
