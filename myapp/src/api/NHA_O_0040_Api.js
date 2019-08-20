import Api from '@/api/api'

// NHA_O_0040_お知らせ情報検索
export const NHA_O_0040_API = {
  // readNoticeList
  readNoticeList (request) {
    return Api.instance().post('/readNoticeList', request)
  }
}
