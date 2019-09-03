/**
 * see: 画面定義書_G-NHA-004_ユーザー管理画面->ユーザー編集画面_v1.1.xlsx
 */

import {ACTIONS} from '@/store/action-types'

export const userInsertViewModel = {
  name: 'UserInsert',
  data () {
    return {
      userid: null,
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
    console.log(this.furiganase)
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
      console.log('insertinsertinsertinsertinsertinsertinsert')
      let params = {userid: this.userid, furiganase: this.furiganase, furiganame: this.furiganame, kanjise: this.kanjise, kanjime: this.kanjime, password: this.password}
      this.$store.dispatch(ACTIONS.MYAPP_USER_INSERT, params)
      // this.routerPush('/UserKanri')
    }
  }
}
export default {
  userInsertViewModel
}
