import Api from '@/api/api'

export const NHA_O_0603_API = {
  add (request) {
    return Api.instance().post('/contract/add', request)
  }
}
