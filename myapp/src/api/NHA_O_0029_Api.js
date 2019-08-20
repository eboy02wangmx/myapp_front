import Api from '@/api/api'

// NHA_O_0029_代理店特約取得
export const NHA_O_0029_API = {
  readTokuList (request) {
    return Api.instance().post('/readTokuList', request)
  }
}
