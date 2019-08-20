import {MUTATIONS} from '../mutation-types'
import {ACTIONS} from '../action-types'

export default {
  state: {
    param: null,
    retValue: null
  },
  actions: {
    [ACTIONS.AREAMAP_POPUP] ({ commit }, buildingLocation) {
      commit(MUTATIONS.POPUP_SET_RETVALUE, buildingLocation)
    }
  },
  mutations: {
    [MUTATIONS.POPUP_SET_PARAM] (state, param) {
      state.param = param
    },
    [MUTATIONS.POPUP_SET_RETVALUE] (state, retValue) {
      state.retValue = retValue
    }
  }
}
