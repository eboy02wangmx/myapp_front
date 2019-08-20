import Api from '@/api/api'

// NHA_O_0033_申込依頼口振
export const NHA_O_0033_API = {
  // getEntryAccountTransfer
  getEntryAccountTransfer (request) {
    return Api.instance().post('/entrySaveKoufuri', request)
  }
}
