'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  SERVER_URL: '"https://fire.rakuten-sonpo.co.jp/"',
  CONTEXT: '"myapp"',
  SMBC_PROD: false,
  GA: false,
  MOCK: true
})
