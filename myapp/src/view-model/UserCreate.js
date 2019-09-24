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
      repsd: null,
      psdchkflg:null,
      planname: null,
      planList: this.$store.state.myapp.userInfo.userplans
      // cityList: ['11','22','33','44']
    }
  },
  created () {
    console.log('888888888888888888888888888888888')
    let loginid = this.$store.state.myapp.userName
    this.loginid = loginid
    var param = localStorage.getItem('userid')
    this.param = param
    var tocreatekengen = localStorage.getItem('tocreatekengen')
    this.tocreatekengen = tocreatekengen
    let userInfo = {userid: this.param}
    this.$store.dispatch(ACTIONS.MYAPP_GET_USER_INFO, userInfo)
  },
  mounted () {
    this.psdchkflg = '0'
    planList = this.$store.state.myapp.userInfo.userplans
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
    },
    createItems: function () {
      return this.$store.state.myapp.userInfo
    }
  },
  methods: {
    koushin () {
      this.psdchkflg = '0'
      console.log('updateupdateupdateupdateupdateupdateupdateupdateupdate')
      if(this.repsd !== this.password){
        this.psdchkflg = '1'
        console.log(this.psdchkflg)
        return
      }else{
      let params = {userid: this.account, furiganase: this.createItems.furiganase, furiganame: this.createItems.furiganame, kanjise: this.createItems.kanjise, kanjime: this.createItems.kanjime, password: this.password, planname: this.planname}
      this.$store.dispatch(ACTIONS.MYAPP_USER_CREATE, params)
      this.routerPush('/Success')}
    }
  }
}
export default {
  userCreateViewModel
}
