import Api from '@/api/api'

// NHA_O_0009_申込登録
export const NHA_O_0009_API = {
  // Registration
  getRegistration (request) {
    return Api.instance().post('/registration', request)
  }
}
