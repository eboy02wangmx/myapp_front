import {ACTIONS} from '../action-types'
import {MUTATIONS} from '../mutation-types'

export default {
  state: {
    // ポップアップ
    popup: null,
    confirmInPopupClose: false,
    help: null,
    helpStack: [],
    document: null,
    // Loading
    loading: false
  },
  actions: {
    [ACTIONS.POPUP_OPEN] ({ commit }, popup) {
      commit(MUTATIONS.UI_SET_POPUP, popup)
    },
    [ACTIONS.POPUP_CLOSE] ({ commit }) {
      commit(MUTATIONS.UI_SET_POPUP, null)
    },
    [ACTIONS.SET_CONFIRM_IN_POPUP_CLOSE] ({ commit }, val) {
      commit(MUTATIONS.UI_SET_CONFIRM_IN_POPUP_CLOSE, val)
    },
    [ACTIONS.HELP_OPEN] ({ commit }, help) {
      commit(MUTATIONS.UI_SET_HELP, help)
    },
    [ACTIONS.HELP_CLOSE] ({ commit }) {
      commit(MUTATIONS.UI_SET_HELP, null)
    },
    [ACTIONS.DOCUMENT_OPEN] ({ commit }, document) {
      commit(MUTATIONS.UI_SET_DOCUMENT, document)
    },
    [ACTIONS.DOCUMENT_CLOSE] ({ commit }) {
      commit(MUTATIONS.UI_SET_DOCUMENT, null)
    },
    [ACTIONS.LOADING_ON] ({ commit }) {
      commit(MUTATIONS.UI_SET_LOADING_ON)
    },
    [ACTIONS.LOADING_OFF] ({ commit }) {
      commit(MUTATIONS.UI_SET_LOADING_OFF)
    }
  },
  mutations: {
    [MUTATIONS.UI_SET_POPUP] (state, popup) {
      if (popup === null) {
        state.popup = null
      } else if (typeof popup === 'object') {
        state.popup = popup
      } else {
        state.popup = {
          name: popup
        }
      }
    },
    [MUTATIONS.UI_SET_CONFIRM_IN_POPUP_CLOSE] (state, value) {
      state.confirmInPopupClose = value
    },
    [MUTATIONS.UI_SET_HELP] (state, help) {
      if (help === null) {
        state.helpStack.pop()
        let temp2 = state.helpStack[state.helpStack.length - 1]
        console.log('state.helpStack.pop()=' + temp2)
        if (temp2 === null || temp2 === undefined) {
          state.help = null
        } else {
          state.help = temp2
        }
      } else if (typeof help === 'object') {
        if (help.name !== 'RHelp') {
          console.log('push help=' + help.name)
          state.helpStack.push(help)
        }
        state.help = help
      } else {
        console.log('help default')
        state.help = {
          name: help
        }
      }
    },
    [MUTATIONS.UI_SET_DOCUMENT] (state, document) {
      if (document === null) {
        state.document = null
      } else if (typeof document === 'object') {
        state.document = document
      } else {
        state.document = {
          name: document
        }
      }
    },
    [MUTATIONS.UI_SET_LOADING_ON] (state) {
      state.loading = true
    },
    [MUTATIONS.UI_SET_LOADING_OFF] (state) {
      state.loading = false
    }

  }
}
