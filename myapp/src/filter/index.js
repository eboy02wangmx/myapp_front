import Vue from 'vue'
import util from '@/util'

// 明記物件の詳細での保険金額フォーマットの修正 BY KYOKU
Vue.filter('THOUSANDS', (value) => {
  if (value === undefined || value === null) {
    return value
  }
  return value.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
})
Vue.filter('NUMBER', (value) => {
  if (!value) {
    return value
  }
  return value.toLocaleString()
})
Vue.filter('NUMBER2', (value) => {
  if (value === undefined || value === null) {
    return '0'
  }
  const num = parseFloat(value)
  if (isNaN(num)) {
    return '0'
  }
  if (!value) {
    return value
  }
  return value.toLocaleString()
})
Vue.filter('YEN_OR_HYPHEN', (value) => {
  if (value === undefined || value === null) {
    return '-'
  }

  const num = parseFloat(value)
  if (isNaN(num)) {
    return '-'
  }

  return value.toLocaleString() + '円'
})

Vue.filter('MILLION_YEN_OR_HYPHEN', (value) => {
  if (value === undefined || value === null) {
    return '-'
  }

  const num = parseFloat(value)
  if (isNaN(num)) {
    return '-'
  }

  return value.toLocaleString() + '万円'
})

Vue.filter('MILLION_YEN', (value) => {
  if (!value) {
    return value
  }
  const num = parseFloat(value)
  if (num < 1) {
    return (num * 10000).toLocaleString() + '円'
  } else {
    return value.toLocaleString() + '万円'
  }
})

Vue.filter('SEN_TO_MAN', (value) => {
  if (!value) {
    return value + '万円'
  } else {
    return Math.floor(value).toLocaleString() + '万円'
  }
})

Vue.filter('SEN_TO_MAN_NO_NULL', (value) => {
  if (!value) {
    return ''
  } else {
    return Math.floor(value).toLocaleString() + '万円'
  }
})

Vue.filter('LIMITED', (value) => {
  if (value === 0) {
    return '無制限'
  } else if (value > 0 && value < 10000) {
    return Math.floor(value).toLocaleString() + '万円'
  } else if (value >= 10000) {
    return Math.floor(value / 10000).toLocaleString() + '億円'
  }
  return ''
})

Vue.filter('MARU', (value) => {
  if (value === 1) {
    return '○'
  } else if (value === 2) {
    return '×'
  } else {
    return null
  }
})

Vue.filter('COPAYMENT', (value) => {
  if (value === null || value === undefined) {
    return null
  }
  if (value === 0) {
    return '自己負担額なし'
  } else {
    return '自己負担額 ' + Math.floor(value).toLocaleString() + '万円'
  }
})

Vue.filter('AREA', (value) => {
  if (value === null) {
    return null
  }
  return parseFloat(value).toFixed(3)
})

Vue.filter('EVALAUTION_METHOD', (value) => {
  // 評価法（新築価格がわかるかどうかで判断）
  if (value === 1) {
    // わかるの場合、年次取得法
    return '取得年次法（建築年月と建築価額から評価）'
  } else if (value === 2) {
    // わからないの場合、概観法
    return '概観法（面積と建築費単価から評価）'
  } else {
    return 'その他評価法'
  }
})

Vue.filter('DISASTEREXPENCESLIMITED', (value) => {
  // 災害時諸費用支払限度額を数字に変換
  switch (value) {
    case 1:
      value = 500 + '万円'
      break
    case 2:
      value = 100 + '万円'
      break
    case 3:
      value = 200 + '万円'
      break
    case 4:
      value = 300 + '万円'
      break
    case 5:
      value = 400 + '万円'
      break
  }
  return value
})

Vue.filter('SELF_SPECIFIC', (value) => {
  if (value === 1) {
    return '自己'
  } else if (value === 2) {
    return '特定'
  } else if (value === 9) {
    return '以外'
  } else {
    return null
  }
})

Vue.filter('AGREE_TYPE', (value) => {
  if (value === 1) {
    return '個人'
  } else if (value === 2) {
    return '法人'
  } else {
    return null
  }
})
Vue.filter('HAVE_NO', (value) => {
  if (value === 1) {
    return 'あり'
  } else if (value === 2) {
    return 'なし'
  } else {
    return 'なし'
  }
})
Vue.filter('NEED_NO', (value) => {
  if (value === 1) {
    return '要'
  } else if (value === 2) {
    return '不要'
  } else {
    return '不要'
  }
})
Vue.filter('IRAISYO_FUYO', (value) => {
  if (value === 1) {
    return '省略'
  } else if (value === 2) {
    return '不省略'
  } else {
    return null
  }
})
Vue.filter('CORPORATE_CODE', (value) => {
  const corporateCodeOpts = {
    '01': '株式会社',
    '02': '有限会社',
    '03': '合名会社',
    '04': '合資会社',
    '05': '相互会社',
    '06': '信用金庫',
    '07': '社団法人',
    '08': '財団法人',
    '09': '福祉法人',
    '10': '宗教法人',
    '11': '事務所',
    '12': '医療法人',
    '13': '学校法人',
    '14': '協業組合',
    '15': '組合',
    '16': '協同組合',
    '17': '共済組合',
    '18': '労働組合',
    '19': '企業組合',
    '20': '健康保険組合',
    '21': '信用組合',
    '22': '社会福祉法人',
    '23': '法人会',
    '24': '管理組合'
  }
  return corporateCodeOpts[value]
})

Vue.filter('YYYYMMDD_WITH_SLASH', (value) => {
  if (value === null || !value) {
    return null
  }
  let result = ''
  let year = value.substring(0, 4)
  if (year !== null && year) {
    result = result + year + '/'
  }
  let month = value.substring(4, 6)
  if (month !== null && month) {
    result = result + month + '/'
  }
  let day = value.substring(6, 8)
  if (day !== null && day) {
    result = result + day
  }
  return result
})
Vue.filter('SUBJECT', (value) => {
  if (value === 1) {
    return '普通'
  } else if (value === 2) {
    return '当座'
  } else {
    return null
  }
})
Vue.filter('INSURANCE_COMPANY_KANA', (value, flag) => {
  if (flag === '1') {
    return 'ラクテンソンポ'
  } else {
    return value
  }
})
Vue.filter('OTHER_INSURANCE_TYPE', (value) => {
  const opts = {
    '1': '建物',
    '2': '家財',
    '3': 'その他'
  }
  return opts[value]
})
Vue.filter('YYYYMMDD_WITH_KANJI', (value) => {
  if (!value) {
    return ''
  }
  const year = util.year(value)
  const month = util.month(value)
  const day = util.day(value)
  return year + '年' + month + '月' + day + '日'
})
Vue.filter('INSURANCE_TYPE', (value) => {
  const insuranceTypeOpts = {
    '1': '家財',
    '2': '設備・什器等'
  }
  return insuranceTypeOpts[value]
})
Vue.filter('EXPLICIT_PROPERTY_TYPE', (value) => {
  const explicitPropertyTypeOpts = {
    '1': '貴金属、宝玉、宝石',
    '2': '書画、骨董、彫刻物等',
    '3': '稿本、設計書等'
  }
  return explicitPropertyTypeOpts[value]
})
Vue.filter('CHANGEYEAR', (value) => {
  // 西暦（和暦）
  if (!value) {
    return value
  }
  if (value > 2019) {
    value = value - 2018
    return '(' + '令和' + value + ')'
  } else if (value === 2019) {
    return '(' + '平成31' + '・令和１' + ')'
  } else if (value > 1988) {
    value = value - 1988
    return '(' + '平成' + value + ')'
  } else if (value > 1925) {
    value = value - 1925
    return '(' + '昭和' + value + ')'
  } else if (value > 1911) {
    value = value - 1911
    return '(' + '大正' + value + ')'
  }
})

Vue.filter('CHANGETOJAPANESEYEAR', (value, month) => {
  // 西暦（和暦）
  if (!value || value === '') {
    return ''
  }
  const num = parseInt(value)
  const numMonth = parseInt(month)
  if (num > 2019 || (num === 2019 && numMonth >= 5)) {
    return '(令和' + (num - 2018) + ')'
  } else {
    if (num > 1989 && num < 2020) {
      return '(平成' + (num - 1988) + ')'
    } else if (num === 1989) {
      return '(平成元)'
    } else if (num > 1926 && num < 1989) {
      return '(昭和' + (num - 1925) + ')'
    } else if (num === 1926) {
      return '(昭和元)'
    } else {
      return ''
    }
  }
})
