/**
 * TOP画面
 *
 * see: 画面定義書_G-NHA-001_TOP画面_v1.1.xlsx
 */
import {ACTIONS} from '@/store/action-types'
import {MUTATIONS} from '@/store/mutation-types'
import locationURL from '@/locationURL'

export const topViewModel = {
  name: 'Top',
  data () {
    return {
      entryNo: null,
      setEntryNo: null,
      mail: null,
      agentCode: null,
      showPrintListFlag: false,
      selectIndex: null,
      pageNo: 1,
      pageSize: 10,
      agentList: [],
      downloading: false,
      policyNo: null
    }
  },
  created () {
    this.$store.dispatch(ACTIONS.MYAPP_CLEAR)
    if (this.$route.query.entryType !== undefined && this.$route.query.entryType !== '') {
      this.$store.commit(MUTATIONS.MYAPP_SET_ENTRY_TYPE, this.$route.query.entryType)
    }
    // this.$store.dispatch(ACTIONS.READ_NOTICE_LIST, {goodsType: '1', entryType: this.$store.state.myapp.entryType})
    this.agentList = this.$store.state.configs.agentList
    this.agentCode = this.$store.state.configs.agentCode
    this.$watch('$store.state.configs.agentCode', (newValue, oldValue) => {
      this.agentCode = newValue
    })
    this.$watch('$store.state.configs.agentList', (newValue, oldValue) => {
      this.agentList = newValue
    })
    this.$watch('$store.state.myapp.entryNo', (newValue, oldValue) => {
      console.log('$store.state.myapp.entryNo new value is=' + newValue)
      this.entryNo = newValue
    })
    this.policyNo = this.$store.state.myapp.data.policy
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
    entryType () {
      return this.$store.state.myapp.entryType
    },
    noticeList () {
      return this.$store.state.top.noticeList
    },
    entryNoList () {
      return this.$store.state.myapp.entryNoList
    },
    totalSize () {
      return this.$store.state.myapp.totalSize
    },
    maxPageNo () {
      const p = this.$store.state.top.totalSize / this.pageSize
      return (this.$store.state.top.totalSize % this.pageSize === 0) ? p : Math.ceil(p)
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
    isDisplayAgentList () {
      return this.agentList !== null && this.agentList !== [] && this.agentList !== undefined && this.agentList.length !== 0
    },
    getPolicyNo () {
      console.log('getPolicyNo:' + this.policyNo)
      if (this.policyNo === null || this.policyNo === undefined) {
        console.log('dispatch start')
        this.$store.dispatch(ACTIONS.MYAPP_GEN_POLICY_NO)
      }
    },
    startByTransfer () {
      this.$store.dispatch(ACTIONS.MYAPP_SAVE, {withOldContract: 1})
      if (this.entryType === '1') {
        if (this.$root.isMobile.any === true) {
          this.$store.dispatch(ACTIONS.POPUP_OPEN, {name: 'AlertItemsSp', showScrollBtn: true})
        } else {
          this.$store.dispatch(ACTIONS.POPUP_OPEN, {name: 'AlertItems', showScrollBtn: true})
        }
      } else {
        // this.getPolicyNo()
        this.$router.push('/Building')
      }
    },
    startByNew () {
      this.$store.dispatch(ACTIONS.MYAPP_SAVE, {withOldContract: 2})
      if (this.entryType === '1') {
        if (this.$root.isMobile.any === true) {
          this.$store.dispatch(ACTIONS.POPUP_OPEN, {name: 'AlertItemsSp', showScrollBtn: true})
        } else {
          this.$store.dispatch(ACTIONS.POPUP_OPEN, {name: 'AlertItems', showScrollBtn: true})
        }
      } else {
        // this.getPolicyNo()
        this.$router.push('/Building')
      }
    },
    async readEntryTempSave () {
      var request = null
      var paramEntryNo = this.entryNo
      if (this.entryType === '1') {
        request = {
          screenID: this.$options.name,
          mail: this.mail,
          // entryNo: this.entryNo,
          entryNo: paramEntryNo,
          entryType: this.entryType
        }
      } else if (this.entryType === '2') {
        request = {
          screenID: this.$options.name,
          agentCode: this.agentCode,
          // entryNo: this.entryNo,
          entryNo: paramEntryNo,
          entryType: this.entryType
        }
      }

      await this.$store.dispatch(ACTIONS.MYAPP_SVR_CHECK, request)
      if (this.$store.state.myapp.sync[ACTIONS.MYAPP_SVR_CHECK].status !== 200) {
        this.$store.dispatch(ACTIONS.ERROR_OPEN_API_ERRORS)
        return
      }

      await this.$store.dispatch(ACTIONS.MYAPP_SVR_ENTRY_LOAD, request)
      if (this.$store.state.myapp.sync[ACTIONS.MYAPP_SVR_ENTRY_LOAD].status !== 200) {
        this.$store.dispatch(ACTIONS.ERROR_OPEN_API_ERRORS)
        return
      } else {
        this.$store.dispatch(ACTIONS.MYAPP_SET_ENTRY_NO, this.entryNo)
      }

      // vsts3235 始期日alertがあった場合の分岐(APIで指定された画面へ遷移)
      if (this.$store.state.myapp.alertInfo &&
        this.$store.state.myapp.alertInfo.startDate &&
        this.$store.state.myapp.alertInfo.startDate.messageDesc &&
        (this.$store.state.myapp.data.entryStatus === 1)) {
        // Confirmパターン
        // const unwatch = this.$store.watch(() => this.$store.state.errors.confirmReturn, (newValue, oldValue) => {
        //   if (oldValue === false && newValue === true) {
        //     if (this.$store.state.errors.confirmReturn === true) {
        //       this.routerPush(this.$store.state.myapp.data.screenID)
        //     }
        //     unwatch()
        //   }
        // })
        // this.$store.dispatch(ACTIONS.ERROR_OPEN_CONFIRM, this.$store.state.myapp.alertInfo.startDate.messageDesc)
        this.routerPush(this.$store.state.myapp.data.screenID)
        this.$store.dispatch(ACTIONS.ERROR_OPEN, this.$store.state.myapp.alertInfo.startDate.messageDesc)
        this.$store.commit(MUTATIONS.MYAPP_SET_ALERT_INFO, {})
      } else if (this.$store.state.myapp.data.entryStatus === 2 || this.$store.state.myapp.data.entryStatus === '2') {
        this.$router.push('/ExaminationComplete')
      } else {
        // 始期日Alrert無い場合は通常
        this.routerPush(this.$store.state.myapp.data.screenID)
      }
    },
    openEntryNoReinform () {
      if (this.$root.isMobile.any === false) {
        this.$store.dispatch(ACTIONS.POPUP_OPEN, 'EntryNoReinform')
      } else {
        this.$store.dispatch(ACTIONS.POPUP_OPEN, 'EntryNoReinformSp')
      }
    },
    showPrintList () {
      this.showPrintListFlag = !this.showPrintListFlag
      this.$store.commit(MUTATIONS.CLEAR_ENTRY_NO_LIST)
      this.selectIndex = null
      this.searchPrintList(1)
    },
    changeAgentCode () {
      console.log('changeagentcode before this.entryNo =' + this.entryNo)
      this.entryNo = null
      this.$store.commit(MUTATIONS.CLEAR_ENTRY_NO_LIST)
      console.log('changeagentcode this.entryNo =' + this.entryNo)
      console.log('Top agentCode =' + this.agentCode)
      this.$store.dispatch(ACTIONS.MYAPP_AGENT_SHARE_INPUT_GET_AGENTCD_LIST_NEW, { pattern: 3, agentCode: this.agentCode })
      // this.$store.dispatch(ACTIONS.CONFIGS_INIT, {entry_type: this.entryType, agent_code: this.agentCode})
    },
    searchPrintList (pageNo) {
      this.$store.dispatch(ACTIONS.MYAPP_READ_ENTRY_NO_LIST, {agentCode: this.agentCode, pageNo: pageNo, pageSize: this.pageSize})
      // this.$store.dispatch(ACTIONS.MYAPP_READ_ENTRY_NO_LIST, {agentCode: '1234567890', pageNo: pageNo, pageSize: this.pageSize})
    },
    nextPage () {
      this.pageNo = this.pageNo + 1
      this.searchPrintList(this.pageNo)
      this.selectIndex = null
    },
    prePage () {
      this.pageNo = this.pageNo - 1
      this.searchPrintList(this.pageNo)
      this.selectIndex = null
    },
    selectPrint (chooseIndex) {
      this.entryNo = this.entryNoList[chooseIndex].entryNo
      console.log('select entryNo=' + this.entryNoList[chooseIndex].entryNo)
      this.$store.dispatch(ACTIONS.MYAPP_SET_ENTRY_NO, this.entryNoList[chooseIndex])
      console.log('store entryNo=' + this.$store.state.myapp.entryNo)
      this.$store.dispatch(ACTIONS.POPUP_CLOSE)
    },
    myPage () {
      locationURL.go(process.env.SERVER_URL + 'mypage/')
    },
    startDownload (response, pdfType) {
      if (!response) {
        console.log('isnull' + response)
        return
      }
      console.log('start download')
      let blob = new Blob([response])
      let fileName = '口座振替依頼書.pdf'
      if (pdfType === '7' || pdfType === '9') {
        fileName = '口座振替申込書.pdf'
      } else if (pdfType === '8' || pdfType === '10') {
        fileName = '口座振替依頼書.pdf'
      }
      if ('download' in document.createElement('a')) {
        console.log('this is not ie')
        let url = window.URL.createObjectURL(blob)
        console.log('url=' + url)
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', fileName)
        document.body.appendChild(link)
        link.click()
      } else {
        console.log('download for ie')
        navigator.msSaveBlob(blob, fileName)
      }
    },
    async createPdf (data) {
      console.log('start createpdf')
    },
    doPrint3 () {
      this.$store.dispatch(ACTIONS.MYAPP_SVR_FILE_DELETE, {fileNo: '1333'})
    },
    async doPrint () {
      if (this.downloading) {
        console.log('print 依頼書印刷中...')
        return
      }
      this.downloading = true
      console.log('print 依頼書')
      let dependencyData = {}
      // 実行 1
      let self = this
      dependencyData.hShumoku = '' // 火災
      dependencyData.idoUkeKbn = '' // 取扱事由"
      dependencyData.pdfType = '7'
      await self.createPdf(dependencyData).then(function () {
        console.log('1')
        dependencyData.pdfType = '8'
        self.createPdf(dependencyData).then(function () {
          console.log('2')
          dependencyData.pdfType = '9'
          self.createPdf(dependencyData).then(function () {
            console.log('3')
            dependencyData.pdfType = '10'
            self.createPdf(dependencyData).then(function () {
              console.log('4')
              self.downloading = false
              console.log('print 依頼書終了')
            })
          })
        })
      })
    },
    doPrint_leacy () {
      console.log('print 依頼書')
      let dependencyData = {}
      dependencyData.pdfType = '0'
      const unwatch = this.$store.watch(() => this.$store.state.myapp.sync[ACTIONS.MYAPP_GEN_PDF].doing, (newValue, oldValue) => {
        if (oldValue === true && newValue === false) {
          if (this.$store.state.myapp.sync[ACTIONS.MYAPP_GEN_PDF].status === 200) {
          } else {
            this.$store.dispatch(ACTIONS.ERROR_OPEN_API_ERRORS)
          }
          unwatch()
        }
      })
      // 印刷書
      this.$store.dispatch(ACTIONS.MYAPP_GEN_PDF, dependencyData)
    }
  }
}

export default {
  topViewModel
}
