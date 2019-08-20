import Api from '@/api/api'

// NHA_O_0050_保険会社点検チェック
export const NHA_O_0050_API = {
  isShinsaCheck (request) {
    return Api.instance().post('/shinsaCheck', request)
  }
}
