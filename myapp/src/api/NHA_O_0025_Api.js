import Api from '@/api/api'

// NHA_O_0025_評価額計算
export const NHA_O_0025_API = {
  // EvaluationValueCalculation
  getEvaluationValueCalculation (request) {
    return Api.instanceMock().post('/evaluation/ha', request)
  },

  // EvaluationEarthquake
  getEvaluationEarthquake (request) {
    return Api.instanceMock().post('/evaluation-qua/ha', request)
  }
}
