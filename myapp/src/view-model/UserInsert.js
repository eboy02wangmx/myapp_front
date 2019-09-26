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
      mailchkflg: null,
      psdchkflg: null
    }
  },
  created () {
    console.log('888888888888888888888888888888888')
    console.log(this.furiganase)
    let loginid = this.$store.state.myapp.userName
    this.loginid = loginid
    var tocreatekengen = localStorage.getItem('tocreatekengen')
    this.tocreatekengen = tocreatekengen
    let param1 = {userid: null}
    this.$store.dispatch(ACTIONS.MYAPP_GET_USERPLAN_INFO, param1)
  },
  mounted () {
    planList = this.$store.state.myapp.userPlanInfo.userplans
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
      this.mailchkflg = '0'
      this.psdchkflg = '0'
      console.log('insertinsertinsertinsertinsertinsertinsert')
      let userplanname = document.getElementById('planname1').value
      if(this.remail !== this.mail){
        this.mailchkflg = '1'
        console.log(this.mailchkflg)}
      if(this.repsd !== this.password){
        this.psdchkflg = '1'
        console.log(this.psdchkflg)
        return}
      if(this.mailchkflg === '0' && this.psdchkflg === '0'){
      let params = {userid: this.userid, furiganase: this.furiganase, furiganame: this.furiganame, kanjise: this.kanjise,
         kanjime: this.kanjime, password: this.password, customId: this.customId, loginid: this.$store.state.myapp.userName,
         soshikime: this.soshikime, address: this.address, tel: this.tel, tantobusho: this.tantobusho ,tantosha: this.tantosha,
         planname: userplanname, mail: this.mail, keiyakuhi: this.keiyakuhi, keiyakushiki: this.keiyakushiki, keiyakushuki: this.keiyakushuki}
      this.$store.dispatch(ACTIONS.MYAPP_USER_INSERT, params)
      this.routerPush('/Success')}
    }
  }
}
export default {
  userInsertViewModel
}
