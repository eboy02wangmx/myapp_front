import Api from '@/api/api'

// NHA_O_0019_申込一時保存試算
export const NHA_O_0019_API = {
  // EntrySaveEstimate(一時保存)
  getEntrySaveEstimate (request) {
    return Api.instance().post('/entrySaveEstimate', request)
  },
  getEntrySaveEstimateAuto (request) {
    return Api.instance().post('/entrySaveEstimate/auto', request)
  }
}
