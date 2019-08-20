import store from '@/store'
import axios from 'axios'
import mock from '@/api/mock'
import {responses} from '@/api/mock/responses'
import util from '@/util'

export default {
  instance () {
    var api = axios.create({
      baseURL: util.getServerUrl() + '/api/',
      withCredentials: true,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'X-CSRF-TOKEN': store.state.configs.csrfToken
      },
      timeout: 60000
    })

    if (mock && process.env.MOCK) {
      mock(api, responses)
    }
    return api
  },
  instanceDownload () {
    var api = axios.create({
      baseURL: util.getServerUrl() + '/api/',
      withCredentials: true,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': store.state.configs.csrfToken
      },
      responseType: 'arraybuffer',
      timeout: 120000
    })
    if (mock && process.env.MOCK) {
      mock(api, responses)
    }
    return api
  },
  instanceMock () {
    var api = axios.create({
      baseURL: process.env.SERVER_URL + '/api/',
      withCredentials: true,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': store.state.configs.csrfToken
      },
      timeout: 60000
    })

    if (mock && true) {
      mock(api, responses)
    }
    return api
  }
}
