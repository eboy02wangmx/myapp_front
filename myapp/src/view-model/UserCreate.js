import { ACTIONS } from '@/store/action-types'
export const userCreateViewModel = {
  name: 'UserCreate',
  data () {
    return {
      userId: this.$store.state.myapp.userName,
      furiganase: null,
      furiganame: null,
      kanjise: null,
      kanjime: null,
      password: null,
      repsd: null,
      mailChkFlg: null,
      psdChkFlg: null,
      planname: null,
      planList: this.$store.state.myapp.userInfo.userplans
    }
  },
  created () {
    let loginid = this.$store.state.myapp.userName
    this.loginid = loginid
    var param = localStorage.getItem('userid')
    this.param = param
    var tocreatekengen = localStorage.getItem('tocreatekengen')
    this.tocreatekengen = tocreatekengen
    let userInfo = {userid: this.param}
    this.$store.dispatch(ACTIONS.MYAPP_GET_USER_INFO, userInfo)
  },
  mounted () {
    this.mailChkFlg = '0'
    this.psdChkFlg = '0'
  },
  computed: {
    planList (){
      return this.$store.state.myapp.userInfo.userplans
    },
    isError: function () {
      return this.$store.state.configs.parameterError
    },
    isDevelop () {
      if (process.env.NODE_ENV === 'development') {
        return true
      }
      return false
    },
    account () {
      return this.param
    },
    createItems: function () {
      return this.$store.state.myapp.userInfo
    }
  },
  methods: {
    koushin () {
      var checkFlag = true;
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
      if(password !== repsd){
        $('#userInsertPasswordErr').text('※パスワードとパスワード再入力が不一致です！');
        checkFlag = false;
      } else {
        $('#userInsertPasswordErr').text('');
      }
      if(checkFlag){
        let params = {
          userid: $('#userCreateUserId').val(), 
          name: $('#userCreateName').val(), 
          password: $('#userCreatePassword').val(), 
          planname: $('#userCreatePlanname').val(), 
          soshikime: $('#userCreateSoshikime').val(), 
          address: $('#userCreateAddress').val(), 
          tel: $('#userCreateTel').val(), 
          tantobusho: $('#userCreateTantobusho').val(), 
          tantosha: $('#userCreateTantosha').val(), 
          mail: $('#userCreateMail').val(), 
          keiyakuhi: $('#userCreateKeiyakuhi').val(), 
          keiyakushiki: $('#userCreateKeiyakushiki').val(), 
          keiyakushuki: $('#userCreateKeiyakushuki').val(),
        }
        $.ajax({
          //url: 'http://localhost:8080/myapp-backend/api/userCreate',
          url: 'http://203.189.97.178:8080/myapp-backend/api/userCreate',
          type: 'POST',
          context: this,
          data: JSON.stringify(params),
          processData: false,
          contentType : 'application/json;charset=UTF-8',
          success: function () {
            this.routerPush('/UserKanri')
          }
        });
      }
    }
  }
}
export default {
  userCreateViewModel
}
