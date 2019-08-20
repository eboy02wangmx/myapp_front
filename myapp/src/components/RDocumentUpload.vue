<!--
  - 審査依頼画面 アップロードフォーム
  -
  - see: 画面定義書_G-NHA-031_審査依頼_v1.0.xlsx
  -->
<template>
  <div class="r-step06c_ul">
    <label
      class="r-step06c_drag"
      :class="[
        {
          'is-drag': dragged
        }
      ]"
      @dragover.stop.prevent="onDragover"
      @dragleave="onDragleave"
      @drop.stop.prevent="onDrop"
    >
      <input
        ref="file"
        class="r-hidden"
        type="file"
        multiple="true"
        tabindex="-1"
        aria-hidden="true"
        @change="onChange"
      />
      <div class="r-step06c_drag_message">
        <div class="r-step06c_drag_message_title">ファイルを選択</div>
        <div class="r-step06c_drag_message_supplement">JPG、PNG画像ファイルまたはPDFファイルをご選択してください。<br>(５MB以上のファイルはアップロードできません。)</div>
        <div class="r-step06c_drag_message_selected" v-if="util.isEmpty(fileName)">クリックしてファイルを選択<br>またはアップロードするファイルをここにドラッグ</div>
        <div class="r-step06c_drag_message_selected" v-else>{{fileName}}</div>
      </div>
    </label>
    <div class="r-step06c_select" v-if="showDocType">
      <span>アップロード書類</span>
      <r-list-box v-model="docType" placeholder="ご選択してください">
        <option v-for="doc in documents" :key="doc.docType" :value="doc.docType">{{doc.text}}</option>
      </r-list-box>
    </div>
    <transition name="discount" @before-leave="resetKisaiUmu">
      <div class="r-step06c_radio" v-if="showInsurancePolicyDiscountDescription">
        <span>保険証券等に、<span>{{discount}}</span>と記載されていますか？</span>
        <r-radio style="border: 0px; padding: 2px; background-position: left 6px center;" v-model="withInsurancePolicyDiscountDescription" :option="1">はい</r-radio>
        <r-radio style="border: 0px; padding: 2px; background-position: left 6px center;" v-model="withInsurancePolicyDiscountDescription" :option="2">いいえ</r-radio>
      </div>
    </transition>
    <r-button class="r-step06c_uploadBtn" @click="doUpload" :disabled="!canUpdate">アップロード</r-button>
    <p class="r-step06c_text">最大{{length}}枚までアップロード可能です。</p>
    <div class="r-step06c_arrow_2"><img src="../assets/images/r-arrow.png" width="36" height="24" alt="next arrow"></div>
    <table class="r-step06c_ulBox" v-for="(value, index) in indices" :key="index" v-if="fileList.filter(item => item.fileType === fileType).length > 0">
      <tr>
        <td class="r-step06c_ulName" v-for="i in value" :key="i">{{preview[i].fileName}}</td>
      </tr>
      <tr>
        <td v-for="i in value" :key="i">
          <img class="r-step06c_ulTmb" :src="`data:image/png;base64,${preview[i].thumbnail}`"/>
        </td>
      </tr>
      <tr>
        <td class="r-step06c_ulDoc" v-for="i in value" :key="i">{{getDocText(preview[i].docType)}}</td>
      </tr>
      <tr>
        <td class="r-step06c_ulBtn" v-for="i in value" :key="i">
          <div class="r-step06c_ulArrow"><img src="../assets/images/r-arrow_up.png" width="14" height="9" alt="arrow to target"></div>
          <r-button class="r-step06c_deleteBtn" @click="doDelete(preview[i].fileId)" :disabled="util.isEmpty(preview[i].fileName)">削除</r-button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import {ACTIONS} from '@/store/action-types'
import util from '@/util'

export default {
  name: 'RDocumentUpload',
  data () {
    return {
      util: util,

      cols: 5,
      dragged: false,
      file: null,
      docType: null,
      withInsurancePolicyDiscountDescription: null
    }
  },
  props: {
    fileType: {
      type: Number,
      required: true
    },
    documents: {
      type: Array,
      required: true,
      validator: (value) => {
        const ret = value.filter(item =>
          item.docType === undefined ||
          item.text === undefined
        )
        return ret.length === 0
      }
    },
    discount: {
      type: String,
      default: null
    },
    length: {
      type: Number,
      default: 10
    },
    showDocType: {
      type: Boolean,
      default: true
    },
    defaultDocType: {
      type: String,
      default: null
    }
  },
  computed: {
    data () {
      return this.$store.state.myapp.data
    },
    fileList () {
      return this.$store.state.myapp.fileList
    },
    fillLength () {
      const preview = this.fileList.filter(item => item.fileType === this.fileType)
      const fillLen = Math.ceil(preview.length / (this.cols)) * (this.cols)
      return fillLen < 10 ? 10 : fillLen
    },
    preview () {
      const preview = this.fileList.filter(item => item.fileType === this.fileType)
      for (let i = preview.length; i < this.fillLength; i++) {
        preview.push(
          {
            fileId: -i,
            fileType: null,
            fileName: null,
            docType: null,
            withInsurancePolicyDiscountDescription: null,
            thumbnail: 'iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAIAAAC2BqGFAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMjHxIGmVAAABCElEQVR4Xu3QMQEAAAzDoPk33bngChK4hSgaKRopGikaKRopGikaKRopGikaKRopGikaKRopGikaKRopGikaKRopGikaKRopGikaKRopGikaKRopGikaKRopGikaKRopGikaKRopGikaKRopGikaKRopGikaKRopGikaKRopGikaKRopGikaKRopGikaKRopGikaKRopGikaKRopGikaKRopGikaKRopGikaKRopGikaKRopGikaKRopGikaKRopGikaKRopGikaKRopGikaKRopGikaKRopGikaKRopGikaKRopGikaKRopGikaKRopGikaKRopGikaKRopGikaKRopGikaKZrYHlf3IRlbDAvQAAAAAElFTkSuQmCC'
          }
        )
      }
      return preview
    },
    fileName () {
      return this.file ? this.file.name : null
    },
    canUpdate () {
      if (util.isEmpty(this.fileName)) {
        return false
      }
      if (util.isEmpty(this.docType) && this.showDocType) {
        return false
      }
      if (this.showInsurancePolicyDiscountDescription) {
        if (util.isEmpty(this.withInsurancePolicyDiscountDescription)) {
          return false
        }
      }

      const preview = this.fileList.filter(item => item.fileType === this.fileType)
      return preview.length < this.length
    },
    showInsurancePolicyDiscountDescription () {
      if (util.isEmpty(this.discount)) {
        return false
      }
      if (this.docType !== '02') {
        return false
      }

      return true
    },
    indices () {
      const indices = []

      let row = 0
      let col = 0
      indices.push([])
      for (let i = 0; i < this.fillLength; i++) {
        if (col >= this.cols) {
          row++
          col = 0
          indices.push([])
        }
        indices[row].push(i)
        col++
      }

      return indices
    }
  },
  methods: {
    onDragover (event) {
      event.dataTransfer.dropEffect = 'copy'
      this.dragged = true
    },
    onDragleave (event) {
      this.dragged = false
    },
    onDrop (event) {
      this.dragged = false
      if (event.dataTransfer.files.length > 0) {
        this.file = event.dataTransfer.files[0]
      }
    },
    onChange (event) {
      const src = event.srcElement || event.target
      if (src.files.length > 0) {
        this.file = src.files[0]
      }
    },
    doUpload () {
      const request = {
        fileType: this.fileType,
        fileName: this.fileName,
        docType: this.showDocType ? this.docType : this.defaultDocType,
        withInsurancePolicyDiscountDescription: this.withInsurancePolicyDiscountDescription === 1 ? 1 : 2,
        file: this.file
      }
      const unwatch = this.$store.watch(() => this.$store.state.myapp.sync[ACTIONS.MYAPP_SVR_FILE_UPLOAD].doing, (newValue, oldValue) => {
        if (oldValue === true && newValue === false) {
          if (this.$store.state.myapp.sync[ACTIONS.MYAPP_SVR_FILE_UPLOAD].status === 200) {
            this.docType = null
            this.file = null
            this.$refs.file.value = ''
            this.doneUpload()
          } else {
            this.$store.dispatch(ACTIONS.ERROR_OPEN_API_ERRORS)
          }
          unwatch()
        }
      })
      this.$store.dispatch(ACTIONS.MYAPP_SVR_FILE_UPLOAD, request)
    },
    doneUpload () {
    },
    doDelete (fileId) {
      const unwatch = this.$store.watch(() => this.$store.state.myapp.sync[ACTIONS.MYAPP_SVR_FILE_DELETE].doing, (newValue, oldValue) => {
        if (oldValue === true && newValue === false) {
          if (this.$store.state.myapp.sync[ACTIONS.MYAPP_SVR_FILE_DELETE].status !== 200) {
            this.$store.dispatch(ACTIONS.ERROR_OPEN_API_ERRORS)
          }
          unwatch()
        }
      })
      this.$store.dispatch(ACTIONS.MYAPP_SVR_FILE_DELETE, {fileNo: fileId})
    },
    resetKisaiUmu () {
      this.withInsurancePolicyDiscountDescription = null
    },
    getDocText (docType) {
      for (const doc of this.documents) {
        if (docType === doc.docType) {
          return doc.text
        }
      }

      return null
    }
  }
}
</script>
<style scoped>
.r-step06c_ul {
  width: 100%;
  background: #f7f7f7;
  border-radius: 20px;
  text-align: center;
  margin: 45px 0 0;
  padding: 45px 0 0;
}
.r-step06c_select {
  margin: 0px 0 0;
}
.r-step06c_select span {
  font-weight: bold;
}
.r-step06c_select .r-list-box {
  width: 440px;
  height: 50px;
  margin: 0 5px;
  padding: 10px 40px 10px 20px;
  font-size: 0.9em;
}
.r-step06c_drag {
  display: block;
  width: 600px;
  height: 350px;
  background: #ffffff;
  border: 1px #acacac dashed;
  margin: 0 auto 30px;
}
.r-step06c_drag.is-drag {
  border: 1px #cf1623 dashed;
}
.r-step06c_drag_message {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.r-step06c_drag_message_title {
  width: 100%;
  font-size: 1.4em;
  font-weight: bold;
  vertical-align: bottom;
}
.r-step06c_drag_message_title:after {
  content: url(../assets/images/r-dragIcon.png);
  position: relative;
  top: 6px;
  margin-left: 8px;
}
.r-step06c_drag_message_supplement {
  font-size: 0.9em;
}
.r-step06c_drag_message_selected {
  margin-top: 50px;
  color: #666666;
  line-height: 1.6;
}
.r-step06c_radio {
  margin: 20px 0 -12px;
}
.r-step06c_radio > span {
  margin: 0 25px 0 0;
}
.r-step06c_radio > span > span {
  color: #e14b79;
  font-weight: bold !important;
}
.r-step06c_ul > .r-button {
  width: 240px;
  margin: 30px auto 0;
}
.r-step06c_ul > .r-button:hover {
  opacity: 0.8;
}
.r-step06c_uploadBtn {
  width: 240px;
  height: 60px;
  border-radius: 40px;
  font-size: 1.5em;
  line-height: 60px;
  color: #ffffff;
  text-align: center;
  background: #ff9600;
  border: none;
}
.r-step06c_text {
  color: #e14b79;
  font-size: 0.9em;
  line-height: 1;
  font-weight: bold;
  margin: 20px 0 0;
}
.r-step06c_arrow_2 {
  margin: 25px 0 20px;
  line-height: 0;
}
.r-step06c_ulBox {
  width: 850px;
  margin: 0 auto;
  border-spacing: 0;
  word-break: break-all;
}
.r-step06c_ulBox td {
  width: 170px;
  box-sizing: border-box;
  padding: 0 5px;
}
.r-step06c_ulName {
  width: 100%;
  color: #666666;
  font-size: 0.8em;
  line-height: 1.2;
  padding-bottom: 8px !important;
  text-align: left;
  vertical-align: top;
}
.r-step06c_ulDoc {
  font-size: 0.9em;
  line-height: 1.2;
  vertical-align: top;
}
.r-step06c_ulTmb {
  width: 160px;
  height: 160px;
  background: #ffffff;
  box-sizing: border-box;
  border: 1px #acacac dashed;
}
.r-step06c_ulBtn {
  padding-bottom: 60px !important;
  vertical-align: top;
}
.r-step06c_ulArrow {
  margin: 8px 0;
  text-align: center;
  line-height: 0;
}
.r-step06c_deleteBtn {
  width: 160px;
  height: 30px;
  background: #cccccc;
  color: #333333;
  font-size: 0.9em;
  line-height: 30px;
  border-radius: 20px;
  border: none;
}
.r-step06c_deleteBtn:hover {
  opacity: 0.8;
}

.discount-enter-active, .discount-leave-active {
  transition: opacity .35s;
}
.discount-enter, .discount-leave-to {
  opacity: 0;
}
</style>
