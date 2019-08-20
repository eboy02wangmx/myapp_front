import Api from '@/api/api'

// NHA_O_0017_申込一時保存保険金額
export const NHA_O_0017_API = {
  // EntrySaveInsAmount
  getEntrySaveInsAmountAuto (request) {
    return Api.instance().post('/entrySaveInsAmount/auto', request)
  }
}
