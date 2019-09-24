import Api from '@/api/api'

export const NHA_O_0606_API = {
  disabled (request) {
    return Api.instance().post('/contract/disabled', request)
  }
}
