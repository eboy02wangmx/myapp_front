import Api from '@/api/api'

export const NHA_O_0607_API = {
  enabled (request) {
    return Api.instance().post('/contract/enabled', request)
  }
}
