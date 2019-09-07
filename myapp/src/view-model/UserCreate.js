import { ACTIONS } from '@/store/action-types'
export const userCreateViewModel = {
  name: 'UserCreate',
  data () {
    return {
      userId: this.$store.state.myapp.userName,
      furiganase: null,
      furiganame: null,
      kanjise: null,
      kanjime: null,
      password: null,
      repsd: null
    }
  },
  created () {
    console.log('888888888888888888888888888888888')
    var param = localStorage.getItem('userid')
    this.param = param
    let userInfo = {userid: this.param}
    this.$store.dispatch(ACTIONS.MYAPP_GET_USER_INFO, userInfo)
  },
  mounted () {
    this.furiganase = this.$store.state.myapp.userInfo.furiganase
    this.furiganame = this.$store.state.myapp.userInfo.furiganame
    this.kanjise = this.$store.state.myapp.userInfo.kanjise
    this.kanjime = this.$store.state.myapp.userInfo.kanjime
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
    },
    account () {
      // return this.$store.state.myapp.userName
      return this.param
    }
  },
  methods: {
    koushin () {
      console.log('updateupdateupdateupdateupdateupdateupdateupdateupdate')
      let params = {userid: this.account, furiganase: this.furiganase, furiganame: this.furiganame, kanjise: this.kanjise, kanjime: this.kanjime, password: this.password}
      this.$store.dispatch(ACTIONS.MYAPP_USER_CREATE, params)
      this.routerPush('/UserKanri')
    }
  }
}
export default {
  userCreateViewModel
}
