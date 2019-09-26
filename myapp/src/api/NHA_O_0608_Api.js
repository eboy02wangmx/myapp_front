import Api from '@/api/api'

export const NHA_O_0608_API = {
  editDomain (request) {
    return Api.instance().post('/album/domain', request)
  }
}
