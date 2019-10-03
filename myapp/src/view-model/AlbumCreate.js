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
      $.ajax({
        //url: 'http://localhost:8080/myapp-backend/api/albumCreaet',
        url: 'http://203.189.97.178:8080/myapp-backend/api/albumCreaet',
        type: 'POST',
        context: this,
        data: JSON.stringify(params),
        processData: false,
        contentType : 'application/json;charset=UTF-8',
        success: function () {
          this.$router.push('Album');
        }
      })
    }
  }
}
export default {
  albumCreateViewModel
}
