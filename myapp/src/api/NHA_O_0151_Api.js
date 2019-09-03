import Api from '@/api/api'

export const NHA_O_0151_API = {
  // ConfirmData
  albumCreate (request) {
    return Api.instance().post('/albumCreaet', request)
  }

}
