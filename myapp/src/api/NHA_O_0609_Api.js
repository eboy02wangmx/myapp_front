import Api from '@/api/api'

export const NHA_O_0609_API = {
  editDomain (request) {
    return Api.instance().post('/images/remove', request)
  }
}
