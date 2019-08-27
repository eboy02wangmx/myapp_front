/**
 * see: 画面定義書_G-NHA-004_ユーザー管理画面->ユーザー編集画面_v1.1.xlsx
 */
import {MUTATIONS} from '@/store/mutation-types'
import {ACTIONS} from '@/store/action-types'

export const userEditViewModel = {
  name: 'UserEdit',
  data () {
    return {
      userId: this.$store.state.myapp.editContractListData.userId,
      furiganase: null,
      furiganame: null,
      kanjise: null,
      kanjime: null,
      psd: null,
      repsd: null
    }
  },
  created () {
    console.log('888888888888888888888888888888888')
    console.log(this.furiganase)
    if (this.$route.query.entryType !== undefined && this.$route.query.entryType !== '') {
      this.$store.commit(MUTATIONS.HOMEASSIST_SET_ENTRY_TYPE, this.$route.query.entryType)
    }
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
  },
  methods: {
    koushin () {
      console.log('updateupdateupdateupdateupdateupdateupdateupdateupdate')
      let params = {furiganase: this.furiganase, furiganame: this.furiganame, kanjise: this.kanjise, kanjime: this.kanjime, psd: this.psd}
      const unwatch = this.$store.watch(() => this.$store.state.myapp.sync[ACTIONS.MYAPP_USER_CREATE].doing, (newValue, oldValue) => {
        if (oldValue === true && newValue === false) {
          if (this.$store.state.myapp.sync[ACTIONS.MYAPP_USER_CREATE].status === 200) {
            console.log('this.$store.state.myapp.userName is ' + this.loginUserName)
            if (this.$store.state.myapp.userName !== undefined) {
              this.routerPush('/images')
            }
          } else {
            this.$store.dispatch(ACTIONS.ERROR_OPEN_API_ERRORS)
          }
          unwatch()
        }
      })
      this.$store.dispatch(ACTIONS.MYAPP_USER_CREATE, params)
    }
  }
}
export default {
  userEditViewModel
}
