<template>
  <ul class="r-subNav r-clearfix">
    <li class="r-subNav01"><a target="_blank" href="https://www.rakuten-sonpo.co.jp/faq/tabid/237/Default.aspx#fire">よくある質問集</a></li>
    <li class="r-subNav02"><router-link to="ContractDocuments" target="_blank">ご契約時に必要な書類</router-link></li>
    <li class="r-subNav03"><a target="_blank" href="https://www.rakuten-sonpo.co.jp/faq/tabid/266/Default.aspx">用語解説</a></li>
    <li class="r-subNav04"><a target="_blank" href="https://www.rakuten-sonpo.co.jp/tabid/251/Default.aspx#road20141130">ハウスアシスタンスサービス</a></li>
    <li class="r-subNav06"><a target="_blank" href="/mypage/static/pdf/homeassist/policy/policy_20190101.pdf" download="ご契約のしおり_20190101.pdf">普通保険約款および特約</a></li>
  </ul>
</template>
<script>
export default {
  name: 'SubNavi'
}
</script>
<style scoped>
/* サブナビゲーション */
.r-subNav {
  width: 100%;
  margin: 35px 0 20px;
  padding: 0 0 20px;
  border-bottom: 1px #cccccc solid;
}
.r-subNav li {
  margin: 0 12px;
  float: left;
}
.r-subNav li a {
  color: #666666;
  font-size: 0.8em;
}
.r-subNav li a:hover {
  text-decoration: underline;
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
</style>
