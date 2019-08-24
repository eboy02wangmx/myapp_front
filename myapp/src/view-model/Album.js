/**
 * TOP画面
 *
 * see: 画面定義書_G-NHA-002_ALBUM画面_v1.1.xlsx
 */
import {MUTATIONS} from '@/store/mutation-types'
export const albumViewModel = {
  name: 'Album',
  data () {
    return {
      entryNo: null,
      setEntryNo: null,
      mail: null,
      agentCode: null,
      showPrintListFlag: false,
      selectIndex: null,
      pageNo: 1,
      pageSize: 10,
      agentList: [],
      downloading: false,
      policyNo: null
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
    this.$watch('$store.state.configs.agentList', (newValue, oldValue) => {
      this.agentList = newValue
    })
    this.$watch('$store.state.homeassist.entryNo', (newValue, oldValue) => {
      console.log('$store.state.homeassist.entryNo new value is=' + newValue)
      this.entryNo = newValue
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
  albumViewModel
}
