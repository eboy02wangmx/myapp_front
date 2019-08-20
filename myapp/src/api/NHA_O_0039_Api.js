import Api from '@/api/api'

// 引受制限判定
export const NHA_O_0039_API = {
  acceptLimitCheck (request) {
    return Api.instance().post('/acceptLimitCheck', request)
  },
  acceptLimitUpdateItem (request) {
    return Api.instance().post('/acceptLimitUpdateItem', request)
  },
  acceptLimitClearItem (request) {
    return Api.instance().post('/acceptLimitClearItem', request)
  }
}
