import Api from '@/api/api'

// NHA_O_0010_ファイルアップロード
export const NHA_O_0010_API = {
  // imageUpload
  imageUpload (request) {
    return Api.instance().post('/imageUpload', request, {headers: {'Content-Type': 'multipart/form-data', 'Accept': 'multipart/form-data'}})
  },
  // imageDelete
  fileDelete (request) {
    return Api.instance().post('/imageDelete', request)
  },
  // imageDeleteArray
  fileDeleteArray (request) {
    return Api.instance().post('/imageDeleteArray', request)
  }
}
