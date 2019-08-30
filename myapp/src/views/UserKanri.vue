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
      <a class="brand" href="https://mieru360.com/">Panolib</a>
      <div class="nav-collapse">
        <ul class="nav">
          <li><a href="/#/Album">物件一覧</a></li>
          <li class="active"><a href="/#/User">ユーザー管理</a></li>
          <li><a href="/#/Riyo">利用状況一覧</a></li>
        </ul>
        <p class="navbar-text pull-right"><a href="/#/Top">ログアウト</a></p>
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
            <a href="/#/Album">H O M E</a>
        </li>
        >
        <li style="display: inline">
            <a  class="nowPage" style="text-decoration: none; color: black">ユーザー管理</a>
        </li>
    </ul>
</div>
<div class="page-header">
  <h1>ユーザー管理</h1>
</div>
<table class="table table-striped table-bordered">
  <thead>
    <tr>
      <th>アカウントID</th>
      <th>権限</th>
      <th>状態</th>
      <th>システム登録日付</th>
      <th>所有アルバム数</th>
        <th>所有画像数</th>
      <th>
                <a class="btn btn-primary" href="/#/UserEdit">ユーザー作成</a>
              </th>
    </tr>
  </thead>
    <tbody>
      <tr v-for="item in items" :key="item">
      <td>{{item.userid}}</td>
      <td>{{item.kengen}}</td>
      <td>{{item.yukokbn}}</td>
      <td>{{item.systemdate}}</td>
      <td>{{item.picnum}}</td>
        <td>{{item.picnum}}</td>
      <td>
        <div class="btn-group">
          <a class="btn" href="/#/UserEdit">編&nbsp;&nbsp;&nbsp;集</a>
          </div>
          </td>
    </tr>
    <tr>
      <td>xjklongbbb@yahoo.co.jp</td>
      <td>作業者</td>
      <td>有効</td>
      <td>2019/08/08</td>
      <td>1</td>
      <td>1</td>
      <td>
        <div class="btn-group">
          <a class="btn dropdown-toggle" data-toggle="dropdown" href="#">操作<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href=""><i class="icon-pencil"></i>編集</a></li>
        <li><a href=""><i class="icon-ban-circle"></i>無効化</a></li>
        <li><a class="user-delete-btn" href="#user-modal" data-toggle="modal" rel="">
        <i class="icon-trash"></i>削除</a></li>
        </ul>
        </div>
        </td>
    </tr>
    </tbody>
</table>
</div>
</template>
<script>
import {userKanriViewModel} from '@/view-model/UserKanri'
import {ACTIONS} from '@/store/action-types'

export default {
  mixins: [userKanriViewModel],
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
