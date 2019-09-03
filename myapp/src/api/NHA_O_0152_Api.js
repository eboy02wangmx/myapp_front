import Api from '@/api/api'

export const NHA_O_0152_API = {
  // ConfirmData
  riyo (request) {
    return Api.instance().post('/riyo', request)
  }

}
