/**
 * 注意事項表示
 *
 * see: 画面定義書_G-NHA-029_注意事項表示_v1.0.xlsx
 */
import {ACTIONS} from '@/store/action-types'

export const alertItemsViewModel = {
  name: 'AlertItems',
  data () {
    return {
      ruleForm: {
      }
    }
  },
  created () {
    // get data
  },
  methods: {
    back () {
      this.$store.dispatch(ACTIONS.POPUP_CLOSE)
    },
    nextForm () {
      this.$store.dispatch(ACTIONS.HOMEASSIST_SAVE, this.ruleForm)
      this.$store.dispatch(ACTIONS.POPUP_CLOSE)
      this.routerPush('/Building')
    },
    toDisclosureStatement () {
      if (this.$root.isMobile.any === true) {
        this.$store.dispatch(ACTIONS.DOCUMENT_OPEN, {name: 'DisclosureStatementSp', showScrollBtn: true})
      } else {
        this.$store.dispatch(ACTIONS.DOCUMENT_OPEN, {name: 'DisclosureStatement', showScrollBtn: true})
      }
    }
  }
}

export default {
  alertItemsViewModel
}
