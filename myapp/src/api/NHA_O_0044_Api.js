import Api from '@/api/api'

// NHA_O_0044_口座検索
export const NHA_O_0044_API = {
  searchBank (request) {
    return Api.instance().post('/searchbank', request)
  },
  // 証券番号を採番
  genPolicyNo () {
    return Api.instance().post('/genPolicyNo').then((response) => {
      return Promise.resolve(response.data)
    })
  },
  // 依頼書印刷
  createPdf (request) {
    return Api.instanceDownload().post('/genPDF', request).then((response) => {
      return Promise.resolve(response.data)
    })
  },
  // 依頼書印刷
  createPdf2 (request) {
    return Api.instanceDownload().post('/genPDF', request).then((data) => {
      if ((!data) || (!data.file)) {
        console.log('isnull' + data.file)
        return
      }
      console.log('start download')
      let blob = new Blob([data])
      let fileName = '口座振替依頼書.pdf'
      if ('download' in document.createElement('a')) {
        console.log('this is not ie')
        let url = window.URL.createObjectURL(blob)
        console.log('url=' + url)
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', fileName)
        document.body.appendChild(link)
        link.click()
      } else {
        console.log('download for ie')
        navigator.msSaveBlob(blob, fileName)
      }
    })
  }
}
