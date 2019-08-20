import Api from '@/api/api'

// NHA_O_0012_審査依頼
export const NHA_O_0012_API = {
  // ReviewRequest
  getReviewRequest (request) {
    return Api.instance().post('/reviewRequest', request)
  }
}
