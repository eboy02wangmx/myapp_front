
import Api from '@/api/api'

// NHA_O_0008_申込依頼
export const NHA_O_0008_API = {
  // entryRequest
  getEntryRequest (request) {
    return Api.instance().post('/entryRequest', request)
  }
}
