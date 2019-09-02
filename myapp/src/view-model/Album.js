/**
 * ALBUM画面
 *
 * see: 画面定義書_G-NHA-002_ALBUM画面_v1.1.xlsx
 */
import {MUTATIONS} from '@/store/mutation-types'
export const albumViewModel = {
  name: 'Album',
  data () {
    return {
      albums :[],
      filename:'',
      userid:''
    }
  },
  created () {
    let params = {userid:this.$store.state.myapp.userName};
    this.$store.dispatch(ACTIONS.MYAPP_USER_ALBUM, params);
    this.$store.state.myapp.albums
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
    remove(album){
      let params ={filename:album.filename,userid:album.userid}
      this.$store.dispatch(ACTIONS.MYAPP_ALBUM_REMOVE, params);
      
    }

  }
}
export default {
  albumViewModel
}
