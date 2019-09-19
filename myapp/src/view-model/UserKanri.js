/**
 * see: 画面定義書_G-NHA-003_ユーザー管理画面_v1.1.xlsx
 */
import {ACTIONS} from '@/store/action-types'
export const userKanriViewModel = {
  name: 'UserKanri',
  data () {
    return {
      userId: this.$store.state.myapp.userkanriItems.userId,
      userid: null,
      param: null
    }
  },
  created () {
    // let params = {userId: 'test'}
    let loginidkengen = this.$store.state.myapp.kengen
    this.loginidkengen = loginidkengen
    let loginid = this.$store.state.myapp.userName
    this.loginid = loginid
    let kanriparams = {userId: this.$store.state.myapp.userName}
    this.$store.dispatch(ACTIONS.MYAPP_USER_KANRI, kanriparams)
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
    items: function () {
      return this.$store.state.myapp.userkanriItems
    },
    isAdmin () {
      let kengen = this.$store.state.myapp.kengen
      if (kengen === '1' || kengen === '2') {
        return true
      }
      return false
    }
  },
  methods: {
    getDataId (userid) {
      console.log('当前被点击的id=' + userid)
      // localStorage.setItem('deleteid', JSON.stringify(userid))
      localStorage.setItem('userid', userid)
      console.log('当前被点击的id=' + userid)
    },
    yukokbnhenko (userid, yukokbn) {
      if(yukokbn === '0'){
        let kengenparams = {userId: userid, yukokbn: '1'}
        this.$store.dispatch(ACTIONS.MYAPP_USER_KENGEN, kengenparams)
      }else{
        let kengenparams = {userId: userid, yukokbn: '0'}
        this.$store.dispatch(ACTIONS.MYAPP_USER_KENGEN, kengenparams)
      }
      this.routerPush('/UserKanri')
    }
  }
}
export default {
  userKanriViewModel
}
