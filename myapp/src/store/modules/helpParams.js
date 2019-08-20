import {MUTATIONS} from '../mutation-types'
import {ACTIONS} from '../action-types'

export default {
  state: {
    param: null,
    retValue: null
  },
  actions: {
  },
  mutations: {
    [MUTATIONS.HELP_SET_PARAM] (state, param) {
      state.param = param
    },
    [MUTATIONS.HELP_SET_RETVALUE] (state, retValue) {
      state.retValue = retValue
    }
  }
}
