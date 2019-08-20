import Api from '@/api/api'

// NHA_O_0030_代理店分担入力
export const NHA_O_0030_API = {
  agentShareInputCompleted (request) {
    return Api.instance().post('/entrySaveDaribnt', request)
  }
}
