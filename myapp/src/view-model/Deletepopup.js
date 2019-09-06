import {ACTIONS} from '@/store/action-types'

export const deletePopupViewModel = {
  name: 'deletePopup',
  props: {
    userid: null,
    param: null
  },
  created () {
    var param = localStorage.getItem('userid')
    this.param = param
  },
  methods: {
    deleteEvent () {
      let params = this.param
      this.$store.dispatch(ACTIONS.MYAPP_USER_DELETE, params)
    }
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  }
}
export default {
  deletePopupViewModel
}
