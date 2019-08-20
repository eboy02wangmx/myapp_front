import Api from '@/api/api'

// 代理店コード絞り
export const NHA_O_0038_API = {
  // otherContractInfo
  lrisDariCdList (request) {
    return Api.instance().post('/lrisDariCdList', request)
  },
  lrisDariCdListNew (request) {
    return Api.instance().post('/lrisDariCdListNew', request)
  }
}
