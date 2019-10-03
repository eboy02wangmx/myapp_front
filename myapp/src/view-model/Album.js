	/**
 * ALBUM画面
 *
 * see: 画面定義書_G-NHA-002_ALBUM画面_v1.1.xlsx
 */
import { ACTIONS } from '@/store/action-types'
export const albumViewModel = {
  name: 'Album',
  data () {
    return {
      albums: [],
      filename: '',
      userid: ''
    }
  },
  created () {
    let params = {userid: this.$store.state.myapp.userName}
    this.$store.dispatch(ACTIONS.MYAPP_USER_ALBUM, params)
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
    edit (i) {
      if (i.id) {
        localStorage.setItem('vrInfoId', i.id);
      }
      var bukenme = '';
      if (i.bukenme) {
        bukenme = i.bukenme;
      }
      localStorage.setItem('vrInfoBukenme', bukenme);
      var picnum = 0;
      if (i.picnum) {
        picnum = i.picnum;
      }
      localStorage.setItem('vrInfoPicnum', picnum);
      this.$router.push('Images');
    },
    remove (album) {
      let params = {id: album.id, userid: album.userid}
      this.$store.dispatch(ACTIONS.MYAPP_ALBUM_REMOVE, params)
    },
    getDataId (id, bukenme, picnum, userid) {
      // localStorage.setItem('deleteid', JSON.stringify(userid))
      localStorage.setItem('picnum', picnum ,'bukenme', bukenme)
      localStorage.setItem('bukenme', bukenme, 'picnum', picnum)
      localStorage.setItem('userid', userid)
      localStorage.setItem('id', id)
      // localStorage.setItem('picnum', picnum)
      console.log('当前被点击的bukenme=' + bukenme)
      console.log('当前被点击的picnum=' + picnum)
      console.log('当前被点击的userid=' + userid)
    },
    panoPreview (album) {
      if (album && album.panoPreviewUrl && album.picnum && album.picnum > 0) {
        window.open(album.panoPreviewUrl);
      }
    },
    setDomain (album) {
      if (album.id) {
        localStorage.setItem('vrInfoId', album.id);
      } else {
        localStorage.setItem('vrInfoId', '');
      }
      if (album.domain) {
        localStorage.setItem('vrInfoDomain', album.domain);
      } else {
        localStorage.setItem('vrInfoDomain', '');
      }
      this.$router.push('AlbumDomain');
    },
    order (type) {
      var albumOrdBukenme = $('#albumOrdBukenme');
      var albumOrdBukenmeValue = albumOrdBukenme.text();
      var albumOrdKoushinhi = $('#albumOrdKoushinhi');
      var albumOrdKoushinhiValue = albumOrdKoushinhi.text();
      if (type === 'bukenme') {
        if (albumOrdBukenmeValue === '▼') {
          albumOrdBukenme.text('▲');
          let params = {
            userid: this.$store.state.myapp.userName,
            orderName: 'bukenme',
            orderDirect: 'ASC'
          }
          this.$store.dispatch(ACTIONS.MYAPP_USER_ALBUM, params)
        } else if (albumOrdBukenmeValue === '▲') {
          albumOrdBukenme.text('▼');
          let params = {
            userid: this.$store.state.myapp.userName,
            orderName: 'bukenme',
            orderDirect: 'DESC'
          }
          this.$store.dispatch(ACTIONS.MYAPP_USER_ALBUM, params)
        }
      } else if (type === 'koushinhi') {
        if (albumOrdKoushinhiValue === '▼') {
          albumOrdKoushinhi.text('▲');
          let params = {
            userid: this.$store.state.myapp.userName,
            orderName: 'koushinhi',
            orderDirect: 'ASC'
          }
          this.$store.dispatch(ACTIONS.MYAPP_USER_ALBUM, params)
        } else if (albumOrdKoushinhiValue === '▲') {
          albumOrdKoushinhi.text('▼');
          let params = {
            userid: this.$store.state.myapp.userName,
            orderName: 'koushinhi',
            orderDirect: 'DESC'
          }
          this.$store.dispatch(ACTIONS.MYAPP_USER_ALBUM, params)
        }
      }
    }
  }
}
export default {
  albumViewModel
}
