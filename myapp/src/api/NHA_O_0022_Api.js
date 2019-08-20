import Api from '@/api/api'

// NHA_O_0022_申込一時保存審査依頼
export const NHA_O_0022_API = {
  // EntrySaveReviewRequest
  getEntrySaveReviewRequest (request) {
    return Api.instance().post('/entrySaveReviewRequest', request)
  },
  getEntrySaveReviewRequestAuto (request) {
    return Api.instance().post('/entrySaveReviewRequest/auto', request)
  }
}
