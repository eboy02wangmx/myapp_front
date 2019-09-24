import Api from '@/api/api'

export const NHA_O_0602_API = {
  get (request) {
    return Api.instance().post('/contract/get', request)
  }
}
