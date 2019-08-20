<template>
<header role="banner">
  <div id="grpheader" class="rc-h-standard">
    <noscript>
    <div class="rc-h-noscript-bar">
      <div class="rc-h-inner">
        <p>JavaScriptが無効の為、一部のコンテンツをご利用いただけません。JavaScriptの設定を有効にしてからご利用いただきますようお願いいたします。（<a href="http://ichiba.faq.rakuten.co.jp/app/answers/detail/a_id/154">設定方法</a>）</p>
      </div>
    </div>
    </noscript>
    <div class="rc-h-service-bar">
      <div class="rc-h-inner">
        <div class="rc-h-site-id">
          <h1><span class="rc-h-logo jsFixedParts"><img src="static/global/images/common/header/logo.png" alt="楽天損害保険株式会社"></span></h1>
        </div>
      </div>
    </div>
    <!-- /#r-nav -->
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
  },
  computed: {
    isPaperless () {
      return this.$store.state.homeassist.entryType === '2'
    }
  }
}
</script>
<style scoped>
#grpheader {
    box-shadow: none !important;
}
#r-nav {
  width: 100%;
  height: 32px;
}
#r-nav ul.nav-inner {
  margin: 0 auto;
  max-width: 950px;
  height: 32px;
  text-align: left;
  background-color: #bf0000;
  padding:0 10px;
}
#r-nav .nav-outer {
  max-width: 1150px;
  margin: 0 auto;
  position: relative;
  z-index: 9;
}
#r-nav ul.nav-inner .nav-innerList:nth-child(1) {
  width:12%;
}
#r-nav ul.nav-inner .nav-innerList:nth-child(2) {
  width:16%;
}
#r-nav ul.nav-inner .nav-innerList:nth-child(3) {
  width:8%;
}
#r-nav ul.nav-inner .nav-innerList:nth-child(4) {
  width:22%;
}
#r-nav ul.nav-inner .nav-innerList:nth-child(5) {
  width:12%;
}
#r-nav ul.nav-inner .nav-innerList:nth-child(6) {
  width:18%;
}
#r-nav ul.nav-inner .nav-innerList:nth-child(7) {
  width:12%;
}

#r-nav ul.nav-inner .nav-innerList {
  height: 32px;
  float: left;
}
#r-nav ul.nav-inner > li > a {
  display: block;
  font-weight: bold;
  line-height: 32px;
  text-align: center;
  transition: all 0.2s linear;
  text-decoration: none;
  color: #ffffff;
  font-size: 1em;
}

</style>
