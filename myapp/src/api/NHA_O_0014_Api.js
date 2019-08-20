import Api from '@/api/api'

// NHA_O_0014_採番
export const NHA_O_0014_API = {
  // Numbering
  getNumbering () {
    return Api.instance().get('/numbering')
  }
}
