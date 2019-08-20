import MockAdapter from 'axios-mock-adapter'

function matchResponses (method, url, response, data) {
  if (method.toLowerCase() !== response.method.toLowerCase()) {
    return false
  }
  let result = url.match(new RegExp(response.url))

  let resultParam = true
  if (response.params) {
    let apiContent = data ? JSON.parse(data) : null
    if (apiContent) {
      resultParam = Compare(apiContent, response.params)
    } else if (!apiContent) {
      resultParam = false
    }
  }

  return result && resultParam
}

// add start
function Compare (objA, objB) {
  if (!isObj(objA) || !isObj(objB)) return false // 型確認
  if (getLength(objA) !== getLength(objB)) return false // 長さの一致
  return CompareObj(objA, objB, true) // true
}

function CompareObj (objA, objB, flag) {
  for (var key in objA) {
    if (!flag) {
      break
    }
    if (!objB.hasOwnProperty(key)) {
      flag = false
      break
    }
    if (!isArray(objA[key])) { // 子層が配列でない場合、属性比較
      if (objB[key] !== objA[key]) {
        flag = false
        break
      }
    } else {
      if (!isArray(objB[key])) {
        flag = false
        break
      }
      let oA = objA[key]
      let oB = objB[key]
      if (oA.length !== oB.length) {
        flag = false
        break
      }
      for (let k in oA) {
        if (!flag) {
          break
        }
        flag = CompareObj(oA[k], oB[k], flag)
      }
    }
  }
  return flag
}

function isObj (object) {
  return object && typeof (object) === 'object' && Object.prototype.toString.call(object).toLowerCase() === '[object object]'
}

function isArray (object) {
  return object && typeof (object) === 'object' && object.constructor === Array
}

function getLength (object) {
  return Object.keys(object).length
}
// add end

export default (instance, responses) => {
  let mock = new MockAdapter(instance)

  mock.onAny().reply((config) => {
    const { method, baseURL, url, data } = config
    // eslint-disable-next-line no-useless-escape
    const targetUrl = (baseURL + url).replace(/http\:\/\/.+?\//, '/').replace('/rakuten-sonpo-backend', '')
    for (let i = 0; i < responses.length; i++) {
      if (matchResponses(method, targetUrl, responses[i], data)) {
        if (responses[i].then) {
          break
        }
        let res = responses[i].response
        if (typeof (res) === 'function') {
          res = res()
        }

        // const logStyle = 'color: green; font-weight: bold;'

        // console.log(`Mock API Request [${new Date().toLocaleString()}]`)

        // console.log('%cMethod:', logStyle, method)
        // console.log('%cStatus:', logStyle, res.status)
        // console.log('%cUrl:', logStyle, targetUrl)
        // console.log('%cParams:', logStyle, JSON.stringify(config.params, null, '  '))
        // console.log('%cHeaders:', logStyle, JSON.stringify(config.headers, null, '  '))
        // console.log('%cData:', logStyle, res.data)

        // random wait
        return new Promise((resolve) => {
          const rnd = Math.floor(Math.random() * 100) + 1
          const time = 1000 * (rnd / 100)
          setTimeout(() => {
            resolve([res.status, res.data])
          }, time)
        })
      }
    }

    console.error(`response data does not exist: method:${method}, url:${targetUrl}, params:${data}`)
    return null
  })
}
