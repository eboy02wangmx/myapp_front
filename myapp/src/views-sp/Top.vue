<!--
  - TOP画面
  -
  - see: 画面定義書_G-NHA-001_TOP画面_v1.1.xlsx
  -->
<template>
  <div>
    <div class="r-block r-block_top01" v-if="$store.state.configs.notice !== null">
      <dl class="r-top_info">
        <dt>&lt;&lt; 楽天損保からのお知らせ &gt;&gt;</dt>
        <dd v-html="$store.state.configs.notice"></dd>
      </dl>
    </div>
    <div class="r-block r-block_top02">
      <div class="r-top_start">
        <r-button class="r-top_startBtn01" @click="startByTransfer" :disabled = "isError">
          <img src="../assets/sp/images/r-top_startBtn01.png" width="430" height="170" alt="試算スタート">
        </r-button>
        <r-button class="r-top_startBtn02" @click="startByNew" :disabled = "isError">
          <img src="../assets/sp/images/r-top_startBtn02.png" width="430" height="170" alt="他社の火災保険に加入中の方はこちら。試算スタート">
        </r-button>
      </div>
      <div class="r-top_datacall r-clearfix">
        <h3 class="orange">過去に当サイトで試算済の場合</h3>
        <p>または</p>
        <h3 class="pink">審査完了のお知らせが届いた場合</h3>
        <p>マイページからお手続きを<br>再開することができます。</p>
        <div class="r-top_datacallC"><img src="../assets/sp/images/r-arrow.png" width="50" height="34" alt=""></div>
        <div class="r-top_datacallR">
          <r-button class="r-top_datacallBtn" @click="myPage">
            <img src="../assets/sp/images/r-top_MypageBtn01.png" width="350" height="70" alt="過去に当サイトで試算済の場合。再呼び出し">
          </r-button>
        </div>
      </div>
      <div class="r-top_datacall r-clearfix" v-if="isDevelop">
        <h3 class="orange">過去に当サイトで試算済の場合</h3>
        <p>または</p>
        <h3 class="pink">審査完了のお知らせが届いた場合</h3>
        <p><span>メールアドレス</span>と<span>申込依頼No.</span>をご入力の上、<br/>「再呼び出し」ボタンをクリックしてください。</p>
        <div class="r-top_datacallL">
          <r-text-box class="r-top_input01" type="email" placeholder="メールアドレス" v-model="mail" maxlength="254"/>
          <r-text-box class="r-top_input02" placeholder="申込依頼No." v-model="entryNo" maxlength="6"/>
          <p class="r-popup"><r-link-button @click="openEntryNoReinform">申込依頼No.が分からない場合はこちら</r-link-button></p>
        </div>
        <div class="r-top_datacallC"><img src="../assets/sp/images/r-arrow.png" width="50" height="34" alt=""></div>
        <div class="r-top_datacallR">
          <r-button class="r-top_datacallBtn" @click="readEntryTempSave">
            <img src="../assets/sp/images/r-top_datacallBtn.png" width="350" height="120" alt="過去に当サイトで試算済の場合。再呼び出し">
          </r-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {topViewModel} from '@/view-model/Top'

export default {
  mixins: [topViewModel]
}
</script>
<style scoped>
.r-block_top01 {
  margin: 0;
  padding: 10px 10px 10px !important;
}
.r-block_top02 {
  border-bottom: none !important;
  margin: 0 !important;
}
.r-top_info {
  width: 100%;
}
.r-top_info dt {
  color: #b80011;
  font-size: 1.1em;
  line-height: 1;
  text-align: center;
  font-weight: bold;
  margin: 5px 0 12px;
}
.r-top_info dd {
  color: #666666;
  font-size: 0.9em;
  line-height: 1.8;
  border-top: 1px #cccccc solid;
  border-bottom: 1px #cccccc solid;
  padding: 15px 5px 15px;
  box-sizing: border-box;
}
.r-top_start .r-button {
  width: 100%;
  max-width: 430px;
  margin: 0 auto 20px;
}
.r-top_startBtn01 {
  display: block;
  width: 100%;
  background: -moz-linear-gradient(top, #6db7f6, #0470cb);
  background: -webkit-linear-gradient(top, #6db7f6, #0470cb);
  background: linear-gradient(to bottom, #6db7f6, #0470cb);
  border-radius: 16px;
  line-height: 0;
  border: none;
  appearance: none;
  -webkit-appearance: none;
}
.r-top_startBtn02 {
  display: block;
  width: 100%;
  background: -moz-linear-gradient(top, #81c936, #559e0a);
  background: -webkit-linear-gradient(top, #81c936, #559e0a);
  background: linear-gradient(to bottom, #81c936, #559e0a);
  border-radius: 16px;
  line-height: 0;
  border: none;
  appearance: none;
  -webkit-appearance: none;
}
.r-top_startBtn01 img,.r-top_startBtn02 img {
  width: 100%;
  height: auto;
}
.r-top_datacall {
  width: 100%;
  background: #eeeeee;
  margin: 50px auto 25px;
  padding: 30px 15px 35px;
  box-sizing: border-box;
}
.r-top_datacall h3 {
  display: inline-block;
  width: 100%;
  height: 40px;
  color: #ffffff;
  font-size: 1em;
  line-height: 40px;
  background: #e27313;
  margin: 0 0 15px;
  border-radius: 20px;
  text-align: center;
}
.r-top_datacall h3.orange {
  background: #e27313;
}
.r-top_datacall h3.pink {
  background: #FF8080;
}
.r-top_datacall > p {
  font-size: 0.85em;
  line-height: 1.6;
  margin: 0 0 20px;
  text-align: center;
}
.r-top_datacall > p > span {
  color: #cf1623;
}
.r-top_datacallL {
  width: 100%;
}
.r-top_input01,.r-top_input02 {
  height: 40px;
  vertical-align: middle;
}
.r-top_input01 {
  width: 100%;
  margin: 0 0 20px;
}
.r-top_input02 {
  width: 100%;
  margin: 0 0 10px;
}
.r-top_datacallL > p {
  text-align: center;
  margin: 15px 0 0;
}
.r-top_datacallC {
  width: 25px;
  height: 17px;
  margin: 17px auto 15px;
}
.r-top_datacallC img {
  width: 100%;
  height: auto;
}
.r-top_datacallR {
  width: 100%;
}
.r-top_datacallBtn {
  display: block;
  width: 100%;
  max-width: 430px;
  background: -moz-linear-gradient(top, #ff9445, #db6b06);
  background: -webkit-linear-gradient(top, #ff9445, #db6b06);
  background: linear-gradient(to bottom, #ff9445, #db6b06);
  border-radius: 20px;
  line-height: 0;
  border: none;
  appearance: none;
  -webkit-appearance: none;
  margin: 0 auto;
}
.r-top_datacallBtn img {
  width: 100%;
  height: auto;
}
</style>
