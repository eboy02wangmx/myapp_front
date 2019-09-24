import Api from '@/api/api'

export const NHA_O_0601_API = {
  search (request) {
    return Api.instance().post('/contract', request)
  }
}
