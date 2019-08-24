/**
 * TOP画面
 *
 * see: 画面定義書_G-NHA-002_ALBUM画面_v1.1.xlsx
 */
// import {ACTIONS} from '@/store/action-types'
import {MUTATIONS} from '@/store/mutation-types'
import axios from 'axios'
export const imagesViewModel = {
  name: 'Images',
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
      policyNo: null,
      uploadFile: null
    }
  },
  created () {
    if (this.$route.query.entryType !== undefined && this.$route.query.entryType !== '') {
      this.$store.commit(MUTATIONS.HOMEASSIST_SET_ENTRY_TYPE, this.$route.query.entryType)
    }
    // this.$store.dispatch(ACTIONS.READ_NOTICE_LIST, {goodsType: '1', entryType: this.$store.state.homeassist.entryType})
    this.agentList = this.$store.state.configs.agentList
    this.agentCode = this.$store.state.configs.agentCode
    this.$watch('$store.state.configs.agentCode', (newValue, oldValue) => {
      this.agentCode = newValue
    })
    this.$watch('$store.state.configs.agentList', (newValue, oldValue) => {
      this.agentList = newValue
    })
    this.$watch('$store.state.homeassist.entryNo', (newValue, oldValue) => {
      console.log('$store.state.homeassist.entryNo new value is=' + newValue)
      this.entryNo = newValue
    })
    this.policyNo = ''
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
    selectedFile (e) {
      // 選択された File の情報を保存しておく
      e.preventDefault()
      let files = e.target.files
      this.uploadFile = files[0]
    },
    upload () {
      // FormData を利用して File を POST する
      let formData = new FormData()
      formData.append('yourFileKey', this.uploadFile)
      let config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }
      axios.post('/fileupload', formData, config)
        .then(response => {
          // response 処理
        })
        .catch()
        .finally()
      // this.$store.dispatch(ACTIONS.FILE_UPLOAD, {file: this.uploadFile})
    }
  }
}
export default {
  imagesViewModel
}
