<!--
  - 注意事項表示画面
  -
  - see: 画面定義書_G-NHA-029_注意事項表示_v1.0.xlsx
  -->
<template>
  <div class="r-a2_contents">
    <h2>インターネット契約の対象とご注意事項をご確認ください。</h2>
    <dl class="r-a2_trialcalc">
      <dt class="r-a2_trialcalc_ok">試算対象となる建物</dt>
      <dd>
        <ul class="r-clearfix">
          <li><img src="../assets/sp/images/r-trialcalc_ok_01.png" width="130" height="120" alt=""></li>
          <li><img src="../assets/sp/images/r-trialcalc_ok_02.png" width="130" height="120" alt=""></li>
        </ul>
      </dd>
      <dd class="r-a2_trialcalcNote">※&emsp;区分所有に限ります。</dd>
    </dl>
    <div class="r-a2_trialcalc">
      <div class="r-a2_attention">
        <span>ご入力内容によっては、ご契約いただくことができない場合があります。<br/>予めご了承の程、お願いいたします。</span>
      </div>
    </div>
    <dl class="r-a2_trialcalc">
      <dt class="r-a2_trialcalc_ng">試算対象とならない建物およびその他の条件</dt>
      <dd>
        <ul>
          <li><img src="../assets/sp/images/r-trialcalc_ng_01.png" width="130" height="120" alt=""><span>マンション・アパートの1棟全体</span></li>
          <li><img src="../assets/sp/images/r-trialcalc_ng_02.png" width="130" height="120" alt=""><span>空き家・別荘</span></li>
          <li><img src="../assets/sp/images/r-trialcalc_ng_03.png" width="130" height="120" alt=""><span>併用住宅（事務所や店舗を併設した住宅）</span></li>
          <li><img src="../assets/sp/images/r-trialcalc_ng_04.png" width="130" height="120" alt=""><span>オフィス・事務所などの住宅以外の建物</span></li>
          <li class="width200"><img src="../assets/sp/images/r-trialcalc_ng_05.png" width="200" height="120" alt=""><span>激変緩和措置の対象となる建物※1</span></li>
          <li><img src="../assets/sp/images/r-trialcalc_ng_06.png" width="130" height="120" alt=""><span>明記物件を含む場合※2</span></li>
          <li><img src="../assets/sp/images/r-trialcalc_ng_07.png" width="130" height="120" alt=""><span>他の保険契約等がある場合</span></li>
          <li><img src="../assets/sp/images/r-trialcalc_ng_08.png" width="130" height="120" alt=""><span>質権が設定されている物件</span></li>
        </ul>
      </dd>
      <dd class="r-a2_trialcalcNote">※1&emsp;激変緩和措置の対象となる建物とは、2009年12月以前保険始期の旧構造体系における構造がB構造で、2010年1月以降保険始期の新構造体系における構造がH構造となる建物です。</dd>
      <dd class="r-a2_trialcalcNote">※2&emsp;明記物件とは「貴金属、宝玉および宝石ならびに書画、骨董とう、彫刻物その他美術品で1個または1組の価額が30万円を超えるもの」 を指します。</dd>
    </dl>
    <section class="r-a2_agreement">
      <h3>お申込みにあたってのサイト内規約</h3>
      <div>
        <table>
          <tr>
            <td>利用環境</td>
            <td>ご利用いただけるインターネット環境は、<r-help-link src="A3" iconAlign="none" style="font-size: 1em">こちら</r-help-link>をご参照ください。<br>
              推奨環境以外でご利用の場合、正常に動作しない場合がありますので、あらかじめご了承ください。<br>
              </td>
          </tr>
          <tr>
            <td>対象となる保険種類</td>
            <td>ホームアシスト（家庭総合保険）</td>
          </tr>
          <tr>
            <td>保険契約者<br><span>（お申込人）</span></td>
            <td>日本国内に在住する個人の方（保険契約者が日本から本サイトにアクセスしている場合に限ります。）のうち、IDおよびメールアドレスをお持ちの方が対象です。<br>
              （お申込手続完了の旨を損害保険株式会社よりＥメールにてお送りします。ドメイン指定受信を設定されている方は、「@rakuten-sonpo.co.jp」からのメールを受信できるよう設定を変更してください。）
              </td>
          </tr>
          <tr>
            <td>被保険者<br>が対象です
            <span>（補償を受けられる方）</span>
              </td>
            <td>保険の対象である建物または家財の所有者をいい、保険契約者と別に指定することができます。
また、個人賠償責任補償特約および借家人賠償責任補償特約をセットする場合、これらの特約についても別に指定することができます。
              </td>
          </tr>
          <tr>
            <td>保険期間</td>
            <td>ホームアシスト（家庭総合保険）の保険期間は、１年間から10年間までの間で、整数年でお選びいただけます。地震保険の保険期間は、<r-help-link src="E1" iconAlign="none" style="font-size: 1em">こちら</r-help-link>をご参照ください。<br>
            保険始期日は、審査依頼日から起算して５日後から設定することができます。
            <!--<br>
            ※お申込みされる時間が午後11時を過ぎた場合は、審査依頼日の翌々日から起算して5日以降となります。-->
            </td>
          </tr>
          <tr>
            <td>保険料の<br>払込方法</td>
            <td>保険料の払込みは、クレジットカード払いのみです。ご利用可能なクレジットカードは、以下のとおりです。<br>
              <img src="../assets/images/credit-visa.png" alt="VISA" width="57" height="37"/>
              <img src="../assets/images/credit-master.png" alt="MASTER" width="54" height="35"/>
              <img src="../assets/images/credit-jcb.gif" alt="JCB" width="44" height="34"/>
              <img src="../assets/images/credit-americanexpress.gif" alt="AmericanExpress" width="46" height="46"/>
              <img src="../assets/images/credit-diners.gif" alt="Diners" width="44" height="32"/>
              <br>※保険契約者は、クレジットカード会員本人に限ります。<br>※クレジットカードの払込回数は1回払となります。</td>
          </tr>
          <tr>
            <td>重要事項説明書</td>
            <td>お手続きの画面には、保険商品の内容をご理解いただくための事項を記載した「契約概要」や、 ご契約に際して保険契約者にとって不利益となる事項等、特にご注意いただきたい事項を記載した「注意喚起情報」を掲載していますので、 必ずご確認ください。<br>
              ご不明な点がございましたら「お問い合わせ窓口」までご連絡ください。<br>
              保管・印刷用画面は<a target="_blank" href="#" @click.stop.prevent="toDisclosureStatement()">こちら</a>をご参照ください。</td>
          </tr>
          <tr>
            <td>保険証券等<br>
              ご契約のしおり<br><span>（普通保険約款および特約）</span></td>
            <td>当サイトでお申込みいただく場合、「保険証券等」および「ご契約のしおり（普通保険約款および特約）」の発行を省略しております。<br>
              「保険証券等」および「ご契約のしおり（普通保険約款および特約）」は、マイページからPCやスマートフォンなどでご確認いただくことができます。</td>
          </tr>
          <tr>
            <td>事故にあわれた場合</td>
            <td>万一、事故にあわれた場合は、「損保あんしんダイヤル」にご連絡ください。</td>
          </tr>
        </table>
      </div>
    </section>
    <section class="r-a2_flow">
      <h3>お見積り、ご契約の流れ</h3>
      <div class="r-a2_flowCnt">
        <dl class="r-a2_flowS clearfix">
          <dt>STEP1</dt>
          <dd><span>＜ 建物情報のご入力 ＞</span><br>保険の対象である建物（または保険の対象である家財を収容する建物）についてご入力ください。</dd>
        </dl>
        <dl class="r-a2_flowS clearfix">
          <dt>STEP2</dt>
          <dd><span>＜ 保険の対象の評価、保険金額の設定 ＞</span><br>保険の対象である建物や家財の評価額、保険金額をお決めください。</dd>
        </dl>
        <dl class="r-a2_flowL clearfix">
          <dt>STEP3</dt>
          <dd><span>＜ 地震保険のご選択 ＞</span><br>地震保険の有無、保険金額、割引についてご入力ください。</dd>
        </dl>
        <dl class="r-a2_flowL clearfix">
          <dt>STEP4</dt>
          <dd><span>＜ ご契約プラン等のご選択 ＞</span><br>保険期間や補償内容をお決めください。</dd>
        </dl>
        <dl class="r-a2_flowL clearfix">
          <dt>STEP5</dt>
          <dd><span>＜ 申込情報のご入力 ＞</span><br>お申込人の氏名、住所など、お申込みに必要な情報をご入力ください。</dd>
        </dl>
        <dl class="r-a2_flowL clearfix">
          <dt>STEP06</dt>
          <dd><span>＜ 内容確認・審査依頼 ＞</span><br>払込方法やご契約内容をご確認の上、建物の構造等、地震保険割引の適用条件を確認できる書類をアップロードしてください。なお、郵送等によるご提出をご希望の場合、「お問い合わせ窓口」までご連絡ください。</dd>
        </dl>
      </div>
      <div class="r-a2_arrow"><img src="../assets/sp/images/r-arrow.png" width="36" height="24" alt=""></div>
      <p class="r-a2_redTxt">ご入力内容と、ご提出いただいた書類を<br>損保または取扱代理店で確認いたします。<br>確認の結果、ご契約内容を訂正いただく場合もございます。</p>
      <div class="r-a2_arrow"><img src="../assets/sp/images/r-arrow.png" width="36" height="24" alt=""></div>
      <dl class="r-a2_confirm">
        <dt>＜ 内容確認・申込依頼 ＞</dt>
        <dd>ご契約内容がお客さまのご意向に合致しているか、<br>重要事項説明書とともにご確認ください。</dd>
      </dl>
      <div class="r-a2_arrow"><img src="../assets/sp/images/r-arrow.png" width="36" height="24" alt=""></div>
      <p class="r-a2_formation">ご契約成立</p>
    </section>
    <div class="r-pageNav r-a2_pageNav">
      <ul class="r-clearfix">
        <li class="r-back">
          <div role="button"><r-button type="button" class="r-button--inner r-back_button" @click="back">戻る</r-button></div>
        </li>
        <li class="r-next">
          <div role="button"><r-button type="button" class="r-button--inner r-next_button" @click="nextForm">確認しました</r-button></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {alertItemsViewModel} from '@/view-model/AlertItems'

export default {
  mixins: [alertItemsViewModel]
}
</script>

<style scoped>
a {
  outline: 0;
}

/* ポップアップ共通 */
.r-popup_wrapper {
  width: 100%;
  min-height: 100%;
  position: relative;
}
.r-popup_close {
  width: 30px;
  height: 30px;
  line-height: 0;
  position: absolute;
  top: 15px;
  right: 15px;
  border: 0;
  background: none;
  z-index: 5;
  padding: 0 !important;
}
.r-popup_close:hover {
  opacity: 0.8;
}
/* 追加ポップアップ共通 */
.r-popupcommon_contents {
  width: 100%;
  padding: 60px 10px 60px;
  box-sizing: border-box;
}
.r-popupcommon_contents img {
  width: 100%;
  height: auto;
}
.r-popupcommon_midashi {
  color: #256cae;
  font-size: 1.3em;
  line-height: 1.4;
  font-weight: bold;
  margin: 0 0 20px;
  padding: 0 0 15px 2em;
  border-bottom: 1px #aaaaaa solid;
  text-indent: -2em;
}
.r-popupcommon_midashi:before {
  content: url(../assets/sp/images/r-popupTtl.png);
  position: relative;
  top: 9px;
  margin-right: 8px;
}
.r-popupcommon_text {
  font-size: 0.95em;
  line-height: 1.6;
}
.r-popupcommon_redTxt {
  color: #cf1623;
}
.r-popupcommon_textL {
  font-size: 1.05em;
  line-height: 1.6;
}
.r-popupcommon_list {
  font-size: 0.95em;
  line-height: 1.6;
}
.r-popupcommon_list li {
  margin: 0 0 3px;
}
.r-popupcommon_linkbox {
  width: 100%;
  box-sizing: border-box;
  margin: 30px 0 0;
  padding: 20px 20px 30px;
  border: 1px #015ba2 dashed;
  border-radius: 20px;
}
.r-popupcommon_linkbox h3 {
  font-size: 0.95em;
  line-height: 1;
  margin: 0 0 20px;
  font-weight: bold;
}
.r-popupcommon_linkbox h3:before {
  content: url(../assets/sp/images/r-documentIcon_popup.png);
  position: relative;
  top: 5px;
  margin: 0 9px 0 0;
}
.r-popupcommon_linkbox ul {
  margin: 0 0 15px;
  padding: 0 0 15px;
  border-bottom: 1px #cccccc solid;
}
.r-popupcommon_linkbox ul li {
  line-height: 1.4;
  margin: 0 0 12px;
}
.r-popupcommon_linkbox ul li a {
  font-size: 0.9em;
  color: #3869ac;
  text-decoration: underline;
}
.r-popupcommon_linkbox ul li a:hover {
  text-decoration: none;
}
.r-popupcommon_linkbox_popup {
  line-height: 1.4;
}
.r-popupcommon_linkbox_popup:before {
  content: '';
  background: url(../assets/sp/images/r-popup.png) no-repeat center center;
  width: 20px;
  height: 20px;
  background-size: contain;
  display: inline-block;
  position: relative;
  top: 5px;
  left: 0;
  margin: 0 4px 0 0;
}
.r-popupcommon_linkbox_popup a {
  font-size: 0.9em;
  color: #3869ac;
  text-decoration: underline;
}
.r-popupcommon_linkbox_popup a:hover {
  text-decoration: none;
}
.r-popupcommon_linkbox_popup {
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
/* A-2 */
.r-a2_contents h2 {
  width: 100%;
  border-bottom: 1px #dddddd solid;
  font-size: 1.3em;
  line-height: 1.4;
  margin: 0 0 20px 0;
  padding: 0 35px 15px 0;
  font-weight: bold;
}
.r-a2_agreement,.r-a2_flow {
  margin: 70px 0 0;
}
.r-a2_agreement h3,.r-a2_flow h3 {
  border-left: 5px #015ba2 solid;
  height: 32px;
  font-size: 1.15em;
  line-height: 32px;
  margin: 0 0 18px;
  padding: 0 0 0 12px;
  font-weight: bold;
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
  line-height: 1.5;
  margin: 0 0 20px;
}
.r-a2_trialcalc_ok:before {
  display: inline-block;
  content: '';
  background: url(../assets/sp/images/r-free_yes.png);
  width: 30px;
  height: 30px;
  background-size: contain;
  position: relative;
  top: 7px;
  margin-right: 8px;
}
.r-a2_trialcalc_ng {
  margin: 10px 0 15px !important;
}
.r-a2_trialcalc_ng:before {
  display: inline-block;
  content: '';
  background: url(../assets/sp/images/r-osusume_no.png);
  width: 30px;
  height: 30px;
  background-size: contain;
  position: relative;
  top: 7px;
  margin-right: 8px;
}
.r-a2_trialcalc dd {
  clear: both;
}
.r-a2_trialcalc dd ul {
  width: 100%;
  margin: 0 auto;
  padding: 0 10px;
  box-sizing: border-box;
}
.r-a2_trialcalc dd ul li {
  display: inline-block;
  width: 130px;
  margin: 0 0 0;
  vertical-align: top;
}
.r-a2_trialcalc dd ul li.width200 {
  width: 250px;
}
.r-a2_trialcalc dd ul li span {
  display: block;
  padding: 0 8px;
  font-size: 0.8em;
  line-height: 1.4;
  color: #db2620;
  font-weight: bold;
}
.r-a2_trialcalcNoteRed {
  width: 100%;
  color: #FF0000;
  font-size: 0.95em;
  line-height: 1.6;
  box-sizing: border-box;
  padding-top: 15px;
  padding-left: 2em;
  text-indent: -2em;
}
.r-a2_trialcalcNote {
  width: 100%;
  color: #333333;
  font-size: 0.95em;
  line-height: 1.6;
  box-sizing: border-box;
  padding-top: 15px;
  padding-left: 2em;
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
.r-a2_attention {
  border: #bf0000 1px solid;
  padding:10px;
  margin:20px 10px 10px 10px;
  font-size: 0.9em;
  font-weight: bold;
  line-height: 1.2em;
  color:#bf0000;
}
.r-a2_attention ul.r-a2_attention_l1 {
  margin-top:10px;
  margin-left: 30px;
  list-style-type: square;
  font-size: 0.9em;
}
.r-a2_attention ul.r-a2_attention_l2 {
  margin-left: 30px;
  list-style-type: circle;
}
.r-a2_scroll {
  width: 100%;
  height: 600px;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
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
  width: 35%;
  background: #cdedac;
  text-align: center;
  padding: 0 10px;
}
.r-a2_agreement table tr td:last-child {
  padding: 20px 15px 40px 15px;
}
.r-a2_agreement table tr td:last-child img {
  width: auto;
  height: auto;
  margin: 8px 10px 8px 0;
  display: block;
}
.r-a2_flowCnt {
  width: 100%;
}
.r-a2_flowCnt dl {
  width: 100%;
  margin: 0 0 20px;
  padding: 0 0 15px;
  border-bottom: 1px #000000 dotted;
}
.r-a2_flowCnt dt {
  font-size: 1.1em;
  line-height: 1;
  font-weight: bold;
  margin: 0 0 10px;
}
.r-a2_flowCnt dl dd {
  width: 100%;
  box-sizing: border-box;
  color: #666666;
  font-size: 0.95em;
  line-height: 1.6;
}
.r-a2_flowCnt dl:first-child {
  border-top: 1px #000000 dotted;
  padding-top: 20px;
}
.r-a2_flowCnt dl dd span {
  color: #eb7c04;
  font-size: 1.1em;
  line-height: 1.5;
}
.r-a2_arrow {
  width: 18px;
  margin: 20px auto;
  line-height: 0;
}
.r-a2_redTxt {
  color: #d13737;
  font-size: 0.95em;
  line-height: 1.6;
  text-align: center;
  font-weight: bold;
}
.r-a2_confirm {
  text-align: center;
  font-size: 0.95em;
  line-height: 1.6;
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
.r-a2_pageNav {
  margin: 60px auto 0;
}
.r-a2_pageNav .r-next_button {
  font-size: 0.9em !important;
  box-sizing: border-box;
  padding-right: 30px;
}
/* ページナビ */
.r-pageNav {
  width: 100%;
  margin: 30px 0 35px;
}
.r-pageNav ul {
  width: 100%;
  height: 50px;
  margin: 0 auto 25px;
}
.r-back {
  width: 40%;
  height: 50px;
  margin: 0 5%;
  text-align: center;
  float: left;
}
.r-next {
  width: 40%;
  height: 50px;
  margin: 0 5%;
  text-align: center;
  float: left;
}
.r-back_button {
  display: block;
  width: 100%;
  height: 50px;
  border-radius: 30px;
  background: url(../assets/sp/images/r-back.png) #c4c4c3 no-repeat;
  background-position: left 10px center;
  background-size: 22px 24px;
  font-size: 1.1em;
  line-height: 50px;
  color: #ffffff;
  border: none;
  appearance: none;
  -webkit-appearance: none;
}
.r-next_button {
  display: block;
  width: 100%;
  height: 50px;
  border-radius: 30px;
  background: url(../assets/sp/images/r-next.png) #ff9600 no-repeat;
  background-position: right 10px center;
  background-size: 22px 24px;
  font-size: 1.1em;
  line-height: 50px;
  color: #ffffff;
  border: none;
  appearance: none;
  -webkit-appearance: none;
}
.r-next_button.is-disabled {
  background-color: #c4c4c3;
}
.r-save_button {
  display: block;
  width: 140px;
  height: 40px;
  border-radius: 40px;
  background: url(../assets/sp/images/r-save.png) #a1cd73 no-repeat;
  background-position: left 20px center;
  background-size: 20px 16px;
  font-size: 1.1em;
  line-height: 40px;
  color: #ffffff;
  text-align: center;
  border: none;
  appearance: none;
  -webkit-appearance: none;
  margin: -40px auto 0;
  padding: 0 0 0 25px;
  box-sizing: border-box;
}
.r-save p {
  text-align: center;
  color: #666666;
  font-size: 0.75em !important;
  line-height: 1.5 !important;
  margin: 8px 0 0;
}
.r-redo {
  width: 26%;
  height: 40px;
  background: url(../assets/sp/images/r-redo.png) #c4c4c3 no-repeat;
  background-position: left 10px top 8px;
  background-size: 15px 21px;
  border-radius: 0 30px 30px 0;
  box-sizing: border-box;
  padding: 0 0 0 7%;
}
.r-redo_button {
  width: 100%;
  height: 40px;
  font-size: 0.7em;
  color: #ffffff;
  text-align: left;
  border-radius: 0 30px 30px 0;
  border: none;
  appearance: none;
  -webkit-appearance: none;
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
