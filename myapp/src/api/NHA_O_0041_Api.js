import Api from '@/api/api'

// 見積連番
export const NHA_O_0041_API = {
  // readEntryNoList
  readEntryNoList (request) {
    return Api.instance().post('/readEntryNoList', request)
  }
}
