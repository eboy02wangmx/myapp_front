import Api from '@/api/api'

// NHA_O_0027_お知らせ情報検索
export const NHA_O_0027_API = {
  // readNoticeList
  readNoticeList () {
    return Api.instance().get('/readNoticeList')
  }
}
