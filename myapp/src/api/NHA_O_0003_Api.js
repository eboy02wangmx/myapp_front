import Api from '@/api/api'

// NHA_O_0003_見積書作成
export const NHA_O_0003_API = {
  estimationCreate (request) {
    return Api.instance().post('/estimationCreate', request)
  }
}
