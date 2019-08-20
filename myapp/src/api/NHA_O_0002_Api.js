import Api from '@/api/api'

// NHA_O_0002_試算
export const NHA_O_0002_API = {
  // HaEstimate
  getEstimateHa (request) {
    return Api.instance().post('/estimate/ha', request)
  }
}
