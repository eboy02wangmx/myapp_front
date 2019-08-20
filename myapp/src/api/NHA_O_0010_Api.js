import Api from '@/api/api'

// NHA_O_0010_ファイルアップロード
export const NHA_O_0010_API = {
  // FileUpload
  getFileUpload (request) {
    return Api.instance().post('/fileupload', request, {headers: {'Content-Type': 'multipart/form-data', 'Accept': 'multipart/form-data'}})
  },
  // FileDelete
  getFileDelete (request) {
    return Api.instance().post('/fileDelete', request)
  },
  // FileDeleteArray
  getFileDeleteArray (request) {
    return Api.instance().post('/fileDeleteArray', request)
  }
}
