import Api from '@/api/api'

// NHA_O_0001_申込一時保存読込
export const NHA_O_0001_API = {
  // ReadEntryTempSave
  getReadEntryTempSave (request) {
    if (request.mytoken === undefined) {
      return Api.instance().post('/readEntryTempSave', request)
    } else {
      return Api.instance().post('/readEntryTempSave/ref', request)
    }
  }
}
