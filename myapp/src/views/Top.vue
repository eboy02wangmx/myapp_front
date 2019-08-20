<!--
  - TOP画面
  -
  - see: 画面定義書_G-NHA-001_TOP画面_v1.1.xlsx
  -->
<template>
  <div>
    <div v-if="$store.state.configs.notice !== null">
      <dl class="r-top_info">
        <dt>&lt;&lt; 楽天損保からのお知らせ &gt;&gt;</dt>
        <dd v-html="$store.state.configs.notice"></dd>
      </dl>
    </div>
    <div>
      <div class="r-top_start r-clearfix">
        <r-button class="r-top_startBtn01" @click="startByTransfer" :disabled = "isError">
          <img src="../assets/images/r-top_startBtn01.png" width="430" height="170" alt="試算スタート">
        </r-button>
        <r-button class="r-top_startBtn02" @click="startByNew" :disabled = "isError">
          <img src="../assets/images/r-top_startBtn02.png" width="430" height="170" alt="他社の火災保険に加入中の方はこちら。試算スタート">
        </r-button>
      </div>
      <div class="r-top_datacall r-clearfix" v-if="entryType === '1'">
        <div class="r-top_datacall r-clearfix">
          <div>
            <h3 class="orange">過去に当サイトで試算済の場合</h3>
          </div>
          <p class="top">マイページからお手続きを再開することができます。</p>
          <div class="r-top_datacallR">
            <r-button class="r-top_datacallBtn" style="width: 300px; height: 100px;" @click="myPage">
              <img src="../assets/images/r-top_MypageBtn01.png" style="margin-top: -3px;" alt="過去に当サイトで試算済の場合。再呼び出し">
            </r-button>
          </div>
        </div>
        <div class="r-top_datacall r-clearfix" v-if="isDevelop">
          <div>
            <h3 class="orange">過去に当サイトで試算済の場合</h3>
          </div>
          <p><span>メールアドレス</span>と<span>申込依頼No.</span>をご入力の上、「再呼び出し」ボタンをクリックしてください。</p>
          <div class="r-top_datacallL">
            <r-text-box class="r-top_input01" placeholder="メールアドレス" v-model="mail" maxlength="254"/>
            <r-text-box class="r-top_input01" placeholder="申込依頼No." v-model="entryNo" maxlength="6"/>
          </div>
          <div class="r-top_datacallC"><img src="../assets/images/r-arrow_right.png" width="23" height="35" alt=""></div>
          <div class="r-top_datacallR">
            <r-button class="r-top_datacallBtn" style="width: 300px; height: 100px;" @click="readEntryTempSave">
              <img src="../assets/images/r-top_datacallBtn.png" style="margin-top: -3px;" alt="過去に当サイトで試算済の場合。再呼び出し">
            </r-button>
          </div>
        </div>
      </div>
      <div class="r-top_datacall r-clearfix" v-if="entryType === '2'">
       <div>
          <h3 class="orange">過去に当サイトで試算済の場合</h3>
        </div>
        <p><span>代理店コード</span>と<span>見積連番</span>をご入力の上、「再呼び出し」ボタンをクリックしてください。</p>
        <div class="r-top_datacallL">
          <r-list-box v-if="isDisplayAgentList()" class="r-top_input01" v-model="agentCode" placeholder="代理店一覧から選択" @change="changeAgentCode">
            <option v-for="(value, index) in agentList" :key="index" :value="value">{{value}}</option>
          </r-list-box>
          <r-text-box v-else :disabled="true" class="r-top_input01" v-model="agentCode"/>
          <r-text-box class="r-top_input01" placeholder="見積連番" v-model="entryNo" maxlength="6"/>
          <r-button class="r-step0202_button" style="height: 39.975px;margin-bottom: 30px;font-size: 17px;" @click="showPrintList">見積連番一覧から選択</r-button>
        </div>
        <div class="r-top_datacallC"><img src="../assets/images/r-arrow_right.png" width="23" height="35" alt=""></div>
        <div class="r-top_datacallR">
          <r-button class="r-top_datacallBtn" style="width: 300px; height: 100px;" @click="readEntryTempSave">
            <img src="../assets/images/r-top_datacallBtn.png" style="margin-top: -3px;" alt="過去に当サイトで試算済の場合。再呼び出し">
          </r-button>
        </div>
      </div>
      <div class="r-pageNav">
        <h4>証券番号のみを印字した口座振替申込書をダウンロードする場合、口座振替申込書印刷ボタンを押下してください。</h4><br>
      <r-button class="r-print_button" @click="doPrint" :disabled="true">口座振替申込書印刷</r-button>
      </div>
      <div class="r-a2_contents" v-if="entryType === '2'">
          <h2>ペーパーレス募集の対象とご注意事項をご確認ください。</h2>
          <dl class="r-a2_trialcalc">
            <dt class="r-a2_trialcalc_ng">試算対象外となる契約条件</dt>
            <dd class="r-a2_trialcalcNote">・団体扱い契約</dd>
            <dd class="r-a2_trialcalcNote">・集団扱い契約</dd>
            <dd class="r-a2_trialcalcNote">・明細付き契約</dd>
            <dd class="r-a2_trialcalcNote">・短期契約</dd>
            <dd class="r-a2_trialcalcNote">・集金方法が集金（振込）の契約</dd>
            <dd class="r-a2_trialcalcNote">・保険料分割払特約（大口）をセットする契約</dd>
            <dd class="r-a2_trialcalcNote">・保険始期時刻を午後４時以外とする契約</dd>
          </dl>
          <section class="r-a2_agreement">
            <h3>サイト内規約</h3>
            <div>
              <table>
                <tr>
                  <td>利用環境</td>
                  <td>
                    ご利用いただけるインターネット環境は、<r-help-link src="A3" iconAlign="none" style="font-size: 1em">こちら</r-help-link>をご参照ください。<br>
                    推奨環境以外でご利用の場合、正常に動作しない場合がありますので、あらかじめご了承ください。<br>
                    楽天損害保険株式会社の責に帰さない通信障害、端末障害等により、保険契約手続きが遅延または不能となったために生じた損害について、 楽天損害保険株式会社は責任を負いません。<br>
                    通信経路での盗聴等により、保険契約情報、クレジットカード情報が漏洩したため生じた損害について、楽天損害保険株式会社は責任を負いません。<br>
                    本サイトはS S Lにより暗号化を実現しています。
                    </td>
                </tr>
                <tr>
                  <td>対象となる保険種類</td>
                  <td>ホームアシスト（家庭総合保険）</td>
                </tr>
                <tr>
                  <td>保険契約者<br><span>（お申込人）</span></td>
                  <td>日本国内に在住する個人の方または法人の方。（保険契約者が日本から本サイトにアクセスしている場合に限ります。）<br>
                    （お申込手続完了の旨を楽天損害保険株式会社よりＥメールにてお送りします。ドメイン指定受信を設定されている方は、「@rakuten-sonpo.co.jp」からのメールを受信できるよう設定を変更してください。）
                    </td>
                </tr>
                <tr>
                  <td>被保険者<br>
                  <span>（補償を受けられる方）</span>
                  </td>
                  <td>保険の対象である建物または家財等の所有者をいいます。
                      また、個人賠償責任補償特約および借家人賠償責任補償特約をセットする場合、別に指定することができます。
                  </td>
                </tr>
                <tr>
                  <td>保険期間</td>
                  <td>
                    ホームアシスト（家庭総合保険）の保険期間は１年間から10年間までの間で、整数年でお選びいただけます。地震保険の保険期間は、<r-help-link src="E1" iconAlign="none" style="font-size: 1em">こちら</r-help-link>をご参照ください。<br>
                  </td>
                </tr>
                <tr>
                  <td>保険料の<br>払込方法</td>
                  <td>保険料のお支払いは、クレジットカード払いまたは口座振替となります。ご利用可能なクレジットカードは、以下のとおりです。
                    利用可能な金融機関は、<r-help-link src="E34" iconAlign="none" style="font-size: 1em">こちら</r-help-link>をご参照ください。<br>
                    <img src="../assets/images/credit-visa.png" width="68" height="46" alt="">
                    <img src="../assets/images/credit-master.png" width="60" height="46" alt="">
                    <img src="../assets/images/credit-diners.gif" width="56" height="46" alt="">
                    <img src="../assets/images/credit-jcb.gif" width="53" height="46" alt="">
                    <img src="../assets/images/credit-americanexpress.gif" width="48" height="46" alt="">
                    <br>※保険契約者は、クレジットカード会員本人に限ります。</td>
                </tr>
                <tr>
                  <td>重要事項説明書</td>
                  <td>
                    お手続きの画面には、保険商品の内容をご理解いただくための事項を記載した「契約概要」や、 ご契約に際して保険契約者にとって不利益となる事項等、特にご注意いただきたい事項を記載した「注意喚起情報」を掲載していますので、 必ずご確認ください。<br>
                    保管・印刷用画面は<a target="_blank" href="#" @click.stop.prevent="toDisclosureStatement()">こちら</a>をご参照ください。</td>
                </tr>
                <tr>
                  <td>保険証券等<br>
                    ご契約のしおり<br><span>（普通保険約款および特約）</span></td>
                  <td>保険契約者が個人の場合、ご希望いただければ「保険証券等」および「ご契約のしおり（普通保険約款および特約）」の発行することができます。<br/>
                      また、「保険証券等」および「ご契約のしおり（普通保険約款および特約）」は、マイページから電子媒体でご確認いただくことができます。<br/>
                      保険契約者が法人の場合、書面の「保険証券等」および「ご契約のしおり（普通保険約款および特約）」を発行いたします。<br/>
                  </td>

                </tr>
                <tr>
                  <td>事故に遭われた場合</td>
                  <td>万一、事故に遭われた場合は、「楽天損保あんしんダイヤル」にご連絡ください。</td>
                </tr>
              </table>
            </div>
          </section>
          <section class="r-a2_flow">
            <h3>お見積り、ご契約の流れ</h3>
            <h4>■代理店</h4>
            <div class="r-a2_flowCnt">
              <dl class="r-a2_flowS clearfix">
                <dt>STEP1</dt>
                <dd style="width: 720px;"><span>＜ 建物情報のご入力 ＞</span><br>保険の対象である建物（または保険の対象である家財等を収容する建物）についてご入力ください。</dd>
              </dl>
              <dl class="r-a2_flowS clearfix">
                <dt>STEP2</dt>
                <dd style="width: 720px;"><span>＜ 保険の対象の評価、保険金額の設定 ＞</span><br>保険の対象である建物や家財等の評価額、保険金額をお決めください。</dd>
              </dl>
              <dl class="r-a2_flowL clearfix">
                <dt>STEP3</dt>
                <dd style="width: 720px;"><span>＜ 地震保険のご選択 ＞</span><br>地震保険の有無、保険金額、割引についてご入力ください。</dd>
              </dl>
              <dl class="r-a2_flowL clearfix">
                <dt>STEP4</dt>
                <dd style="width: 720px;"><span>＜ ご契約プラン等のご選択 ＞</span><br>保険期間や補償内容をお決めください。</dd>
              </dl>
              <dl class="r-a2_flowL clearfix">
                <dt>STEP5</dt>
                <dd style="width: 720px;"><span>＜ 申込情報のご入力 ＞</span><br>お申込人の氏名、住所など、お申込みに必要な情報をご入力ください。</dd>
              </dl>
              <dl class="r-a2_flowL clearfix">
                <dt>STEP6</dt>
                <dd style="width: 720px;"><span>＜ 内容確認・申込依頼 ＞</span><br>払込方法やご契約内容をご確認の上、建物の構造等、地震保険割引の適用条件を確認できる書類をアップロードしてください。なお、ご希望の場合は郵送等でご提出いただくことができます。</dd>
              </dl>
            </div>
            <br>
            <h4>■お客様</h4>
            <div class="r-a2_flowCnt2">
              <dl class="r-a2_flowS clearfix">
                <dt>STEP1</dt>
                <dd style="width: 720px;"><span>＜ 申込み内容の確認 ＞</span><br>ご契約内容がお客さまのご意向に合致しているか、重要事項説明書とともにご確認ください。</dd>
              </dl>
              <dl class="r-a2_flowS clearfix">
                <dt>STEP2</dt>
                <dd style="width: 720px;"><span>＜ 保険料払込方法のご確認 ＞</span><br>クレジットカードによるお支払を選択される場合、お支払に使用されるクレジットカード情報をご入力ください。※口座振替によるお支払を選択される場合、ご確認いただく内容はございません。</dd>
              </dl>
              <dl class="r-a2_flowL clearfix">
                <dt>STEP3</dt>
                <dd style="width: 720px;"><span>＜ 申込完了 ＞</span><br>お申込手続きの完了です。</dd>
              </dl>
            </div>

            <div class="r-a2_arrow"><img src="../assets/images/r-arrow.png" width="36" height="24" alt=""></div>
            <p class="r-a2_redTxt">ご入力内容と、ご提出いただいた書類を楽天損保で点検いたします。<br>点検の結果、ご契約内容を訂正いただく場合もございます。</p>
            <div class="r-a2_arrow"><img src="../assets/images/r-arrow.png" width="36" height="24" alt=""></div>
            <p class="r-a2_formation">ご契約成立</p>
          </section>
        </div>

    </div>
  </div>
</template>

<script>
import {topViewModel} from '@/view-model/Top'
import {ACTIONS} from '@/store/action-types'

export default {
  mixins: [topViewModel],
  methods: {
  // エラーがある場合、ポップアップ画面を表示する。
    toDisclosureStatement () {
      if (this.$root.isMobile.any === true) {
        this.$store.dispatch(ACTIONS.DOCUMENT_OPEN, {name: 'DisclosureStatementSp', showScrollBtn: true})
      } else {
        this.$store.dispatch(ACTIONS.DOCUMENT_OPEN, {name: 'DisclosureStatement', showScrollBtn: true})
      }
    }
  }
}
</script>
<style scoped>
/*****************************************************

    TOP

*****************************************************/
.r-popup {
  line-height: 1.4;
}
.r-popup:before {
  content: url(../assets/images/r-popup.png);
  position: relative;
  top: 5px;
  left: 0;
  margin: 0 4px 0 0;
}
.r-popup button {
  font-size: 0.9em;
  color: #3869ac;
  text-decoration: underline;
  border: none;
}
.r-top_info {
  width: 910px;
  margin: 5px auto 40px;
}
.r-top_info dt {
  color: #b80011;
  font-size: 1.05em;
  line-height: 1;
  text-align: center;
  font-weight: bold;
  margin: 0 0 12px;
}
.r-top_info dd {
  color: #666666;
  font-size: 0.95em;
  line-height: 1.8;
  border-top: 1px #cccccc solid;
  border-bottom: 1px #cccccc solid;
  padding: 15px 80px 15px;
  box-sizing: border-box;
}
.r-top_start {
  width: 910px;
  margin: 0 auto;
}
.r-top_start .r-button:first-child {
  width: 430px;
  float: left;
}
.r-top_start .r-button:last-child {
  width: 430px;
  float: right;
}
.r-top_startBtn01 {
  display: block;
  width: 430px;
  height: 170px;
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
  width: 430px;
  height: 170px;
  background: -moz-linear-gradient(top, #81c936, #559e0a);
  background: -webkit-linear-gradient(top, #81c936, #559e0a);
  background: linear-gradient(to bottom, #81c936, #559e0a);
  border-radius: 16px;
  line-height: 0;
  border: none;
  appearance: none;
  -webkit-appearance: none;
}
.r-top_datacall {
  /* width: 910px; */
  width: 710px;
  background: #eeeeee;
  margin: 75px auto 75px;
  padding: 20px 20px 40px;
  box-sizing: border-box;
}
.r-top_datacall h3 {
  display: inline-block;
  height: 40px;
  color: #ffffff;
  font-size: 1em;
  line-height: 40px;
  margin: 0 0 15px;
  padding: 0 30px;
  border-radius: 20px;
}
.r-top_datacall h3.orange {
  background: #e27313;
}
.r-top_datacall h3.pink {
  background: #FF8080;
}
.r-top_datacall p.top {
  padding: 0 0 0 150px;
}
.r-top_datacall > p {
  font-size: 1em;
  line-height: 1;
  margin: 0 0 25px;
}
.r-top_datacall > p > span {
  color: #cf1623;
}
.r-top_datacallL {
  width: 350px;
  margin: 0 0 0 20px;
  float: left;
}
.r-top_datacallC {
  width: 120px;
  height: 120px;
  position: relative;
  float: left;
}
.r-top_datacallR {
  width: 350px;
  /* float: left; */
  margin: 0 0 0 150px;
}
.r-top_input01,.r-top_input02 {
  width: 350px;
  height: 50px;
  border: none !important;
  outline: 0;
  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.2) inset;
  border-radius: 10px;
  border: 1px #b1b1b1 solid;
  color: #333333;
  font-size: 0.95em;
  line-height: 1;
  border: 1px #b1b1b1 solid;
  box-sizing: border-box;
  vertical-align: middle;
  padding: 0 10px;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
}
.r-top_input01::input-placeholder,.r-top_input02::input-placeholder {
  color: #666666;
  line-height: 25px;
}
.r-top_input01::-webkit-input-placeholder,.r-top_input02::-webkit-input-placeholder {
  color: #666666;
  line-height: 25px;
}
.r-top_input01::-ms-input-placeholder,.r-top_input02::-ms-input-placeholder {
  color: #666666;
  line-height: 25px;
}
.r-top_input01 {
  margin: 0 0 15px;
}
.r-top_input02 {
  margin: 0 0 10px;
}
.r-top_datacallC img {
  width: 23px;
  height: 35px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.r-top_datacallBtn {
  display: block;
  /* width: 350px;
  height: 120px; */
  width: 300px;
  height: 75px;
  background: -moz-linear-gradient(top, #ff9445, #db6b06);
  background: -webkit-linear-gradient(top, #ff9445, #db6b06);
  background: linear-gradient(to bottom, #ff9445, #db6b06);
  border-radius: 20px;
  line-height: 0;
  border: none;
  appearance: none;
  -webkit-appearance: none;
}
.r-top_startBtn01:hover,.r-top_startBtn02:hover,.r-top_datacallBtn:hover {
  opacity: 0.8;
}
.r-table-step0202{
  width: 80%
}
.th1{
  width: 15%
}
.th2{
  width: 25%
}
.th3{
  width: 25%
}
.th4{
  width: 15%
}
.th5{
  width: 20%
}
.td1{
  text-align: center
}
.td2{
  text-align: center
}
.td3{
  text-align: center
}
.td4{
  text-align: center
}
.td5{
  text-align: center
}
.r-step0202_radio {
  display: block;
  width: 90%;
  height: 40px;
}
.r-radio >>> .r-radio-inline-center {
  /* margin-top: 0px !important; */
  margin-left: 10px !important;

}

/* A-2 */
.r-a2_contents {
  width: 100%;
  padding: 0 0 20px;
}
.r-a2_contents h2 {
  width: 100%;
  border-bottom: 1px #dddddd solid;
  font-size: 1.4em;
  line-height: 1;
  margin: 0 0 45px;
  padding: 0 0 15px;
}
.r-a2_agreement,.r-a2_flow {
  margin: 70px 0 0;
}
.r-a2_agreement h3,.r-a2_flow h3 {
  border-left: 5px #015ba2 solid;
  height: 32px;
  font-size: 1.1em;
  line-height: 32px;
  margin: 0 0 18px;
  padding: 0 0 0 12px;
}
.r-a2_agreement span {
  font-size: 0.9em;
}
.r-a2_trialcalc {
  width: 100%;
}
.r-a2_trialcalc dt {
  font-weight: bold;
  font-size: 1.2em;
  line-height: 1;
  margin: 0 0 15px;
}
.r-a2_trialcalc_ok:before {
  content: url(../assets/images/r-free_yes.png);
  position: relative;
  top: 8px;
  margin-right: 8px;
}
.r-a2_trialcalc_ng {
  margin: 55px 0 15px !important;
}
.r-a2_trialcalc_ng:before {
  content: url(../assets/images/r-osusume_no.png);
  position: relative;
  top: 5px;
  margin-right: 8px;
}
.r-a2_trialcalc dd {
  clear: both;
}
.r-a2_trialcalc dd ul li {
  float: left;
  line-height: 0;
}
.r-a2_trialcalcNote {
  width: 710px;
  color: #333333;
  font-size: 0.95em;
  line-height: 1.6;
  box-sizing: border-box;
  margin: 0 auto;
  padding-top: 10px;
  padding-left: -10em;
  text-indent: -2em;
}
.r-a2_trialcalcTxt {
  width: 100%;
  color: #333333;
  font-size: 0.95em;
  line-height: 1.6;
  word-wrap: break-word;
  margin: 15px 0 0;
}
.r-a2_scroll {
  width: 100%;
  height: 600px;
  overflow-y: scroll;
}
.r-a2_scroll::-webkit-scrollbar {
  width: 10px;
}
.r-a2_scroll::-webkit-scrollbar-track {
  background: #fbfbfb;
}
.r-a2_scroll::-webkit-scrollbar-thumb {
  background: #c1c1c1;
}
.r-a2_agreement table {
  width: 100%;
  word-wrap: break-word;
  border-spacing: 0;
  box-sizing: border-box;
  border-top: 1px #cccccc solid;
  border-left: 1px #cccccc solid;
  color: #333333;
  font-size: 0.95em;
  line-height: 1.6;
  table-layout: fixed;
}
.r-a2_agreement table td {
  border-bottom: 1px #cccccc solid;
  border-right: 1px #cccccc solid;
  box-sizing: border-box;
}
.r-a2_agreement table tr td:first-child {
  width: 200px;
  background: #cdedac;
  text-align: center;
}
.r-a2_agreement table tr td:last-child {
  padding: 20px 20px 20px 20px;
}
.r-a2_agreement table tr td:last-child img {
  margin: 8px 10px 8px 0;
}
.r-a2_flowCnt {
  width: 100%;
  height: 772px;
  background: url(../assets/images/r-flowBg8.png) no-repeat left center;
}
.r-a2_flowCnt dl {
  width: 100%;
}
.r-a2_flowS {
  height: 125px;
}
.r-a2_flowL {
  height: 130px;
}
.r-a2_flowCnt dt {
  width: 200px;
  color: #ffffff;
  font-size: 1.1em;
  line-height: 1;
  font-weight: bold;
  text-align: center;
  float: left;
}
.r-a2_flowS:first-child dt {
  padding: 53px 0 0;
}
.r-a2_flowS:nth-child(2) dt {
  padding: 58px 0 0;
}
.r-a2_flowL dt {
  padding: 63px 0 0;
}
.r-a2_flowCnt dl dd {
  width: 550px;
  height: 100%;
  padding: 18px 0 0;
  box-sizing: border-box;
  color: #666666;
  font-size: 0.9em;
  line-height: 1.7;
  border-bottom: 1px #000000 dotted;
  float: right;
}
.r-a2_flowCnt dl:first-child dd {
  border-top: 1px #000000 dotted;
}
.r-a2_flowCnt dl dd span {
  color: #eb7c04;
  font-size: 1.1em;
  line-height: 2;
}
.r-a2_flowCnt2 {
  width: 100%;
  height: 380px;
  background: url(../assets/images/r-flowBg3.png) no-repeat left center;
}
.r-a2_flowCnt2 dl {
  width: 100%;
}
.r-a2_flowS {
  height: 125px;
}
.r-a2_flowL {
  height: 130px;
}
.r-a2_flowCnt2 dt {
  width: 200px;
  color: #ffffff;
  font-size: 1.1em;
  line-height: 1;
  font-weight: bold;
  text-align: center;
  float: left;
}
.r-a2_flowS:first-child dt {
  padding: 53px 0 0;
}
.r-a2_flowS:nth-child(2) dt {
  padding: 58px 0 0;
}
.r-a2_flowL dt {
  padding: 63px 0 0;
}
.r-a2_flowCnt2 dl dd {
  width: 550px;
  height: 100%;
  padding: 18px 0 0;
  box-sizing: border-box;
  color: #666666;
  font-size: 0.9em;
  line-height: 1.7;
  border-bottom: 1px #000000 dotted;
  float: right;
}
.r-a2_flowCnt2 dl:first-child dd {
  border-top: 1px #000000 dotted;
}
.r-a2_flowCnt2 dl dd span {
  color: #eb7c04;
  font-size: 1.1em;
  line-height: 2;
}

.r-a2_arrow {
  text-align: center;
  margin: 25px 0;
  line-height: 0;
}
.r-a2_trialcalcNoteRed {
  width: 710px;
  color: #FF0000;
  font-size: 0.95em;
  line-height: 1.6;
  box-sizing: border-box;
  margin: 0 auto;
  padding-top: 10px;
  padding-left: 2em;
  text-indent: -2em;
}
.r-a2_redTxt {
  color: #d13737;
  font-size: 0.95em;
  line-height: 1.6;
  text-align: center;
}
.r-a2_confirm {
  text-align: center;
  font-size: 0.9em;
  line-height: 1.7;
}
.r-a2_confirm dt {
  color: #ea7b04;
  font-size: 1.1em;
  line-height: 2;
}
.r-a2_confirm dd {
  color: #666666;
}
.r-a2_formation {
  width: 300px;
  margin: 0 auto;
  padding: 0 0 8px;
  border-bottom: 5px #fc8403 solid;
  font-size: 1.4em;
  line-height: 1;
  font-weight: bold;
  text-align: center;
}
.r-alertItems-block{
  padding: 10px 5px;
  height:700px;
}
.header-confirmation{
  border-bottom:solid #cccccc 1px;
}
.targetBuilding{
  margin: 10px 0;
}
h3 .ok {
  color: #0397df;
  font-family: "ＭＳ Ｐゴシック","ヒラギノ角ゴ Pro W3","Osaka","MS UI Gothic",sans-serif;
  font-size: 1.8em;
  font-weight: bold !important;
  min-height: 50px;
}
h3 .notOk{
  color: #f58d1e;
  font-family: "ＭＳ Ｐゴシック","ヒラギノ角ゴ Pro W3","Osaka","MS UI Gothic",sans-serif;
  font-size: 1.8em;
  font-weight: bold !important;
  min-height: 50px;
}
.picturesLine{
  width: 100%;
  margin: 10px 5px;
}
.text{
  margin:10px 5px;
}
.termsOfUse,
.steps{
  height:30px;
  border-left:solid #015ba2 6px;
  padding: 5px 0 5px 20px;
}
/*cleaffix*/
.r-clearfix:before,.r-clearfix:after {
  content: " ";
  display: table;
}
.r-clearfix:after {
  clear: both;
}
.r-clearfix {
  *zoom: 1;
}
.r-back_button {
  display: block;
  width: 300px;
  height: 80px;
  border-radius: 40px;
  background: url(../assets/images/r-back.png) #c4c4c3 no-repeat;
  background-position: left 30px center;
  font-size: 1.6em;
  line-height: 80px;
  color: #ffffff;
  text-align: center;
  border: none;
  appearance: none;
  -webkit-appearance: none;
}
.r-next_button {
  display: block;
  width: 300px;
  height: 80px;
  border-radius: 40px;
  background: url(../assets/images/r-next.png) #ff9600 no-repeat;
  background-position: right 30px center;
  font-size: 1.6em;
  line-height: 80px;
  color: #ffffff;
  text-align: center;
  border: none;
  appearance: none;
  -webkit-appearance: none;
}
.r-print_button {
  display: block;
  width: 300px;
  height: 80px;
  border-radius: 40px;
  background: #0496E1 no-repeat;
  background-position: right 30px center;
  font-size: 1.6em;
  line-height: 80px;
  color: #ffffff;
  text-align: center;
  border: none;
  appearance: none;
  -webkit-appearance: none;
  margin-bottom: 30px;
}
.r-print_button.is-disabled {
  background-color: #c4c4c3;
}
.r-next_button.is-disabled {
  background-color: #c4c4c3;
  cursor: default;
}
/*テーブル定義*/
.termsOfUse table,
.steps .stepTable{
  width:100%;
  border-collapse:collapse;
}
.termsOfUse table{
  border: solid #cccccc 1px;
}
.termsOfUse table tr{
  width: 100%;
}
.termsOfUse table tr .title,
.steps table tr .tableSteps{
  width:20%;
  text-align: center;
  padding: 20px 0;
}
.termsOfUse table tr .title{
  border: solid #cccccc 1px;
}
.termsOfUse table tr .title{
  background-color:#cdedac;
}
.termsOfUse table tr .contents,
.steps table tr .contents{
  width:80%;
  padding: 20px 5px;
}
.termsOfUse table tr .contents{
  border: solid #cccccc 1px;
}
.steps table tr .contents{
  border-top: dotted #cccccc 1px;
  border-bottom: dotted #cccccc 1px;
}
.contents .creditCard{
  margin-left:10px;
}
.stepTable tr .contents .title{
  color:#ec7a07;
}
.rr-arrow {
  text-align: center;
  margin: 10px 0 20px;
}
.explanation{
  text-align:center;
}
.explanation .red{
  color:red;
}
.explanation .orange{
  color: #ec7a07;
}
.done{
  width:100%;
  height:30px;
  text-align: center;
  font-size:1.5em;
  font-weight:bold;
  margin-bottom: 50px;
}
.done .border-line{
  width:30%;
  border-bottom: solid #eb8b01 4px;
  margin: 0 auto;
}
</style>
