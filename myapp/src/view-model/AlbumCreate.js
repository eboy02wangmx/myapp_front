/**
 * AlbumCreate画面
 *
 * see: 画面定義書_G-NHA-002_ALBUM画面_v1.1.xlsx
 */
import { ACTIONS } from '@/store/action-types'
export const albumCreateViewModel = {
  name: 'AlbumCreate',
  data () {
    return {
      albumName: null,
      userId: null
    }
  },
  created () {

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
    newCreate () {
      let params = {bukenme: this.albumName, userid: this.$store.state.myapp.userName}
      this.$store.dispatch(ACTIONS.MYAPP_ALBUMCREATE, params)
      this.routerPush('/album')
    }
  }
}
export default {
  albumCreateViewModel
}
