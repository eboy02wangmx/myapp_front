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
              <li><a href="/#/Album">アルバム一覧</a></li>
              <li class="active"><a href="/#/UserKanri">ユーザー管理</a></li>
              <li v-if="this.$store.state.myapp.kengen === '1' || this.$store.state.myapp.kengen === '2'"><a href="/#/Riyo">利用状況一覧</a></li>
              <li v-if="this.$store.state.myapp.kengen === '1'"><a href="/#/Contract">契約情報管理</a></li>
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
                  type="userid"
                  v-model="userid"
                  name="userid"
                  value="0"
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
                  v-model="furiganase"
                  name="phonetic1"
                  value="0"
                  style="width:150px"
                  maxlength="30"
                />
                <input
                  type="text"
                  v-model="furiganame"
                  name="phonetic2"
                  value="0"
                  style="width:150px"
                  maxlength="30"
                />
                <br />漢&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;字&nbsp;
                <input
                  type="text"
                  v-model="kanjise"
                  name="fullname1"
                  value="0"
                  style="width:150px"
                  maxlength="30"
                />
                <input
                  type="text"
                  v-model="kanjime"
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
          </table>
        </fieldset>
        <a
          href="/#/Success"
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
      </form>
    </div>
  </div>
</template>
<script>
import { userInsertViewModel } from '@/view-model/UserInsert'
import { ACTIONS } from '@/store/action-types'

export default {
  mixins: [userInsertViewModel],
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
