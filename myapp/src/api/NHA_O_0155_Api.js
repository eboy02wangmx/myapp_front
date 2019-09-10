import Api from '@/api/api'

export const NHA_O_0155_API = {
  // ConfirmData
  getUserInfo (request) {
    return Api.instance().post('/userInfo', request)
  }

}
