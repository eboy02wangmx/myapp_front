import {ACTIONS} from '../action-types'
import {MUTATIONS} from '../mutation-types'

export default {
  state: {
    // エラー文言
    errors: null,
    confirm: null, // true:confirm
    confirmText: null,
    confirmReturn: false
  },
  actions: {
    [ACTIONS.ERROR_OPEN] ({ state, commit }, error) {
      if (state.errors === null) {
        commit(MUTATIONS.ERROR_UI_SET_POPUP, error)
      } else {
        // 2nd error, 3rd not supported
        const unwatch = this.watch(() => state.errors, (newVal, oldVal) => {
          if (newVal === null) {
            commit(MUTATIONS.ERROR_UI_SET_POPUP, error)
            unwatch()
          }
        })
      }
    },
    [ACTIONS.ERROR_CLOSE] ({ commit }) {
      commit(MUTATIONS.ERROR_UI_SET_POPUP, null)
    },
    [ACTIONS.ERROR_OPEN_CONFIRM] ({ commit }, text) {
      commit(MUTATIONS.ERROR_UI_SET_POPUP_CONFIRM, text)
    },
    [ACTIONS.ERROR_CLOSE_CONFIRM] ({ commit }, result) {
      commit(MUTATIONS.ERROR_UI_UNSET_POPUP_CONFIRM, result)
    },
    [ACTIONS.ERROR_OPEN_API_ERRORS] ({ commit }) {
      const errors = []
      for (const key in this.state.api.errors) {
        const discription = this.state.api.errors[key].discription
        if (discription) {
          errors.push(discription)
        }
      }
      if (errors.length > 0) {
        commit(MUTATIONS.ERROR_UI_SET_POPUP, errors)
      }
    }
  },
  mutations: {
    [MUTATIONS.ERROR_UI_SET_POPUP] (state, error) {
      if (typeof error === 'string') {
        state.errors = [error]
      } else if (Array.isArray(error)) {
        state.errors = error
      } else {
        state.errors = null
      }
    },
    [MUTATIONS.ERROR_UI_SET_POPUP_CONFIRM] (state, text) {
      state.errors = [text]
      state.confirm = true
      state.confirmReturn = false
    },
    [MUTATIONS.ERROR_UI_UNSET_POPUP_CONFIRM] (state, result) {
      state.errors = null
      state.confirm = false
      state.confirmReturn = result
    }
  }
}
