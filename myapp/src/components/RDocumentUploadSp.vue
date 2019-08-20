<!--
  - 審査依頼画面 アップロードフォーム
  -
  - see: 画面定義書_G-NHA-031_審査依頼_v1.0.xlsx
  -->
<template>
  <div class="r-step06c_ul">
    <input
      ref="file"
      class="r-hidden"
      type="file"
      multiple="true"
      tabindex="-1"
      aria-hidden="true"
    />
    <input
      ref="albam"
      class="r-hidden"
      type="file"
      tabindex="-1"
      aria-hidden="true"
      @change="onChangeAlbam"
    />
    <input
      ref="camera"
      class="r-hidden"
      type="file"
      accept="image/*;capture=camera"
      tabindex="-1"
      aria-hidden="true"
      capture
      @change="onChangeCamera"
    />
    <r-button class="r-step06c_fileupBtn" @click="albam">アルバムから選択</r-button>
    <r-button class="r-step06c_fileupBtn" @click="camera">写真を撮影</r-button>
    <div class="r-step06c_select" v-if="showDocType">
      <span>アップロード書類</span>
      <r-list-box v-model="docType" placeholder="ご選択してください。">
        <option v-for="doc in documents" :key="doc.docType" :value="doc.docType">{{doc.text}}</option>
      </r-list-box>
    </div>
    <div class="r-step06c_select" v-if="!showDocType">
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
    <div class="r-step06c_arrow_2"><img src="../assets/sp/images/r-arrow.png" width="50" height="34" alt="next arrow"></div>
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
          <div class="r-step06c_ulArrow"><img src="../assets/sp/images/r-arrow_up.png" width="14" height="9" alt="arrow to target"></div>
          <r-button class="r-step06c_deleteBtn" @click="doDelete(preview[i].fileId)" :disabled="util.isEmpty(preview[i].fileName)">削除</r-button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script>
import RDocumentUpload from '@/components/RDocumentUpload'

export default {
  mixins: [RDocumentUpload],
  name: 'RDocumentUploadSp',
  data () {
    return {
      cols: 2
    }
  },
  methods: {
    doneUpload () {
      this.$refs.albam.value = ''
      this.$refs.camera.value = ''
    },
    albam () {
      // アルバムから選択
      this.$refs.albam.click()
    },
    camera () {
      // カメラ起動
      this.$refs.camera.click()
    },
    onChangeAlbam () {
      if (this.$refs.albam.files.length > 0) {
        this.file = this.$refs.albam.files[0]
      }
    },
    onChangeCamera () {
      if (this.$refs.camera.files.length > 0) {
        this.file = this.$refs.camera.files[0]
      }
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
  box-sizing: border-box;
  margin: 25px 0 0;
  padding: 25px 10px 0;
}
.r-step06c_fileupBtn {
  width: 48%;
  height: 70px;
  border-radius: 8px;
  font-size: 1em;
  font-weight: bold;
  text-align: center;
  background: #ffffff;
  border: 2px #cccccc solid;
  vertical-align: top;
}
.r-step06c_select {
  width: 100%;
  margin: 20px 0 20px;
}
.r-step06c_select span {
  width: 100%;
  display: block;
  font-size: 90%;
  line-height: 1;
  font-weight: bold;
  box-sizing: border-box;
  margin: 0 0 5px;
  padding: 0 0 0 10px;
  text-align: left;
}
.r-step06c_select .r-list-box {
  width: 100%;
  height: 36px;
  margin: 0 5px;
  padding: 0 40px 0 20px;
  font-size: 0.9em;
}
.r-step06c_radio {
  width: 100%;
  margin: 0 0 15px;
}
.r-step06c_radio > span {
  display: block;
  font-size: 0.85em;
  text-align: center;
  font-weight: bold;
  margin: 0 0 10px;
}
.r-step06c_radio > span > span {
  color: #e14b79;
  font-weight: bold !important;
}
.r-step06c_ulBox {
  width: 100%;
  margin: 0 auto;
  border-spacing: 0;
  word-break: break-all;
}
.r-step06c_ulBox td {
  width: 50%;
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
  width: 40vw;
  height: 40vw;
  background: #ffffff;
  box-sizing: border-box;
  border: 1px #acacac dashed;
}
.r-step06c_ulBtn {
  padding-bottom: 30px !important;
  vertical-align: top;
}
.r-step06c_uploadBtn {
  display: block;
  width: 200px;
  height: 50px;
  border-radius: 40px;
  font-size: 1.3em;
  line-height: 50px;
  color: #ffffff;
  background: #ff9600;
  border: none;
  margin: 0 auto;
}
.r-step06c_text {
  color: #e14b79;
  font-size: 0.8em;
  line-height: 1;
  font-weight: bold;
  margin: 15px 0 0;
}
.r-step06c_arrow_2 {
  width: 25px;
  margin: 20px auto;
  line-height: 0;
}
.r-step06c_arrow_2 img {
  width: 100%;
  height: auto;
}
.r-step06c_ulArrow {
  width: 11px;
  margin: 7px auto;
  text-align: center;
  line-height: 0;
}
.r-step06c_ulArrow img {
  width: 100%;
  height: auto;
}
.r-step06c_deleteBtn {
  display: block;
  width: 40vw;
  height: 30px;
  margin: 0 auto;
  background: #cccccc;
  color: #333333;
  font-size: 0.9em;
  line-height: 30px;
  border-radius: 20px;
  box-sizing: border-box;
  border: none;
}
.r-step06c_deleteBtn:hover {
  opacity: 0.8;
}
</style>
