import Api from '@/api/api'

// NHA_O_0015_Config
export const NHA_O_0015_API = {
  // Config
  getConfig (request) {
    return Api.instance().get('/config', request)
  }
}
