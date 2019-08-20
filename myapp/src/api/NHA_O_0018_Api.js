import Api from '@/api/api'

// NHA_O_0018_申込一時保存地震
export const NHA_O_0018_API = {
  // EntrySaveEarthquake
  getEntrySaveEarthquakeAuto (request) {
    return Api.instance().post('/entrySaveEarthquake/auto', request)
  }
}
