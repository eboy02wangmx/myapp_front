import Api from '@/api/api'

// 
export const NHA_O_0150_API = {
  // ConfirmData
  album (request) {
    return Api.instance().post('/album',request)
  }

}
