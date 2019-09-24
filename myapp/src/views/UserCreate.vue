<!--
  - 編集画面
  -
  - see: 画面定義書_G-NHA-004_ユーザー管理画面->ユーザー編集画面_v1.1.xlsx
  -->
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
          <a class="brand" href>Panolib</a>
          <div class="nav-collapse">
            <ul class="nav">
              <li>
                <a href="/#/Album">アルバム一覧</a>
              </li>
              <li class="active">
                <a href="/#/UserKanri">ユーザー管理</a>
              </li>
              <li v-if="this.$store.state.myapp.userName === 'panolib_admin'">
                <a href="/#/Riyo">利用状況一覧</a>
              </li>
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
          <a href>H O M E</a>
        </li>>
        <li style="display: inline">
          <a class="nowPage" style="text-decoration: none; color: black">ユーザー管理</a>
        </li>>
        <li style="display: inline">
          <a class="nowPage" style="text-decoration: none; color: black">ユーザー情報編集</a>
        </li>
      </ul>
    </div>
    <div class="page-header">
      <h1>ユーザー情報編集</h1>
    </div>
    <div class="well">
      <form action method="post" accept-charset="utf-8">
        <fieldset>
          <legend>ユーザー情報</legend>
          <table class="table table-bordered">
            <tr>
              <td style="width:150px">
                <label for="email_address">アカウントID</label>
              </td>
              <td>
                <input
                  type="text"
                  name="email_address"
                  v-model = "account"
                  readonly="readonly"
                  id="email_address"
                  maxlength="30"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="name">氏名</label>
              </td>
              <td>
                フリガナ&nbsp;
                <input
                  type="text"
                  v-model="createItems.furiganase"
                  name="phonetic1"
                  value="0"
                  style="width:150px"
                  maxlength="30"
                />
                <input
                  type="text"
                  v-model="createItems.furiganame"
                  name="phonetic2"
                  value="0"
                  style="width:150px"
                  maxlength="30"
                />
                <br />漢&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;字&nbsp;
                <input
                  type="text"
                  v-model="createItems.kanjise"
                  name="fullname1"
                  value="0"
                  style="width:150px"
                  maxlength="30"
                />
                <input
                  type="text"
                  v-model="createItems.kanjime"
                  name="fullname2"
                  value="0"
                  style="width:150px"
                  maxlength="30"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="password">パスワード</label>
                <P><font color='#d56a00'>※変更しない場合空白</font></P>
              </td>
              <td>
                <input
                  type="password"
                  v-model="password"
                  name="password"
                  value
                  minlength="4"
                  maxlength="30"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label for="password_conf">パスワード再入力</label>
                <P><font color='#d56a00'>※変更しない場合空白</font></P>
              </td>
              <td>
                <input
                  type="password"
                  v-model="repsd"
                  name="password_conf"
                  value
                  minlength="4"
                  maxlength="30"
                />
              </td>
            </tr>
            <tr v-if="tocreatekengen === '2' && loginid !== 'panolib_admin'">
              <td>
                <label for="plan">契約プラン</label>
              </td>
              <td>
                <input
                  type="text"
                  v-model="createItems.planname"
                  readonly="readonly"
                  maxlength="30"
                />
              </td>
            </tr>
            <tr v-else-if="tocreatekengen === '2' && loginid == 'panolib_admin'">
              <td>
                <label for="plan">契約プラン</label>
              </td>
              <td>
                  <Select v-model="planname" style="width:200px">
                  <Option v-for="item in planList" :key="item" :value="item">{{item}}</Option>
                  </Select>
              </td>
            </tr>
          </table>
        </fieldset>
        <a
          name="submit"
          type="submit"
          id="submit"
          @click="koushin"
          style="margin-bottom: 3px"
          value="Update"
          class="btn btn-primary"
        >&nbsp;&nbsp;&nbsp;更新&nbsp;&nbsp;&nbsp;</a>
        <span></span>
        <a href="/#/UserKanri" class="btn">キャンセル</a>
        <a v-if="psdchkflg === '1'">パスワードとパスワード再入力が異なる！</a>
      </form>
    </div>
  </div>
</template>
<script>
import { userCreateViewModel } from '@/view-model/UserCreate'
import { ACTIONS } from '@/store/action-types'

export default {
  mixins: [userCreateViewModel],
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
</style>
