import Api from '@/api/api'

export const NHA_O_0605_API = {
  remove (request) {
    return Api.instance().post('/contract/remove', request)
  }
}
