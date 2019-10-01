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
      let params = '';
      if(yukokbn === '0'){
        params = {userId: userid, yukokbn: '1'}
      }else{
        params = {userId: userid, yukokbn: '0'}
      }
      $.ajax({
        //url: 'http://localhost:8080/myapp-backend/api/yukokbnHenko',
        url: 'http://203.189.97.178:8080/myapp-backend/api/yukokbnHenko',
        type: 'POST',
        context: this,
        data: JSON.stringify(params),
        processData: false,
        contentType : 'application/json;charset=UTF-8',
        success: function (data) {
          let kanriparams = {userId: this.$store.state.myapp.userName}
          this.$store.dispatch(ACTIONS.MYAPP_USER_KANRI, kanriparams)
        }
      });
    },
    tocreate (tocreatekengen) {
      localStorage.setItem('tocreatekengen', tocreatekengen)
    },
    order (type) {
      var userKanriCustomid = $('#userKanriCustomid');
      var userKanriCustomidValue = userKanriCustomid.text();
      if (type === 'customid') {
        if (userKanriCustomidValue === '▼') {
          userKanriCustomid.text('▲');
          let params = {
            userId: this.$store.state.myapp.userName,
            orderName: 'customid',
            orderDirect: 'ASC'
          }
          this.$store.dispatch(ACTIONS.MYAPP_USER_KANRI, params)
        } else if (userKanriCustomidValue === '▲') {
          userKanriCustomid.text('▼');
          let params = {
            userId: this.$store.state.myapp.userName,
            orderName: 'customid',
            orderDirect: 'Desc'
          }
          this.$store.dispatch(ACTIONS.MYAPP_USER_KANRI, params)
        }
      }
    }
  }
}
export default {
  userKanriViewModel
}
