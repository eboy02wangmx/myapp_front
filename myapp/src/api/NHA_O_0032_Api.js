import Api from '@/api/api'

// NHA_O_0032_明記物件明細入力
export const NHA_O_0032_API = {
  // retrieveMeikiArticle
  retrieveMeikiArticle (request) {
    return Api.instance().post('/retrieveMeikiArticle', request)
  },
  // entrySaveMeikiArticle
  entrySaveMeikiArticle (request) {
    return Api.instance().post('/entrySaveMeikiArticle', request)
  }
}
