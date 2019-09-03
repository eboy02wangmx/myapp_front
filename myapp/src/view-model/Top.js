/**
 * TOP画面
 *
 * see: 画面定義書_G-NHA-001_TOP画面_v1.1.xlsx
 */
import {ACTIONS} from '@/store/action-types'

export const topViewModel = {
  name: 'Top',
  data () {
    return {
      userName: null,
      password: null
    }
  },
  created () {
    this.policyNo = this.$store.state.myapp.data.policy
  },
  computed: {
    isError: function () {
      return this.$store.state.configs.parameterError
    },
    loginUserName: function () {
      return this.$store.state.myapp.userName
    }
  },
  methods: {
    async upDateItem () {
      console.log('UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU')
      await this.$store.dispatch(ACTIONS.MYAPP_SVR_ACCEPT_LIMIT_CONFIRM_CODE_SAVE, {entryNo: '23', seigenCd: '555', ketteiNo: '888'})
      if (this.$store.state.myapp.sync[ACTIONS.MYAPP_SVR_ACCEPT_LIMIT_CONFIRM_CODE_SAVE].status === 200) {
        // ok
        console.log('success')
      } else {
        // error
        console.error(this.$store.state.myapp.sync[ACTIONS.MYAPP_SVR_ACCEPT_LIMIT_CONFIRM_CODE_SAVE].status, 'error!')
      }
    },
    userLogin () {
      console.log('user login.ha ha ha')
      let params = {userName: this.userName, password: this.password}
      const unwatch = this.$store.watch(() => this.$store.state.myapp.sync[ACTIONS.MYAPP_USER_LOGIN].doing, (newValue, oldValue) => {
        if (oldValue === true && newValue === false) {
          if (this.$store.state.myapp.sync[ACTIONS.MYAPP_USER_LOGIN].status === 200) {
            console.log('this.$store.state.myapp.userName is ' + this.loginUserName)
            if (this.$store.state.myapp.userName !== undefined) {
              this.routerPush('/album')
            }
          } else {
            this.$store.dispatch(ACTIONS.ERROR_OPEN_API_ERRORS)
          }
          unwatch()
        }
      })
      this.$store.dispatch(ACTIONS.MYAPP_USER_LOGIN, params)
    }
  }
}

export default {
  topViewModel
}
