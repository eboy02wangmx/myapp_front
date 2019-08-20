import Api from '@/api/api'

// NHA_O_0099_申込一時保存他契約有無確認
export const NHA_O_0099_API = {
  // ConfirmData
  confirmData (request) {
    return Api.instance().post('/confirmData', request)
  }
}
