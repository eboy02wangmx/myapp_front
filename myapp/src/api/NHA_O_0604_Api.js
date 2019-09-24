import Api from '@/api/api'

export const NHA_O_0604_API = {
  edit (request) {
    return Api.instance().post('/contract/edit', request)
  }
}
