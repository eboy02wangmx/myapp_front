<!--
  - Error画面
  -
  -->
<template>
  <div class="wrap">
  <table>
      <tr>
        <td rowspan="5" style=""><img src="../assets/images/r-attention.png"/></td>
      </tr>
      <tr v-if="errorNo!=null && errorNo!='' "><td>{{errorMessage}}({{errorNo}})</td></tr>
      <tr v-else><td>誠に申し訳ありませんが、管理者にお問い合わせください</td></tr>
    </table>
  </div>
</template>

<script>
import {errorViewModel} from '@/view-model/Error'

export default {
  mixins: [errorViewModel]
}
</script>
<style scoped>
body{
  font-size: 14px;
  font-family:'helvetica neue',tahoma,arial,'hiragino sans gb','microsoft yahei','Simsun',sans-serif;
  background-color:#fff;
  color:#808080;
  }
.wrap{
  margin:100px auto;
  width:620px;
  }
td{
  text-align:left;
  padding:2px 10px;
  }
td.header{
  font-size:22px;
  padding-bottom:10px;
  color:#000;
  }
td.check-info{
  padding-top:20px;
  }
a{
  color:#328ce5;
  text-decoration:none;
  }
a:hover{
  text-decoration:underline;
}
</style>
