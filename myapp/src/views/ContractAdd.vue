<template>
  <div>
    <div class="navbar navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container-fluid">
          <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </a>
          <a class="brand" href="/#/Album">Panolib</a>
          <div class="nav-collapse">
            <ul class="nav">
              <li><a href="/#/Album">アルバム一覧</a></li>
              <li><a href="/#/UserKanri">ユーザー管理</a></li>
              <li v-if="this.$store.state.myapp.kengen === '1' || this.$store.state.myapp.kengen === '2'"><a href="/#/Riyo">利用状況一覧</a></li>
              <li class="active" v-if="this.$store.state.myapp.kengen === '1'"><a href="/#/Contract">契約情報管理</a></li>
            </ul>
            <p class="navbar-text pull-right">
              <a href="/#/Top">ログアウト</a>
            </p>
          </div>
          <!--/.nav-collapse -->
        </div>
      </div>
    </div>
    <div class="nav" style="height: 9%">
        <ul style="margin: 0">
            <li style="display: inline">
                <span>現在位置：</span>
            </li>
            <li style="display: inline">
                <a href="/#/Album">H O M E</a>
            </li>
            >
            <li style="display: inline">
                <a href="/#/Contract">契約情報管理</a>
            </li>
            >
            <li style="display: inline">
              <a class="nowPage" style="text-decoration: none; color: black">契約情報作成</a>
            </li>
        </ul>
    </div>
    <div class="page-header">
      <h1>契約情報作成</h1>
    </div>
    <div class="well">
      <form action method="post" accept-charset="utf-8">
        <fieldset>
          <legend>契約情報</legend>
          <table class="table table-bordered">
            <tr>
              <td style="width: 220px">
                <label for="name">プラン名</label>
              </td>
              <td>
                <input id="name" type="text" v-model="name" name="name" value="0" maxlength="64" style="float:left;" />
                <div id="msgName" style="float:left; color: red; font-weight: bold; margin: 6px 0px 0px 10px;"></div>
              </td>
            </tr>
            <tr>
              <td>
                <label for="uploadNum">アップロード可能画像数（枚）</label>
              </td>
              <td>
                <input id="uploadNum" type="text" v-model="uploadNum" name="uploadNum" style="float:left;" maxlength="5" onkeyup="this.value=this.value.replace(/\D/g,'')" />
                <div id="msgUploadNum" style="float:left; color: red; font-weight: bold; margin: 5px 0px 0px 10px;"></div>
              </td>
            </tr>
            <tr>
              <td>
                <label for="money">月次利用金額（円）</label>
              </td>
              <td>
                <input id="money" type="text" v-model="money" name="money" style="float:left;" maxlength="15" onkeyup="this.value=this.value.replace(/[^\d\.]/g,'')" />
                <div id="msgMoney" style="float:left; color: red; font-weight: bold; margin: 5px 0px 0px 10px;"></div>
              </td>
            </tr>
            <tr>
              <td>
                <label for="pv">月次PV数（枚）</label>
              </td>
              <td>
                <input id="pv" type="text" v-model="pv" name="pv" style="float:left;" maxlength="10" onkeyup="this.value=this.value.replace(/\D/g,'')" />
                <div id="msgPv" style="float:left; color: red; font-weight: bold; margin: 5px 0px 0px 10px;"></div>
              </td>
            </tr>
          </table>
        </fieldset>
        <a @click="add" style="margin-bottom: 3px" class="btn btn-primary">&nbsp;&nbsp;&nbsp;作成&nbsp;&nbsp;&nbsp;</a>
        <a href="/#/Contract" class="btn">キャンセル</a>
      </form>
    </div>
  </div>
</template>
<script>
import {contractAddViewModel} from '@/view-model/ContractAdd'
import {ACTIONS} from '@/store/action-types'

export default {
  mixins: [contractAddViewModel],
  methods: {
  }
}
</script>