'use strict'

module.exports = {
  'testing': () => {
    return require('../config/test.env')
  },
  'stg-fire': () => {
    return require('../config/stg-fire.env')
  },
  'stg-agent': () => {
    return require('../config/stg-agent.env')
  },
  'dev-fire': () => {
    return require('../config/dev-fire.env')
  },
  'osaka': () => {
    return require('../config/osaka.env')
  },
  'tokyo': () => {
    return require('../config/tokyo.env')
  },
  'production': () => {
    return require('../config/prod.env')
  }
}
