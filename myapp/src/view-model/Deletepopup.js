import {ACTIONS} from '@/store/action-types'
import {MUTATIONS} from '@/store/mutation-types'

export const deletePopupViewModel = {
  name: 'deletePopup',
  props: {
    goodsType: String,
    entryNo: String
  },
  methods: {
    deleteEvent () {
      this.$store.dispatch(ACTIONS.ENTRY_TEMP_DELETE, {shohinKbn: this.goodsType, entryNo: this.entryNo})
        .then(() => {
          this.$store.commit(MUTATIONS.RESET_PARENT, true)
          this.$emit('close')
        })
        .catch(() => {
          this.$emit('close')
          this.$store.dispatch(ACTIONS.ERROR_OPEN_API_ERRORS)
        })
    },
    cancelEvent () {
      this.$emit('close')
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
