
import Api from '@/api/api'

// NHA_O_0007_保険料確認
export const NHA_O_0007_API = {
  // InsPreCon
  getInsPreCon (request) {
    return Api.instance().post('/confirmFee', request)
  }
}
