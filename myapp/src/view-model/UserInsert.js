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
      repsd: null,
      customId: this.$store.state.myapp.customId,
      planList: this.$store.state.myapp.userPlanInfo.userplans,
      mailChkFlg: null,
      psdChkFlg: null
    }
  },
  created () {
    let loginid = this.$store.state.myapp.userName
    this.loginid = loginid
    var tocreatekengen = localStorage.getItem('tocreatekengen')
    this.tocreatekengen = tocreatekengen
    // let param1 = {userid: null}
    // this.$store.dispatch(ACTIONS.MYAPP_GET_USERPLAN_INFO, param1)
    $.ajax({
      //url: 'http://localhost:8080/myapp-backend/api/userPlanInfo',
      url: 'http://203.189.97.178:8080/myapp-backend/api/userPlanInfo',
      type: 'POST',
      processData: false,
      contentType : false,
      success: function (plans) {
        if (plans && plans.length > 0) {
          var content = '';
          for (var i = 0; i < plans.length; i++) {
            content = content + '<option>' + plans[i] + '</option>';
          }
          var plan = $('#plan');
          plan.html(content);
        }
      }
    })
  },
  mounted () {
    this.mailChkFlg = '0'
    this.psdChkFlg = '0'
  },
  computed: {
    planList (){
      return this.$store.state.myapp.userPlanInfo.userplans
    },
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
      var checkFlag = true;
      var params = {userId: this.userid};
      $.ajax({
        //url: 'http://localhost:8080/myapp-backend/api/user/exists',
        url: 'http://203.189.97.178:8080/myapp-backend/api/user/exists',
        type: 'POST',
        async:false, 
        context: this,
        data: JSON.stringify(params),
        processData: false,
        contentType : 'application/json;charset=UTF-8',
        success: function (exists) {
          if (exists) {
            $('#userInsertUserIdErr').text('※このアカウントIDは既に存在します！');
            checkFlag = false;
          } else {
            $('#userInsertUserIdErr').text('');
          }
        }
      });

      var mail = this.mail === '' ? null : this.mail;
      var remail = this.remail === '' ? null : this.remail;
      if(mail !== remail){
        $('#userInsertMailErr').text('※入力されたメールアドレスとメールアドレス（確認）が不一致です！');
        checkFlag = false;
      } else {
        $('#userInsertMailErr').text('');
      }
      var password = this.password === '' ? null : this.password;
      var repsd = this.repsd === '' ? null : this.repsd;
      if (!password || !repsd){
        $('#userInsertPasswordErr').text('※パスワードは空ではいけません！');
        checkFlag = false;
      } else if(password !== repsd){
        $('#userInsertPasswordErr').text('※パスワードとパスワード再入力が不一致です！');
        checkFlag = false;
      } else {
        $('#userInsertPasswordErr').text('');
      }
      if(checkFlag){
        let userplanname = '';
        var plan = document.getElementById('plan');
        if (plan) {
          userplanname = plan.value
        }
        let params = {
          customid: this.$store.state.myapp.customId, 
          userid: this.userid, 
          name: this.name, 
          password: this.password, 
          customId: this.customId, 
          loginid: this.$store.state.myapp.userName,
          soshikime: this.soshikime, 
          address: this.address, 
          tel: this.tel, 
          tantobusho: this.tantobusho,
          tantosha: this.tantosha,
          planname: userplanname, 
          mail: this.mail, 
          keiyakuhi: this.keiyakuhi, 
          keiyakushiki: this.keiyakushiki, 
          keiyakushuki: this.keiyakushuki
        }
        this.$store.dispatch(ACTIONS.MYAPP_USER_INSERT, params);

        this.routerPush('/UserKanri');
      }
    }
  }
}
export default {
  userInsertViewModel
}
