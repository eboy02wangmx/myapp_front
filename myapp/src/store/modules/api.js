import {MUTATIONS} from '../mutation-types'
import {cloneDeep} from 'lodash'

export default {
  state: {
    status: null,
    errors: {}
  },
  mutations: {
    [MUTATIONS.API_ERROR] (state, response) {
      const errors = cloneDeep(state.errors)
      if (response === undefined || response.data === undefined || response.data.result === undefined) {
        console.error('There is no error data.')
        response = {
          status: 400,
          data: {
            result: []
          }
        }
      }
      response.data.result.forEach((item, index) => {
        const key = item.param
        errors[key] = item
      })
      state.errors = errors
      state.status = response.status
    },
    [MUTATIONS.API_CLEAR_ERROR] (state, key) {
      if (key === undefined) {
        state.errors = {}
      } else {
        const errors = cloneDeep(state.errors)
        delete errors[key]
        state.errors = errors
      }
    }
  }
}
