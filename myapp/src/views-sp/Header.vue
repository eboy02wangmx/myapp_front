<template>
<header role="banner">
  <div id="grpheader" class="rc-h-standard jsAddFixedBar">
    <noscript>
    <div class="rc-h-noscript-bar">
      <div class="rc-h-inner">
        <p>JavaScriptが無効の為、一部のコンテンツをご利用いただけません。JavaScriptの設定を有効にしてからご利用いただきますようお願いいたします。（<a href="http://ichiba.faq.rakuten.co.jp/app/answers/detail/a_id/154">設定方法</a>）</p>
      </div>
    </div>
    </noscript>
    <div class="zdo_drawer_menu">
      <div class="zdo_drawer_bg"></div>
      <!-- <button type="button" class="zdo_drawer_button acc-open-btn"><span class="zdo_drawer_bar zdo_drawer_bar1"></span><span class="zdo_drawer_bar zdo_drawer_bar2"></span><span class="zdo_drawer_bar zdo_drawer_bar3"></span></button> -->
      <nav class="zdo_drawer_nav_wrapper">
        <div class="zdo_drawer_nav">
          <div>
          <div class="leftArrow menuH1"><a class="r-subNav01" target="_blank" href="https://www.rakuten-sonpo.co.jp/faq/tabid/237/Default.aspx#fire">よくある質問集</a></div>
          <div class="leftArrow menuH1"><router-link class="r-subNav02" to="ContractDocuments" target="_blank">ご契約時に必要な書類</router-link></div>
          <div class="leftArrow menuH1"><a class="r-subNav02" target="_blank" href="https://www.rakuten-sonpo.co.jp/faq/tabid/266/Default.aspx">用語解説</a></div>
          <div class="leftArrow menuH1"><a class="r-subNav03" target="_blank" href="https://www.rakuten-sonpo.co.jp/tabid/251/Default.aspx#road20141130">ハウスアシスタンスサービス</a></div>
          <div class="leftArrow menuH1"><a class="r-subNav04" target="_blank" href="https://www.rakuten-sonpo.co.jp/company/tabid/227/Default.aspx">楽天損保って？</a></div>
          <div class="leftArrow menuH1"><a class="r-subNav05" target="_blank" href="https://www.rakuten-sonpo.co.jp/provision/tabid/70/Default.aspx#homeassist">普通保険約款および特約</a></div>
          <div class="leftArrow menuH1"><a class="r-subNav05" target="_blank" href="#" @click.stop.prevent="toDisclosureStatement()">重要事項説明書</a></div>
          </div>
        </div>
      </nav>
    </div>

    <div class="rc-h-service-bar">
      <div class="rc-h-inner">
        <div class="rc-h-site-id">
          <h1><span class="rc-h-logo jsFixedParts"><img src="static/global/images/common/header/logo_sp.png" alt="楽天損害保険株式会社"></span></h1>
        </div>

      </div>
    </div>
    <!-- /#mddNav -->

    <!-- /#grpheader --></div>
</header>
</template>
<script>
import {headerViewModel} from '@/view-model/Header'

export default {
  name: 'MainHeader',
  mixins: [headerViewModel],
  data () {
    return {
      logo: require('../../static/images/service_logo.png')
    }
  }
}
</script>
<style scoped>
#mddNav ul.nav-inner .nav-innerList {
  width:auto !important;
}
#mddNav ul.nav-inner > li > a {
  font-size: 12px !important;
  padding:0 14px;
}

.r-subNav01:before {
  content: url(../assets/images/r-subNav01.png);
  position: relative;
  top: 3px;
  margin-right: 4px;
}
.r-subNav02:before {
  content: url(../assets/images/r-subNav02.png);
  position: relative;
  top: 3px;
  margin-right: 4px;
}
.r-subNav03:before {
  content: url(../assets/images/r-subNav03.png);
  position: relative;
  top: 3px;
  margin-right: 4px;
}
.r-subNav04:before {
  content: url(../assets/images/r-subNav04.png);
  position: relative;
  top: 3px;
  margin-right: 4px;
}
.r-subNav05:before {
  content: url(../assets/images/r-subNav05.png);
  position: relative;
  top: 3px;
  margin-right: 4px;
}
.r-subNav06:before {
  content: url(../assets/images/r-subNav06.png);
  position: relative;
  top: 3px;
  margin-right: 4px;
}

.zdo_drawer_nav > div {
  margin-top: 60px !important;
}
</style>
