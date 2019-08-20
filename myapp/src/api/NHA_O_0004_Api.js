import Api from '@/api/api'

// NHA_O_0004_入力チェック
export const NHA_O_0004_API = {
  // TopMenuCheck
  getTopMenuCheck (request) { return Api.instance().post('/topMenuCheck', request) },
  // TopMenuCheckAgent
  getTopMenuCheckAgent (request) { return Api.instance().post('/topMenuCheckAgent', request) },
  // MailConfirmCheck
  getMailConfirmCheck (request) { return Api.instance().post('/MailConfirmCheck', request) },
  // BuiInfCheck
  getBuiInfCheck (request) { return Api.instance().post('/buiInfCheck', request) },
  // InsAmoCheck
  getInsAmoCheck (request) { return Api.instance().post('/insAmoCheck', request) },
  // EarInsCheck
  getEarInsCheck (request) { return Api.instance().post('/earInsCheck', request) },
  // TriCalCheck
  getTriCalCheck (request) { return Api.instance().post('/triCalCheck', request) },
  // TemSavCheck
  getTemSavCheck (request) { return Api.instance().post('/temSavCheck', request) },
  // AppReqCheck
  getAppReqCheck (request) { return Api.instance().post('/appReqCheck', request) },
  // AppInfCheck
  getAppInfCheck (request) { return Api.instance().post('/appInfCheck', request) },
  // ConConCheck
  getConConCheck (request) { return Api.instance().post('/conConCheck', request) },
  // ReqExaCheck
  getReqExaCheck (request) { return Api.instance().post('/reqExaCheck', request) },
  // ConConAftCheck
  getConConAftCheck (request) { return Api.instance().post('/conConAftCheck', request) }
}
