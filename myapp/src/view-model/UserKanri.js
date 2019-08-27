/**
 * see: 画面定義書_G-NHA-003_ユーザー管理画面_v1.1.xlsx
 */
import {MUTATIONS} from '@/store/mutation-types'
export const userKanriViewModel = {
  name: 'UserKanri',
  data () {
    return {
      userId: this.$store.state.myapp.editContractListData.userId
    }
  },
  created () {
    if (this.$route.query.entryType !== undefined && this.$route.query.entryType !== '') {
      this.$store.commit(MUTATIONS.HOMEASSIST_SET_ENTRY_TYPE, this.$route.query.entryType)
    }
    // this.$store.dispatch(ACTIONS.READ_NOTICE_LIST, {goodsType: '1', entryType: this.$store.state.homeassist.entryType})
    this.agentList = this.$store.state.configs.agentList
    this.agentCode = this.$store.state.configs.agentCode
    this.$watch('$store.state.configs.agentCode', (newValue, oldValue) => {
      this.agentCode = newValue
    })
    this.policyNo = ''
  },
  computed: {
    isError: function () {
      return this.$store.state.configs.parameterError
    },
    isDevelop () {
      if (process.env.NODE_ENV === 'development') {
        return true
      }
      return false
    }
  }
}
export default {
  userKanriViewModel
}
