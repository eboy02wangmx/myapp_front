<!--
  - ALBUM画面
  -
  - see: 画面定義書_G-NHA-002_user画面_v1.1.xlsx
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
      <a class="brand" href="">Panolib</a>
      <div class="nav-collapse">
        <ul class="nav">
          <li class="active"><a href="">物件一覧</a></li>
          <li><a href="/#/User">ユーザー管理</a></li>
          <li><a href="">利用状況一覧</a></li>
        </ul>
        <p class="navbar-text pull-right"><a href="">ログアウト</a></p>
      </div><!--/.nav-collapse -->
    </div>
  </div>
</div>
<div class="nav" style="height: 9%">
    <ul style="margin: 0">
        <li style="display: inline">
            <span>現在位置：</span>
        </li>
        <li style="display: inline">
            <a href="">H O M E</a>
        </li>
        >
        <li style="display: inline">
            <a  class="nowPage" style="text-decoration: none; color: black">ユーザー管理</a>
        </li>
        >
        <li style="display: inline">
            <a class="nowPage" style="text-decoration: none; color: black">ユーザー情報編集</a>
        </li>
    </ul>
</div>
<div class="page-header">
  <h1>ユーザー情報編集</h1>
</div>
<div class="well">
<form action="" method="post" accept-charset="utf-8"><fieldset>
<legend>ユーザー情報</legend>
<table class='table table-bordered'><tr><td style='width:150px'><label for="email_address">メールアドレス</label></td><td><input type="text" name="email_address" value="xjklongbbb@yahoo.co.jp" readonly="readonly" id="email_address" maxlength="30"  /></td></tr>
<tr><td><label for="password">パスワード</label><td><input type="password" name="password" value="" minlength="4" maxlength="30"/></td></tr><tr><td><label for="password_conf">パスワード再入力</label></td><td><input type="password" name="password_conf" value="" minlength="4" maxlength="30"  /></td></tr></table></fieldset><button name="submit" type="submit" id="submit" style="margin-bottom: 3px" value="Update" class="btn btn-primary" >&nbsp;&nbsp;&nbsp;更新&nbsp;&nbsp;&nbsp;</button><span></span>
    <a href="" class="btn">キャンセル</a>
</form></div>
</div>
</template>
<script>
import {albumViewModel} from '@/view-model/Album'
import {ACTIONS} from '@/store/action-types'

export default {
  mixins: [albumViewModel],
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
