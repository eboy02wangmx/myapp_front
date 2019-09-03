import Api from '@/api/api'

export const NHA_O_0154_API = {
  // ConfirmData
  riyoEff (request) {
    return Api.instance().post('/riyoEff', request)
  }

}
