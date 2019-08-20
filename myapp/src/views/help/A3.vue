<template>
  <div class="r-a3_contents">
    <h2 class="r-popupcommon_midashi">推奨環境</h2>
    <table>
      <tr>
        <td>PC</td>
        <td>
          <h3>Windows7（日本語版）以上</h3>
          <div>
            <ul>
              <li>Internet Explorer 11以上</li>
              <li>Firefox 最新版</li>
              <li>Google Chrome最新版</li>
              <li>Microsoft Edge最新版（Windows10の場合）</li>
            </ul>
          </div>
          <h3>Mac OS X（日本語版） 以上</h3>
          <div>
            <ul>
              <li>Safari 最新版</li>
              <li>Firefox 最新版</li>
              <li>Google Chrome最新版</li>
            </ul>
          </div>
        </td>
      </tr>
      <tr>
        <td>スマートフォン</td>
        <td>
          <h3>iPhone6以降（OS:iOS11.0以降）</h3>
          <div>
            <ul>
              <li>Safari 最新版</li>
              <li>Google Chrome最新版</li>
            </ul>
          </div>
          <h3>Android（OS:Android6.0以降）</h3>
          <div>
            <ul>
              <li>Google Chrome最新版</li>
            </ul>
          </div>
        </td>
      </tr>
    </table>
  <!-- .r-popup_contents --></div>

</template>

<script>
import {helpViewModel} from '@/view-model/Help'

export default {
  mixins: [helpViewModel]
}
</script>
<style scoped>
.r-a3_contents table {
  width: 100%;
  word-wrap: break-word;
  border-spacing: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-top: 1px #cccccc solid;
  border-left: 1px #cccccc solid;
  color: #333333;
  font-size: 0.95em;
  line-height: 1.6;
  table-layout: fixed;
}
.r-a3_contents table h3 {
  font-size: 0.95em;
}
.r-a3_contents table ul {
  font-size: 0.95em;
  padding: 10px 0 20px 30px;
  list-style-type:square;
}
.r-a3_contents table tr td:first-child{
  background: #a7e1ff;
  text-align: center;
  width: 200px;
}
.r-a3_contents table td {
  border-bottom: 1px #cccccc solid;
  border-right: 1px #cccccc solid;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 20px 20px 0 20px;
}
</style>
