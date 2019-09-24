/**
 * riyo画面
 *
 * see: 画面定義書_G-NHA-002_ALBUM画面_v1.1.xlsx
 */
import { ACTIONS } from '@/store/action-types'

export const riyoViewModel = {
  name: 'Riyo',
  data () {
    return {
      riyos: []
    }
  },
  created () {
    let params = {userId: this.$store.state.myapp.userName}
    this.$store.dispatch(ACTIONS.MYAPP_USER_RIYO, params)
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
    csvDownload () {
      var userId = this.$store.state.myapp.userName;
      window.location.href = 'http://localhost:8080/myapp-backend/api/riyo/download?userId=' + userId;
    }
  }
}
export default {
  riyoViewModel
}
