import Api from '@/api/api'

// NHA_O_0031_募集人ID検索
export const NHA_O_0031_API = {
  readBosyuninName (request) {
    return Api.instance().post('/readBosyuninName', request)
  }
}
