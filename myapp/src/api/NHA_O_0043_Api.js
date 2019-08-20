import Api from '@/api/api'

// NHA_O_0043_申込依頼口振
export const NHA_O_0043_API = {
  // entryRequestAccount
  entryRequestAccount (request) {
    return Api.instance().post('/entryRequestAccount', request)
  }
}
