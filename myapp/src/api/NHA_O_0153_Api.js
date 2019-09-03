import Api from '@/api/api'

export const NHA_O_0153_API = {
  // ConfirmData
  albumRemove (request) {
    return Api.instance().post('/albumRemove', request)
  }

}
