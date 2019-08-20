'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  SERVER_URL: '"http://localhost:8080/"',
  CONTEXT: '"myapp-backend"',
  SMBC_PROD: false,
  GA: false,
  MOCK: false
})
