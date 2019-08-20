import Api from '@/api/api'

// NHA_O_0026_住所検索
export const NHA_O_0026_API = {
  // AddSearch
  getAddressSearch (request) {
    return Api.instance().post('/addSearch', request)
  }
}
