/**
 * TOP画面
 *
 * see: 画面定義書_G-NHA-001_TOP画面_v1.1.xlsx
 */
import {ACTIONS} from '@/store/action-types'

export const topViewModel = {
  name: 'Top',
  data () {
    return {
      topheadpic: require('@/assets/images/head_logo.png'),
      userName: null,
      password: null
    }
  },
  created () {
    this.policyNo = this.$store.state.myapp.data.policy
  },
  computed: {
    isError: function () {
      let userName = this.$store.state.myapp.userName
      if (userName === '') {
        return true
      }
      return false
    },
    loginUserName: function () {
      return this.$store.state.myapp.userName
    }
  },
  methods: {
    async upDateItem () {
      console.log('UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU')
      await this.$store.dispatch(ACTIONS.MYAPP_SVR_ACCEPT_LIMIT_CONFIRM_CODE_SAVE, {entryNo: '23', seigenCd: '555', ketteiNo: '888'})
      if (this.$store.state.myapp.sync[ACTIONS.MYAPP_SVR_ACCEPT_LIMIT_CONFIRM_CODE_SAVE].status === 200) {
        // ok
        console.log('success')
      } else {
        // error
        console.error(this.$store.state.myapp.sync[ACTIONS.MYAPP_SVR_ACCEPT_LIMIT_CONFIRM_CODE_SAVE].status, 'error!')
      }
    },
    userLogin () {
      var params = {userName: this.userName, password: this.password};
      $.ajax({
        //url: 'http://localhost:8080/myapp-backend/api/login',
        url: 'http://203.189.97.178:8080/myapp-backend/api/login',
        type: 'POST',
        context: this,
        data: JSON.stringify(params),
        processData: false,
        contentType : 'application/json;charset=UTF-8',
        success: function (data) {
          if (data) {
            if (data.success) {
              this.$store.state.myapp.userName = data.userName;
              this.$store.state.myapp.kengen = data.kengen;
              this.$store.state.myapp.customId = data.customId;
              this.$router.push('Album');
            } else {
              this.$store.state.myapp.userLoginStatus = 'fail';
              this.$store.state.myapp.errorMsg = data.msg;
              $("#errMsg").css('display','');
              $('#errMsg').html(data.msg);
            }
          }
        }
      })
    }
  }
}

export default {
  topViewModel
}
