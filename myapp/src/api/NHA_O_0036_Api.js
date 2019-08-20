import Api from '@/api/api'

// 申込一時保存他契約情報
export const NHA_O_0036_API = {
  // otherContractInfo
  otherContractInfo (request) {
    return Api.instance().post('/otherContractInfo', request)
  }
}
