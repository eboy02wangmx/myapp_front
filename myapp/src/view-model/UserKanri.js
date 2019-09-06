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
    }
  },
  methods: {
    getDataId (userid) {
      console.log('当前被点击的id=' + userid)
      // localStorage.setItem('deleteid', JSON.stringify(userid))
      localStorage.setItem('userid', userid)
      console.log('当前被点击的id=' + userid)
    }
  }
}
export default {
  userKanriViewModel
}
