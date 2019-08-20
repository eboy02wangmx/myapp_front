import Api from '@/api/api'

// NHA_O_0016_申込一時保存建物情報
export const NHA_O_0016_API = {
  // EntrySaveBuilding
  getEntrySaveBuildingAuto (request) {
    return Api.instance().post('/entrySaveBuilding/auto', request)
  }
}
